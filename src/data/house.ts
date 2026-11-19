// Reviewed facts for InGreen House. Sources: Booking.com listing captured 2026-11-18
// (snapshot 993b49472ab547849bccc2aca7d84a06), embedded room records, host's own listing text.
// Guest reviews informed emphasis only; no review text is published.
import type { ImageMetadata } from 'astro';
import alts from './alts.json';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

export type Photo = { id: string; src: ImageMetadata; alt: string };

export function photo(id: string): Photo {
  const file = files[`../assets/photos/${id}.jpg`];
  const alt = (alts as Record<string, string>)[id];
  if (!file || !alt) throw new Error(`Missing reviewed photo ${id}`);
  return { id, src: file.default, alt };
}

export const booking = 'https://www.booking.com/hotel/si/ingreen-house.en-gb.html';
export const airbnb = 'https://www.airbnb.com/rooms/36855048'; // whole property, one listing
export const capturedAt = '2026-11-18';
export const coords = { lat: 46.327803, lng: 14.058447 };
export const directions = `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`;

// Home-page sections, linked from every page's nav.
export const nav = [['/#garden', 'Garden'], ['/#river', 'River'], ['/#host', 'Host'], ['/#know', 'Good to know']] as const;

export const levels = [
  { id: 'road', name: 'The road', hint: 'Bus stop and parking at the gate' },
  { id: 'house', name: 'The house', hint: 'Three floors like a tree, and a chalet' },
  { id: 'garden', name: 'The garden', hint: 'Pool, barbecue, vegetable beds' },
  { id: 'slope', name: 'The slope', hint: 'A steep forest path' },
  { id: 'river', name: 'The river', hint: 'The Sava Bohinjka' },
] as const;

export type Unit = {
  id: string; name: string; nickname: string;
  area: number; sleeps: string; beds: string; bedrooms: number; bathrooms: number; access: string;
  text: string; outdoor: string; extras: string[];
  hero: string; photos: string[];
};

// Names are the host's own (as on Airbnb). Occupancy labels and bed wording are Booking's room-table text, kept verbatim.
// Photos follow Booking's own room-photo associations (rooms.json), never shared shots.
export const units: Unit[] = [
  {
    id: 'tree-root', name: 'Tree root', nickname: 'the patio apartment',
    area: 95, sleeps: '6 adults, 1 child', beds: '1 large double · 1 double · 1 sofa bed', bedrooms: 2, bathrooms: 2,
    access: 'Ground floor, private entrance',
    text: 'The biggest of the four and the one that feels most like a whole house: a living room with a wood stove and a hammock chair, two bedrooms, a bathroom with a massage bath and a second with a walk-in shower.',
    outdoor: 'A paved patio with a big table, umbrella and stone grill.',
    extras: ['Massage bath', 'Fireplace', 'Dishwasher & oven', 'Air conditioning'],
    hero: '512110168',
    photos: ['512110168', '924991603', '512110169', '512110166', '513290865', '525701654', '525701649', '403540787', '403540783', '339186612', '332003678', '208741960'],
  },
  {
    id: 'tree-trunk', name: 'Tree trunk', nickname: 'the one with the peak',
    area: 50, sleeps: '6 adults, 1 child', beds: '2 single + 1 double · 1 sofa bed', bedrooms: 1, bathrooms: 1,
    access: 'Upper floor, outdoor wooden stairs',
    text: 'Up the outside staircase, under a painted forest of deer: a living room with a wood stove, one bedroom with two singles and a double, a sofa bed and a shower room.',
    outdoor: 'A covered terrace looking straight at the mountain.',
    extras: ['Terrace', 'Fireplace', 'Dishwasher & oven', 'Air conditioning'],
    hero: '328818754',
    photos: ['328818754', '906928033', '413565624', '328818756', '328818759', '328818762', '328818744', '411804929', '229532824', '423640109', '411804924', '411804927', '208742954', '413565608'],
  },
  {
    id: 'tree-crown', name: 'Tree crown', nickname: 'under the beams',
    area: 75, sleeps: '6 adults', beds: '1 large double · 1 extra-large double · 1 sofa bed', bedrooms: 2, bathrooms: 1,
    access: 'Attic, up an open staircase',
    text: 'The attic: timber beams, skylights and one long open room for cooking, eating and sitting, with two bedrooms and a shower room. Reached by an open staircase.',
    outdoor: 'An outdoor kitchen and long table under a canopy, against the rock wall.',
    extras: ['Outdoor kitchen', 'Skylights', 'Dishwasher & oven', 'Air conditioning'],
    hero: '512110375',
    photos: ['512110375', '478875182', '512110378', '512110373', '512110377', '512110374', '643563695', '208743660', '250524226', '662998577', '531024159', '531024156', '675398780'],
  },
  {
    id: 'chalet', name: 'Chalet', nickname: 'the wooden cabin',
    area: 25, sleeps: '2 adults', beds: '1 futon · 1 sofa bed', bedrooms: 1, bathrooms: 1,
    access: 'Detached, on the lawn',
    text: 'A small wooden chalet of its own in the garden, for two. Pine walls, a little kitchen and table, a sofa, a ladder up to the sleeping loft under string lights, and a compact shower room.',
    outdoor: 'Its own covered porch with outdoor furniture, facing the lawn and forest.',
    extras: ['Detached', 'Sleeping loft', 'Kitchen', 'Air conditioning'],
    hero: '463854133',
    photos: ['463854133', '208744064', '536454706', '536454701', '539046016', '439322776', '461706288', '461706124', '208744158', '208744133'],
  },
];

// Distances: Booking.com "what's nearby" (converted from miles) or the host's description.
export const nearby = [
  { name: 'Bus stop', metres: 10, source: 'host' },
  { name: 'Gostilna Batišt', metres: 1100, source: 'Booking.com' },
  { name: 'Iglica Waterfalls', metres: 2400, source: 'Booking.com' },
  { name: 'Lake Bled', metres: 5500, source: 'Booking.com' },
  { name: 'Bled Castle', metres: 7400, source: 'Booking.com' },
  { name: 'Bohinj · Triglav NP', metres: 10000, source: 'host' },
  { name: 'Ljubljana Airport', metres: 40200, source: 'Booking.com' },
] as const;

export const practical = [
  ['Check-in', '15:00–22:00. Tell the host your arrival time in advance.'],
  ['Check-out', 'Until 10:00.'],
  ['The pool', 'Small and seasonal, on the rooftop deck. Free to use.'],
  ['The slope', 'The forest path down to the river is very steep. Keep small children close.'],
  ['Stairs', 'Tree trunk and Tree crown are reached by stairs only.'],
  ['Children', 'All ages welcome. A cot (0–2) and a high chair are free on request. No extra beds.'],
  ['Pets', 'Welcome, € 8 per day.'],
  ['Laundry', 'Available for an extra charge.'],
  ['Quiet', 'Quiet hours 23:00–06:00. No smoking, no parties or stag/hen groups.'],
  ['Payment', 'Booked through Booking.com or Airbnb, they take payment for the stay; bring cash for extras.'],
] as const;
