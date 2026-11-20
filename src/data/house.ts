// Reviewed facts for InGreen House (copy is in src/i18n). Sources: Booking.com listing captured 2026-11-18
// (snapshot 993b49472ab547849bccc2aca7d84a06), embedded room records, host's own listing text.
// Guest reviews informed emphasis only; no review text is published.
import type { ImageMetadata } from 'astro';
import type { Copy, Lang } from '../i18n';
import en from './alts.json';
import sl from './alts.sl.json';

const alts: Record<Lang, Record<string, string>> = { en, sl };

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

export type Photo = { id: string; src: ImageMetadata; alt: string };

export function photo(id: string, lang: Lang = 'en'): Photo {
  const file = files[`../assets/photos/${id}.jpg`];
  const alt = alts[lang][id];
  if (!file || !alt) throw new Error(`Missing reviewed photo ${id}`);
  return { id, src: file.default, alt };
}

export const booking = 'https://www.booking.com/hotel/si/ingreen-house.en-gb.html';
export const airbnb = 'https://www.airbnb.com/rooms/36855048'; // whole property, one listing
export const street = 'Obrne 2, 4263 Bohinjska Bela';
export const capturedAt = '2026-11-18';
export const coords = { lat: 46.327803, lng: 14.058447 };
export const directions = `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`;
// Booking.com listing in the page's language.
export const bookingIn = (url: string, lang: Lang) => (lang === 'sl' ? url.replace('.en-gb.html', '.sl.html') : url);

// Home-page sections, linked from every page's nav. Labels are in src/i18n.
export const nav = ['garden', 'river', 'host', 'know'] as const;
export const levels = ['road', 'house', 'garden', 'slope', 'river'] as const;

// Facts only; names and descriptions are in src/i18n.
// Photos follow Booking's own room-photo associations (rooms.json), never shared shots.
type UnitFacts = { id: keyof Copy['units']; area: number; bedrooms: number; bathrooms: number; hero: string; photos: string[] };
export const units: UnitFacts[] = [
  { id: 'tree-root', area: 95, bedrooms: 2, bathrooms: 2, hero: '512110168',
    photos: ['512110168', '924991603', '512110169', '512110166', '513290865', '525701654', '525701649', '403540787', '403540783', '339186612', '332003678', '208741960'] },
  { id: 'tree-trunk', area: 50, bedrooms: 1, bathrooms: 1, hero: '328818754',
    photos: ['328818754', '906928033', '413565624', '328818756', '328818759', '328818762', '328818744', '411804929', '229532824', '423640109', '411804924', '411804927', '208742954', '413565608'] },
  { id: 'tree-crown', area: 75, bedrooms: 2, bathrooms: 1, hero: '512110375',
    photos: ['512110375', '478875182', '512110378', '512110373', '512110377', '512110374', '643563695', '208743660', '250524226', '662998577', '531024159', '531024156', '675398780'] },
  { id: 'chalet', area: 25, bedrooms: 1, bathrooms: 1, hero: '463854133',
    photos: ['463854133', '208744064', '536454706', '536454701', '539046016', '439322776', '461706288', '461706124', '208744158', '208744133'] },
];

export type Unit = UnitFacts & Copy['units'][keyof Copy['units']];
export const unitsIn = (c: Copy): Unit[] => units.map(u => ({ ...u, ...c.units[u.id] }));

// Distances: Booking.com "what's nearby" (converted from miles) or the host's description.
export const nearby = [
  { key: 'bus', metres: 10, source: 'host' },
  { key: 'batist', metres: 1100, source: 'Booking.com' },
  { key: 'iglica', metres: 2400, source: 'Booking.com' },
  { key: 'lake', metres: 5500, source: 'Booking.com' },
  { key: 'castle', metres: 7400, source: 'Booking.com' },
  { key: 'bohinj', metres: 10000, source: 'host' },
  { key: 'airport', metres: 40200, source: 'Booking.com' },
] as const;
