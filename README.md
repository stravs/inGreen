# InGreen House — "From the bus stop to the river"

Standalone Astro 7 + Tailwind v4 site. Private preview (`noindex`). Custom design, not the shared Izba generator.

## Concept

The property runs downhill: road → house → garden → steep forest → Sava Bohinjka. The page walks the same way.
A thin green line under the fixed nav tracks your position. The nav is clear at the top and animates to white once you scroll (white without JS).
The main call to action is the enquiry form (`#enquire`); Booking.com is the secondary link. Form delivery is not connected yet:
it validates, then says nothing was sent. The mobile menu is a native `popover`.
Apartments are introduced by their own outdoor space (patio, peak-view terrace, outdoor kitchen, cabin porch).
Each apartment has its own page at `/apartments/<id>/` (hero, details, all photos, other apartments, enquiry form
with that apartment preselected). Header, footer and enquiry form are shared components.

## Cloudflare Workers

Static assets only: no SSR adapter, Worker script, runtime secrets or database needed.

### GitHub-connected build

In Cloudflare **Workers & Pages → Create → Import a repository**, select `stravs/inGreen`:

- Root directory: repository root (`/`)
- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Worker name: `ingreen-house-river` (must match `wrangler.jsonc`)
- Build environment variable: `NODE_VERSION=24.22.0`

Install dependencies with `npm ci` if configuring the install command separately.
Wrangler uploads `dist/`; source photos and `node_modules` are not uploaded.

### CLI

```sh
npm ci
npm run deploy:check         # build + dry run; does not publish
npm run check:cloudflare     # build + local routing/header regression checks
npm run preview:cloudflare  # build + local Workers runtime, port 8787
npx wrangler login          # one-time authentication
npm run deploy             # publishes to Cloudflare
```

The preview binds to `0.0.0.0`; in a container use its IP address, not localhost.
For CI outside Cloudflare Builds, use a scoped `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` in the CI secret store, never in Git.

`public/_headers` adds security headers, `X-Robots-Tag: noindex, nofollow`, and
immutable browser caching only for fingerprinted `/_astro/` assets. HTML keeps
Cloudflare's default revalidation. Unknown paths return 404, not the homepage.

This remains a **noindex preview**, not an access-controlled site. Use Cloudflare
Access if the content must be private. The enquiry form still sends nothing.
No domain, canonical URL or sitemap is configured until the final origin is known.
Before a public launch: connect form delivery, verify property details, configure
the domain, and remove both the HTML robots tag and `_headers` noindex rule.

References: [Astro deployment](https://docs.astro.build/en/guides/deploy/cloudflare/),
[Workers static assets](https://developers.cloudflare.com/workers/static-assets/),
[headers](https://developers.cloudflare.com/workers/static-assets/headers/).

## Evidence

- Facts: Booking.com listing captured 2026-11-18 and embedded room records (`data/runs/ingreen-house/rooms.json`).
- Unit photos follow Booking's own room-photo associations. Garden/river photos are property-level.
- Guest reviews (10 featured of 141) set the emphasis: quiet, the river, families with small children, the host, the bus, honest notes
  (small pool, very steep slope, stairs). No review text, names or quotes are published. The slope warning comes from
  reviews, not the listing: the owner should confirm it.
- Host quote and host details come from the host's own listing text.

## Run

```sh
npm ci && npm run build          # dist/
python3 -m http.server 4461 --bind 0.0.0.0 --directory dist
```

Fonts are self-hosted from Fontsource (OFL): Instrument Serif, Hanken Grotesk, IBM Plex Mono.
Photo galleries use native `<dialog>` with invoker commands (`command`/`commandfor`), so no JS is needed to open them.
