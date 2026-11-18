// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Self-hosted Fontsource files (OFL). Latin + latin-ext so Slovene names (š, ž, č) use the real face.
const LATIN = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const LATIN_EXT = 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';
const faces = (pkg, file, weight, style) => [
  { weight, style, src: [`${pkg}/files/${file.replace('SUBSET', 'latin')}`], unicodeRange: [LATIN] },
  { weight, style, src: [`${pkg}/files/${file.replace('SUBSET', 'latin-ext')}`], unicodeRange: [LATIN_EXT] },
];
const family = (name, cssVariable, fallbacks, variants) => ({ provider: fontProviders.local(), name, cssVariable, fallbacks, options: { variants } });

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  image: { layout: 'constrained', responsiveStyles: false },
  fonts: [
    family('Instrument Serif', '--ff-display', ['Georgia', 'serif'], [
      ...faces('@fontsource/instrument-serif', 'instrument-serif-SUBSET-400-normal.woff2', 400, 'normal'),
      ...faces('@fontsource/instrument-serif', 'instrument-serif-SUBSET-400-italic.woff2', 400, 'italic'),
    ]),
    family('Hanken Grotesk', '--ff-body', ['system-ui', 'sans-serif'],
      faces('@fontsource-variable/hanken-grotesk', 'hanken-grotesk-SUBSET-wght-normal.woff2', '100 900', 'normal')),
  ],
  vite: { plugins: [tailwindcss()] },
});
