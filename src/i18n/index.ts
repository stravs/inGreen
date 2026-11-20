import { en, type Copy } from './en';
import { sl } from './sl';

export type Lang = 'en' | 'sl';
export type { Copy };
const copy: Record<Lang, Copy> = { en, sl };

// English lives at the root, Slovenian under /sl/ (astro.config i18n, prefixDefaultLocale: false).
export function useCopy(astro: { currentLocale?: string; url: URL }) {
  const lang: Lang = astro.currentLocale === 'sl' ? 'sl' : 'en';
  const path = astro.url.pathname;
  return {
    lang,
    c: copy[lang],
    url: (p: string) => (lang === 'en' ? p : `/sl${p}`),
    // The same page in the other language.
    other: lang === 'sl' ? path.replace(/^\/sl(?=\/)/, '') : `/sl${path}`,
  };
}

// For pages under src/pages/[...lang]/: one build per language.
export const langPaths = () => [{ params: { lang: undefined } }, { params: { lang: 'sl' } }];
