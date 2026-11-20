// English copy. Facts (sizes, photos, links) live in src/data; every visible word lives here and in sl.ts.
// Sources: Booking.com listing captured 2026-11-18, embedded room records, the host's own listing text.
// Studio Miška: its Booking.com listing and the reviewed Studio Miška site; distance, owner and terrace from the owner.
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const en = {
  lang: 'en',
  other: { label: 'SL', name: 'Slovenščina' },
  country: 'Slovenia',

  nav: {
    main: 'Main', mobile: 'Mobile', menu: 'Menu', close: 'Close ✕',
    apartments: 'Apartments', garden: 'Garden', river: 'River', host: 'Host', know: 'Good to know',
    enquire: 'Enquire', sendEnquiry: 'Send an enquiry', away: '2 km away',
  },

  levels: {
    road: { name: 'The road', hint: 'Bus stop and parking at the gate' },
    house: { name: 'The house', hint: 'Three floors like a tree, and a chalet' },
    garden: { name: 'The garden', hint: 'Pool, barbecue, vegetable beds' },
    slope: { name: 'The slope', hint: 'A steep forest path' },
    river: { name: 'The river', hint: 'The Sava Bohinjka' },
  },

  // Names are the host's own (as on Airbnb). Occupancy and bed wording is Booking's room-table text, kept verbatim.
  units: {
    'tree-root': {
      name: 'Tree root', nickname: 'the patio apartment',
      sleeps: '6 adults, 1 child', beds: '1 large double · 1 double · 1 sofa bed',
      access: 'Ground floor, private entrance',
      text: 'The biggest of the four and the one that feels most like a whole house: a living room with a wood stove and a hammock chair, two bedrooms, a bathroom with a massage bath and a second with a walk-in shower.',
      outdoor: 'A paved patio with a big table, umbrella and stone grill.',
      extras: ['Massage bath', 'Fireplace', 'Dishwasher & oven', 'Air conditioning'],
    },
    'tree-trunk': {
      name: 'Tree trunk', nickname: 'the one with the peak',
      sleeps: '6 adults, 1 child', beds: '2 single + 1 double · 1 sofa bed',
      access: 'Upper floor, outdoor wooden stairs',
      text: 'Up the outside staircase, under a painted forest of deer: a living room with a wood stove, one bedroom with two singles and a double, a sofa bed and a shower room.',
      outdoor: 'A covered terrace looking straight at the mountain.',
      extras: ['Terrace', 'Fireplace', 'Dishwasher & oven', 'Air conditioning'],
    },
    'tree-crown': {
      name: 'Tree crown', nickname: 'under the beams',
      sleeps: '6 adults', beds: '1 large double · 1 extra-large double · 1 sofa bed',
      access: 'Attic, up an open staircase',
      text: 'The attic: timber beams, skylights and one long open room for cooking, eating and sitting, with two bedrooms and a shower room. Reached by an open staircase.',
      outdoor: 'An outdoor kitchen and long table under a canopy, against the rock wall.',
      extras: ['Outdoor kitchen', 'Skylights', 'Dishwasher & oven', 'Air conditioning'],
    },
    chalet: {
      name: 'Chalet', nickname: 'the wooden cabin',
      sleeps: '2 adults', beds: '1 futon · 1 sofa bed',
      access: 'Detached, on the lawn',
      text: 'A small wooden chalet of its own in the garden, for two. Pine walls, a little kitchen and table, a sofa, a ladder up to the sleeping loft under string lights, and a compact shower room.',
      outdoor: 'Its own covered porch with outdoor furniture, facing the lawn and forest.',
      extras: ['Detached', 'Sleeping loft', 'Kitchen', 'Air conditioning'],
    },
  },

  bedrooms: (n: number) => plural(n, 'bedroom', 'bedrooms'),
  bathrooms: (n: number) => plural(n, 'bathroom', 'bathrooms'),
  photos: (n: number) => `All ${n} photos`,

  // Distances: Booking.com "what's nearby" or the host's description.
  nearby: {
    bus: 'Bus stop', batist: 'Gostilna Batišt', iglica: 'Iglica Waterfalls', lake: 'Lake Bled',
    castle: 'Bled Castle', bohinj: 'Bohinj · Triglav NP', airport: 'Ljubljana Airport',
    note: 'Approximate distances, not travel times.',
  },

  practical: [
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
  ],

  home: {
    title: 'InGreen House — Obrne, between Bled and Bohinj',
    description: 'Four self-catering apartments in a big green garden above the Sava Bohinjka river, in a village of about twenty houses, 5 km from Bled.',
    eyebrow: 'Obrne · Bohinjska Bela · Julian Alps',
    h1: ['Birds above.', 'The river below.'],
    intro: 'Four self-catering apartments in a big green garden above the Sava Bohinjka — in Obrne, a village of about twenty houses, 5 km from Bled.',
    seeApartments: 'See the apartments',
    index: 'Road to river',
    road: {
      h2: 'Off the main road, on the bus line.',
      facts: [
        ['10 m', 'to the bus stop at the gate. Buses run about once an hour — straight to Lake Bled.'],
        ['5 km', 'to Bled. Bohinj and Triglav National Park are about 10 km.'],
        ['~20', 'houses in Obrne. It is a very small village.'],
        ['Free', 'private parking on site. No reservation needed.'],
      ],
      caption: 'The house from the village road',
    },
    house: {
      h2: ['One house,', 'grown like a tree.'],
      text: 'Three apartments stacked one above the other, from the roots up to the crown, and a chalet of its own on the lawn. Each has its own entrance, its own kitchen and a place to eat outside, with a barbecue. Old and new are mixed throughout, and all the bedding is cotton.',
      tree: 'The house, top floor first',
    },
    garden: {
      h2: 'A big green garden, shared.',
      text: 'Eat outside with the view, light the barbecue, pick fresh vegetables, borrow a bike. Then cool off in the pool — small, seasonal, and up on the rooftop deck.',
      captions: ['The pool deck', 'Pool, garden, peaks', 'Vegetables to pick', 'Raspberries', 'Peonies', 'Deck, looking up the valley', 'The path down to the chalet'],
      features: ['Seasonal pool, free', 'Sun loungers & umbrellas', 'Barbecue & outdoor fireplace', 'Picnic & outdoor dining', 'Vegetable beds', 'Bikes to hire from the hosts', 'Badminton & board games', 'Mountain & garden views'],
    },
    slope: {
      h2: 'Then the forest drops away.',
      text: ['Below the garden a wooded slope falls steeply to the river. It is a scramble, not a stroll: wear proper shoes, and keep small children close.', 'The quiet is the point. Away from the traffic of Bled, what you hear is birds and water.'],
      caption: 'Look up: Babji zob above the forest',
    },
    river: {
      h2: 'Sava Bohinjka.',
      items: [
        ['Fly fishing', "Elizabeta's husband is a fly-fishing guide and can provide everything you need. Fishing carries an extra charge."],
        ['On foot & by bike', 'The area is made for hiking, cycling and climbing. Iglica Waterfalls are about 2.4 km away.'],
        ['Lakes', 'Lake Bled is about 5.5 km away — or take the bus from the gate. Bohinj is about 10 km.'],
      ],
      fromGate: 'From the gate',
    },
    host: {
      eyebrow: 'Your host',
      quote: '“Want to wake up with birds and river singing?”',
      text: 'Elizabeta and her family live about 3 km away: there when you need them, otherwise out of your way. She speaks German, English and Croatian.',
    },
    miska: {
      eyebrow: 'Also from Elizabeta',
      h2: 'Studio Miška, for two.',
      text: 'A ground-floor studio with its own entrance and a private terrace, about 2 km away in Bohinjska Bela. Adults only: a quiet place for a couple.',
      link: 'See Studio Miška →',
    },
    know: { h2: 'Good to know before you book.', text: 'Small pool, steep slope, stairs. Better to know now than on arrival.' },
  },

  unit: {
    title: (name: string) => `${name} — InGreen House, Obrne`,
    description: (area: number, sleeps: string, text: string) => `${area} m², sleeps ${sleeps}. ${text}`,
    meta: (area: number, sleeps: string, bedrooms: number) => `${area} m² · sleeps ${sleeps} · ${plural(bedrooms, 'bedroom', 'bedrooms')}`,
    view: (name: string) => `View ${name} →`,
    card: 'View apartment →',
    outdoor: 'The outdoor space',
    size: 'Size', sleeps: 'Sleeps', bedrooms: 'Bedrooms', bathrooms: 'Bathrooms', beds: 'Beds', access: 'Access',
    enquire: 'Enquire about this apartment',
    others: 'The other apartments',
  },

  gallery: { title: 'Photos', open: 'Open photo full screen', label: (name: string) => `${name}: photos`, prev: 'Previous photo', next: 'Next photo' },

  miska: {
    title: 'Studio Miška — a studio for two in Bohinjska Bela',
    description: "21 m², for 2 adults, with a private terrace. Elizabeta's studio, about 2 km from InGreen House.",
    eyebrow: 'Also from Elizabeta · Bohinjska Bela',
    subtitle: 'a studio for two',
    intro: 'A ground-floor studio with its own entrance and a private terrace. About 2 km from InGreen House.',
    sleeps: '2 adults', beds: '1 large double bed', access: 'Ground floor, private entrance',
    text: 'One bright room on the ground floor, in the village of Bohinjska Bela: a double bed, a round table for two, a small kitchen and a bathroom with a walk-in shower. The front door is your own.',
    outdoor: 'A private terrace with an outdoor sofa and chairs under a canopy.',
    extras: ['Private terrace', 'Kitchen', 'Air conditioning', 'Free Wi-Fi', 'Free parking'],
    bed: 'Bed', where: 'Where',
    enquire: 'Enquire about the studio',
    know: 'Good to know.',
    practical: [
      ['Check-in', '15:00–21:00. Tell Elizabeta your arrival time in advance.'],
      ['Check-out', '08:00–10:00.'],
      ['Adults only', 'No children, no pets.'],
      ['Quiet', 'Quiet hours 22:00–06:00. No smoking, no parties.'],
      ['Nearby', 'The Airbnb listing puts a bus stop, a grocery shop and a pub about 100 m away.'],
      ['Payment', 'Booked through Booking.com or Airbnb, they take payment for the stay.'],
    ],
  },

  enquire: {
    eyebrow: 'Enquire',
    h2: 'When would you like to come?',
    text: 'Tell Elizabeta your dates and who is coming. An enquiry is not a booking.',
    directions: 'Directions ↗', booking: 'Or book on Booking.com ↗', airbnb: 'or Airbnb ↗',
    legend: 'Your enquiry', name: 'Name', email: 'Email', apartment: 'Apartment', choose: 'Help me choose',
    miskaOption: (sleeps: string) => `Studio Miška (${sleeps}, 2 km away)`,
    miskaNote: 'Studio Miška is for adults only: no children, no pets.',
    arrival: 'Arrival', departure: 'Departure', addDate: 'Add date',
    adults: 'Adults', children: 'Children', message: 'Message',
    placeholder: "Children's ages, pets, arrival time, questions…",
    send: 'Send enquiry', noscript: 'The form needs JavaScript.',
    stay: 'Your stay', closeLabel: 'Close', prevMonths: 'Previous months', nextMonths: 'Next months',
    clear: 'Clear dates', done: 'Done',
    // Read by the browser script. Cally and Intl use `locale`.
    client: {
      locale: 'en-GB', addDate: 'Add date', night: 'night', nights: 'nights',
      chooseArrival: 'Choose your arrival date.', chooseDeparture: 'Now choose your departure date.',
      oneNight: 'Stay at least one night. Choose your departure date.',
      needDates: 'Choose your arrival and departure dates.',
      adultsOnly: 'Studio Miška is for adults only.',
      notSent: 'Not sent: enquiry delivery is not connected yet.',
    },
  },

  footer: {
    label: 'Footer', tagline: 'Birds above. The river below.',
    text: 'Four self-catering apartments in a green garden above the Sava Bohinjka, 5 km from Bled.',
    explore: 'Explore', find: 'Find us', directions: 'Directions ↗',
    copyright: 'InGreen House · Obrne, Julian Alps', top: 'Back to top ↑',
  },
};

export type Copy = typeof en;
