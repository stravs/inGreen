// Slovenian copy: a translation of en.ts, same shape. Formal "vi" for guests.
// Apartment names are translated from the host's English names (Tree root → Korenina, …): owner to confirm.
import type { Copy } from './en';

// Slovenian has four number forms: 1, 2, 3–4, 5+ (by the last two digits).
const plural = (n: number, [one, two, few, many]: [string, string, string, string]) => {
  const d = n % 100;
  return `${n} ${d === 1 ? one : d === 2 ? two : d === 3 || d === 4 ? few : many}`;
};

export const sl: Copy = {
  lang: 'sl',
  other: { label: 'EN', name: 'English' },
  country: 'Slovenija',

  nav: {
    main: 'Glavni meni', mobile: 'Mobilni meni', menu: 'Meni', close: 'Zapri ✕',
    apartments: 'Apartmaji', garden: 'Vrt', river: 'Reka', host: 'Gostiteljica', know: 'Dobro je vedeti',
    enquire: 'Povpraševanje', sendEnquiry: 'Pošljite povpraševanje', away: '3 km stran',
  },

  levels: {
    road: { name: 'Cesta', hint: 'Avtobusna postaja in parkirišče ob vhodu' },
    house: { name: 'Hiša', hint: 'Tri nadstropja kot drevo in brunarica' },
    garden: { name: 'Vrt', hint: 'Bazen, žar, zelenjavne grede' },
    slope: { name: 'Pobočje', hint: 'Strma gozdna pot' },
    river: { name: 'Reka', hint: 'Sava Bohinjka' },
  },

  units: {
    'tree-root': {
      name: 'Korenina', nickname: 'apartma s teraso',
      sleeps: '6 odraslih, 1 otrok', beds: '1 velika zakonska · 1 zakonska · 1 raztegljiv kavč',
      access: 'Pritličje, lasten vhod',
      text: 'Največji od štirih in najbolj podoben celi hiši: dnevna soba s pečjo na drva in visečim stolom, dve spalnici, kopalnica z masažno kadjo in druga s tušem brez praga.',
      outdoor: 'Tlakovana terasa z veliko mizo, senčnikom in kamnitim žarom.',
      extras: ['Masažna kad', 'Kamin', 'Pomivalni stroj in pečica', 'Klimatska naprava'],
    },
    'tree-trunk': {
      name: 'Deblo', nickname: 'z razgledom na vrh',
      sleeps: '6 odraslih, 1 otrok', beds: '2 enojni + 1 zakonska · 1 raztegljiv kavč',
      access: 'Zgornje nadstropje, zunanje lesene stopnice',
      text: 'Po zunanjih stopnicah navzgor, pod naslikanim gozdom z jeleni: dnevna soba s pečjo na drva, spalnica z dvema enojnima in zakonsko posteljo, raztegljiv kavč in kopalnica s tušem.',
      outdoor: 'Pokrita terasa s pogledom naravnost na goro.',
      extras: ['Terasa', 'Kamin', 'Pomivalni stroj in pečica', 'Klimatska naprava'],
    },
    'tree-crown': {
      name: 'Krošnja', nickname: 'pod tramovi',
      sleeps: '6 odraslih', beds: '1 velika zakonska · 1 zelo velika zakonska · 1 raztegljiv kavč',
      access: 'Podstrešje, po odprtih stopnicah',
      text: 'Podstrešje: leseni tramovi, strešna okna in en dolg odprt prostor za kuhanje, obedovanje in posedanje, z dvema spalnicama in kopalnico s tušem. Do njega vodijo odprte stopnice.',
      outdoor: 'Zunanja kuhinja in dolga miza pod nadstreškom, ob skalni steni.',
      extras: ['Zunanja kuhinja', 'Strešna okna', 'Pomivalni stroj in pečica', 'Klimatska naprava'],
    },
    chalet: {
      name: 'Brunarica', nickname: 'lesena hiška',
      sleeps: '2 odrasla', beds: '1 futon · 1 raztegljiv kavč',
      access: 'Samostojna, na trati',
      text: 'Majhna lesena brunarica, sama zase na vrtu, za dva. Borove stene, majhna kuhinja z mizo, kavč, lestev do spalnega podstrešja pod lučkami in majhna kopalnica s tušem.',
      outdoor: 'Lastna pokrita veranda z vrtnim pohištvom, obrnjena proti trati in gozdu.',
      extras: ['Samostojna', 'Spalno podstrešje', 'Kuhinja', 'Klimatska naprava'],
    },
  },

  bedrooms: (n: number) => plural(n, ['spalnica', 'spalnici', 'spalnice', 'spalnic']),
  bathrooms: (n: number) => plural(n, ['kopalnica', 'kopalnici', 'kopalnice', 'kopalnic']),
  photos: (n: number) => `Vse fotografije (${n})`,

  nearby: {
    bus: 'Avtobusna postaja', batist: 'Gostilna Batišt', iglica: 'Slap Iglica', lake: 'Blejsko jezero',
    castle: 'Blejski grad', bohinj: 'Bohinj · Triglavski NP', airport: 'Letališče Ljubljana',
    note: 'Približne razdalje, ne čas potovanja.',
  },

  practical: [
    ['Prihod', '15:00–22:00. Gostiteljici vnaprej sporočite čas prihoda.'],
    ['Odhod', 'Do 10:00.'],
    ['Bazen', 'Majhen in sezonski, na strešni terasi. Uporaba je brezplačna.'],
    ['Pobočje', 'Gozdna pot do reke je zelo strma. Majhne otroke imejte blizu.'],
    ['Stopnice', 'Do Debla in Krošnje vodijo samo stopnice.'],
    ['Otroci', 'Dobrodošli so otroci vseh starosti. Otroška posteljica (0–2 leti) in stolček za hranjenje sta na zahtevo brezplačna. Dodatnih ležišč ni.'],
    ['Hišni ljubljenčki', 'Dobrodošli, 8 € na dan.'],
    ['Pranje perila', 'Na voljo za doplačilo.'],
    ['Mir', 'Nočni mir od 23:00 do 06:00. Kajenje, zabave ter fantovščine in dekliščine niso dovoljeni.'],
    ['Plačilo', 'Rezervirate prek Booking.com ali Airbnb, ki zaračunata bivanje; za dodatne storitve imejte gotovino.'],
  ],

  home: {
    title: 'InGreen House — Obrne, med Bledom in Bohinjem',
    description: 'Štirje apartmaji z lastno kuhinjo v velikem zelenem vrtu nad reko Savo Bohinjko, v vasi s približno dvajsetimi hišami, 5 km od Bleda.',
    eyebrow: 'Obrne · Bohinjska Bela · Julijske Alpe',
    h1: ['Zgoraj ptice.', 'Spodaj reka.'],
    intro: 'Štirje apartmaji z lastno kuhinjo v velikem zelenem vrtu nad Savo Bohinjko — v Obrnah, vasi s približno dvajsetimi hišami, 5 km od Bleda.',
    seeApartments: 'Oglejte si apartmaje',
    index: 'Od ceste do reke',
    road: {
      h2: 'Stran od glavne ceste, ob avtobusni progi.',
      facts: [
        ['10 m', 'do avtobusne postaje pred vhodom. Avtobus vozi približno enkrat na uro — naravnost do Blejskega jezera.'],
        ['5 km', 'do Bleda. Do Bohinja in Triglavskega narodnega parka je približno 10 km.'],
        ['~20', 'hiš v Obrnah. Vas je zelo majhna.'],
        ['0 €', 'za zasebno parkiranje ob hiši. Rezervacija ni potrebna.'],
      ],
      caption: 'Hiša z vaške ceste',
    },
    house: {
      h2: ['Med drevesi.', 'Kot doma.'],
      text: 'Trije apartmaji drug nad drugim, od korenin do krošnje, in samostojna brunarica na trati. Vsak ima svoj vhod, svojo kuhinjo in prostor za obedovanje zunaj, z žarom. Staro in novo se prepletata povsod, vsa posteljnina je bombažna.',
      tree: 'Hiša, od vrha navzdol',
    },
    garden: {
      h2: 'Velik zelen vrt za vse.',
      text: 'Jejte zunaj z razgledom, prižgite žar, naberite svežo zelenjavo, izposodite si kolo. Potem se ohladite v bazenu — majhnem, sezonskem, na strešni terasi.',
      captions: ['Terasa z bazenom', 'Bazen, vrt, vrhovi', 'Zelenjava za nabiranje', 'Maline', 'Potonike', 'Terasa s pogledom po dolini', 'Pot do brunarice'],
      features: ['Sezonski bazen, brezplačno', 'Ležalniki in senčniki', 'Žar in zunanje ognjišče', 'Piknik in obedovanje na prostem', 'Zelenjavne grede', 'Izposoja koles pri gostiteljih', 'Badminton in družabne igre', 'Razgled na gore in vrt'],
    },
    slope: {
      h2: 'Potem se gozd strmo spusti.',
      text: ['Pod vrtom se gozdnato pobočje strmo spušča k reki. Pot je zahtevna, ne sprehod: obujte primerne čevlje in pazite na majhne otroke.', 'Tišina je bistvo. Daleč od blejskega prometa slišite ptice in vodo.'],
      caption: 'Poglejte gor: Babji zob nad gozdom',
    },
    river: {
      h2: 'Sava Bohinjka.',
      items: [
        ['Muharjenje', 'Elizabetin mož je vodnik za muharjenje in vam lahko priskrbi vse potrebno. Ribolov se plača posebej.'],
        ['Peš in s kolesom', 'Okolica je kot ustvarjena za pohodništvo, kolesarjenje in plezanje. Slap Iglica je oddaljen približno 2,4 km.'],
        ['Jezera', 'Blejsko jezero je oddaljeno približno 5,5 km — lahko pa se tja odpeljete z avtobusom izpred vhoda. Do Bohinja je približno 10 km.'],
      ],
      fromGate: 'Od vhoda',
    },
    host: {
      eyebrow: 'Vaša gostiteljica',
      quote: '»Bi se radi zbudili ob petju ptic in reke?«',
      text: 'Elizabeta in njena družina živijo približno 3 km stran: na voljo, ko jih potrebujete, sicer vas ne motijo. Govori nemško, angleško in hrvaško.',
    },
    miska: {
      eyebrow: 'Tudi pri Elizabeti',
      h2: 'Studio Miška, za dva.',
      text: 'Pritlični studio z lastnim vhodom in zasebno teraso, približno 3 km stran v Bohinjski Beli. Miren kotiček za par.',
      link: 'Oglejte si Studio Miška →',
    },
    know: { h2: 'Dobro je vedeti pred rezervacijo.', text: 'Majhen bazen, strmo pobočje, stopnice. Bolje, da veste zdaj kot ob prihodu.' },
  },

  unit: {
    title: (name: string) => `${name} — InGreen House, Obrne`,
    description: (area: number, sleeps: string, text: string) => `${area} m² · ${sleeps}. ${text}`,
    meta: (area: number, sleeps: string, bedrooms: number) => `${area} m² · ${sleeps} · ${plural(bedrooms, ['spalnica', 'spalnici', 'spalnice', 'spalnic'])}`,
    view: (name: string) => `Več o apartmaju ${name} →`,
    card: 'Oglejte si apartma →',
    outdoor: 'Zunanji prostor',
    size: 'Velikost', sleeps: 'Gostje', bedrooms: 'Spalnice', bathrooms: 'Kopalnice', beds: 'Postelje', access: 'Dostop',
    enquire: 'Povpraševanje za ta apartma',
    others: 'Drugi apartmaji',
  },

  gallery: { title: 'Fotografije', open: 'Odpri fotografijo čez cel zaslon', label: (name: string) => `${name}: fotografije`, prev: 'Prejšnja fotografija', next: 'Naslednja fotografija' },

  miska: {
    title: 'Studio Miška — studio za dva v Bohinjski Beli',
    description: '21 m², za 2 odrasla, z zasebno teraso. Elizabetin studio, približno 3 km od hiše InGreen House.',
    eyebrow: 'Tudi pri Elizabeti · Bohinjska Bela',
    subtitle: 'studio za dva',
    intro: 'Pritlični studio z lastnim vhodom in zasebno teraso. Približno 3 km od hiše InGreen House.',
    sleeps: '2 odrasla', beds: '1 velika zakonska postelja', access: 'Pritličje, lasten vhod',
    text: 'En svetel prostor v pritličju, v vasi Bohinjska Bela: zakonska postelja, okrogla miza za dva, majhna kuhinja in kopalnica s tušem brez praga. Vhodna vrata so samo vaša.',
    outdoor: 'Zasebna terasa z vrtnim kavčem in stoli pod nadstreškom.',
    extras: ['Zasebna terasa', 'Kuhinja', 'Klimatska naprava', 'Brezplačen Wi-Fi', 'Brezplačno parkiranje'],
    bed: 'Postelja', where: 'Naslov',
    enquire: 'Povpraševanje za studio',
    know: 'Dobro je vedeti.',
    practical: [
      ['Prihod', '15:00–21:00. Elizabeti vnaprej sporočite čas prihoda.'],
      ['Odhod', '08:00–10:00.'],
      ['Hišni ljubljenčki', 'Niso dovoljeni.'],
      ['Mir', 'Nočni mir od 22:00 do 06:00. Kajenje in zabave niso dovoljeni.'],
      ['V bližini', 'Po oglasu na Airbnb so avtobusna postaja, trgovina in lokal oddaljeni približno 100 m.'],
      ['Plačilo', 'Rezervirate prek Booking.com ali Airbnb, ki zaračunata bivanje.'],
    ],
  },

  enquire: {
    eyebrow: 'Povpraševanje',
    h2: 'Kdaj bi radi prišli?',
    text: 'Elizabeti sporočite datume in kdo pride. Povpraševanje ni rezervacija.',
    directions: 'Navodila za pot ↗', booking: 'Ali rezervirajte na Booking.com ↗', airbnb: 'ali Airbnb ↗',
    legend: 'Vaše povpraševanje', name: 'Ime', email: 'E-pošta', apartment: 'Apartma', choose: 'Pomagajte mi izbrati',
    miskaOption: (sleeps: string) => `Studio Miška (${sleeps}, 3 km stran)`,
    miskaNote: 'Studio Miška: hišni ljubljenčki niso dovoljeni.',
    arrival: 'Prihod', departure: 'Odhod', addDate: 'Dodaj datum',
    adults: 'Odrasli', children: 'Otroci', message: 'Sporočilo',
    placeholder: 'Starost otrok, hišni ljubljenčki, čas prihoda, vprašanja…',
    send: 'Pošlji povpraševanje', noscript: 'Obrazec potrebuje JavaScript.',
    stay: 'Vaše bivanje', closeLabel: 'Zapri', prevMonths: 'Prejšnji meseci', nextMonths: 'Naslednji meseci',
    clear: 'Počisti datume', done: 'Končano',
    client: {
      locale: 'sl-SI', addDate: 'Dodaj datum', night: 'noč', nights: 'noči',
      chooseArrival: 'Izberite datum prihoda.', chooseDeparture: 'Zdaj izberite datum odhoda.',
      oneNight: 'Ostanite vsaj eno noč. Izberite datum odhoda.',
      needDates: 'Izberite datum prihoda in odhoda.',
      notSent: 'Ni poslano: pošiljanje povpraševanj še ni povezano.',
    },
  },

  footer: {
    label: 'Noga strani', tagline: 'Zgoraj ptice. Spodaj reka.',
    text: 'Štirje apartmaji z lastno kuhinjo v zelenem vrtu nad Savo Bohinjko, 5 km od Bleda.',
    explore: 'Raziščite', find: 'Kje smo', directions: 'Navodila za pot ↗',
    copyright: 'InGreen House · Obrne, Julijske Alpe', top: 'Na vrh ↑',
  },
};
