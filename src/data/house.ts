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
export const capturedAt = '2026-11-18';
export const coords = { lat: 46.327803, lng: 14.058447 };
export const directions = `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`;

export const levels = [
  { id: 'road', name: 'The road', hint: 'Bus stop and parking at the gate' },
  { id: 'house', name: 'The house', hint: 'Four apartments, four outdoor rooms' },
  { id: 'garden', name: 'The garden', hint: 'Pool, barbecue, vegetable beds' },
  { id: 'slope', name: 'The slope', hint: 'A steep forest path' },
  { id: 'river', name: 'The river', hint: 'The Sava Bohinjka' },
] as const;

export type Unit = {
  id: string; name: string; nickname: string;
  area: number; sleeps: string; beds: string; bedrooms: number; bathrooms: number; access: string;
  text: string; outdoor: string; extras: string[];
  hero: string; thumbs: string[]; photos: string[];
};

// Occupancy labels and bed wording are Booking's room-table text, kept verbatim.
// Photos follow Booking's own room-photo associations (rooms.json), never shared shots.
export const units: Unit[] = [
  {
    id: 'ground-floor', name: 'Apartment – Ground Floor', nickname: 'the patio apartment',
    area: 95, sleeps: '6 adults, 1 child', beds: '1 large double · 1 double · 1 sofa bed', bedrooms: 2, bathrooms: 2,
    access: 'Ground floor, private entrance',
    text: 'The biggest of the four and the one that feels most like a whole house: a living room with a wood stove and a hammock chair, two bedrooms, a bathroom with a bath and a second with a walk-in shower, and a private hot tub.',
    outdoor: 'A paved patio with a big table, umbrella and stone grill.',
    extras: ['Private hot tub', 'Fireplace', 'Dishwasher & oven', 'Air conditioning'],
    hero: '924991603', thumbs: ['512110168', '513290865', '332003678'],
    photos: ['924991603', '512110168', '512110169', '512110166', '513290865', '525701654', '525701649', '403540787', '403540783', '339186612', '332003678', '208741960'],
  },
  {
    id: 'terrace', name: 'Apartment with Terrace', nickname: 'the one with the peak',
    area: 50, sleeps: '6 adults, 1 child', beds: '2 single + 1 double · 1 sofa bed', bedrooms: 1, bathrooms: 1,
    access: 'Upper floor, outdoor wooden stairs',
    text: 'Up the outside staircase, under a painted forest of deer: a living room with a wood stove, one bedroom with two singles and a double, a sofa bed and a shower room.',
    outdoor: 'A covered wooden terrace looking straight at the mountain.',
    extras: ['Terrace', 'Fireplace', 'Dishwasher & oven', 'Air conditioning'],
    hero: '906928033', thumbs: ['328818754', '328818759', '411804929'],
    photos: ['906928033', '413565624', '328818756', '328818759', '328818754', '328818762', '328818744', '411804929', '229532824', '423640109', '411804924', '411804927', '208742954', '413565608'],
  },
  {
    id: 'loft', name: 'Loft', nickname: 'under the beams',
    area: 75, sleeps: '6 adults', beds: '1 large double · 1 extra-large double · 1 sofa bed', bedrooms: 2, bathrooms: 1,
    access: 'Attic, up an open staircase',
    text: 'The attic: timber beams, skylights and one long open room for cooking, eating and sitting, with two bedrooms and a shower room. Reached by an open staircase.',
    outdoor: 'An outdoor kitchen and long table under a canopy, against the rock wall.',
    extras: ['Outdoor kitchen', 'Skylights', 'Dishwasher & oven', 'Air conditioning'],
    hero: '478875182', thumbs: ['512110375', '643563695', '662998577'],
    photos: ['478875182', '512110375', '512110378', '512110373', '512110377', '512110374', '643563695', '208743660', '250524226', '662998577', '531024159', '531024156', '675398780'],
  },
  {
    id: 'cabin', name: 'Apartment with Garden View', nickname: 'the wooden cabin',
    area: 25, sleeps: '2 adults', beds: '1 futon · 1 sofa bed', bedrooms: 1, bathrooms: 1,
    access: 'Detached, on the lawn',
    text: 'A small wooden cabin of its own in the garden, for two. Pine walls, a little kitchen and table, a sofa, a ladder up to the sleeping loft under string lights, and a compact shower room.',
    outdoor: 'Its own porch with two yellow chairs, facing the lawn and forest.',
    extras: ['Detached', 'Sleeping loft', 'Kitchen', 'Air conditioning'],
    hero: '463854133', thumbs: ['539046016', '536454706', '461706288'],
    photos: ['463854133', '208744064', '536454706', '536454701', '539046016', '439322776', '461706288', '461706124', '208744158', '208744133'],
  },
];

// Booking.com category scores (all guests), captured with the listing.
export const score = { value: 8.7, count: 141 };
export const categories = [
  ['Staff', 9.1], ['Location', 8.9], ['Comfort', 8.8], ['Free WiFi', 8.7],
  ['Cleanliness', 8.6], ['Facilities', 8.5], ['Value for money', 8.5],
] as const;

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
  ['Stairs', 'The Terrace apartment and the Loft are reached by stairs only.'],
  ['Children', 'All ages welcome. Cots for 0–2 free on request. No extra beds.'],
  ['Pets', 'Welcome, € 8 per day.'],
  ['Laundry', 'Available for an extra charge.'],
  ['Quiet', 'Quiet hours 23:00–06:00. No smoking, no parties or stag/hen groups.'],
  ['Payment', 'Booking.com takes payment for the stay; bring cash for extras.'],
] as const;
