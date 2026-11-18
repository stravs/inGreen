import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { readdir } from 'node:fs/promises';
import { setTimeout } from 'node:timers/promises';

const origin = 'http://127.0.0.1:8799';
const server = spawn(process.execPath, [
  'node_modules/wrangler/bin/wrangler.js', 'dev', '--ip', '0.0.0.0', '--port', '8799',
], { stdio: 'inherit', env: { ...process.env, WRANGLER_SEND_METRICS: 'false' } });

try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error('Wrangler exited before startup');
    try {
      if ((await fetch(origin)).ok) { ready = true; break; }
    } catch { /* Wait for the local runtime. */ }
    await setTimeout(500);
  }
  assert.ok(ready, 'Wrangler startup timed out');
  const home = await fetch(origin);
  assert.equal(home.status, 200);
  assert.match(home.headers.get('x-robots-tag'), /noindex/);
  assert.equal(home.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(home.headers.get('x-frame-options'), 'DENY');
  assert.ok(!home.headers.get('cache-control')?.includes('immutable'));
  assert.match(await home.text(), /name="robots" content="noindex, nofollow"/);
  const head = await fetch(origin, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.match(head.headers.get('x-robots-tag'), /noindex/);
  assert.equal(await head.text(), '');
  const asset = (await readdir('dist/_astro')).find(name => name.endsWith('.webp'));
  assert.ok(asset, 'Expected optimized images');
  const image = await fetch(`${origin}/_astro/${asset}`);
  assert.equal(image.status, 200);
  assert.match(image.headers.get('cache-control'), /max-age=31536000, immutable/);
  const icon = await fetch(`${origin}/favicon.svg`);
  assert.equal(icon.status, 200);
  assert.ok(!icon.headers.get('cache-control')?.includes('immutable'));
  assert.equal((await fetch(`${origin}/missing-page`)).status, 404);
  const redirect = await fetch(`${origin}/index.html`, { redirect: 'manual' });
  assert.equal(redirect.status, 307);
  assert.equal(new URL(redirect.headers.get('location'), origin).pathname, '/');
  console.log('Cloudflare checks passed: headers, caching, HEAD, redirects and 404.');
} finally {
  server.kill('SIGTERM');
}
