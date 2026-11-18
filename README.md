# InGreen House — "From the bus stop to the river"

Standalone Astro 7 + Tailwind v4 site. Private preview (`noindex`). Custom design, not the shared Izba generator.

## Concept

The property runs downhill: road → house → garden → steep forest → Sava Bohinjka. The page walks the same way.
A line under the fixed nav tracks your position. The nav is clear at the top and animates to white once you scroll (white without JS).
The main call to action is the enquiry form (`#enquire`); Booking.com is the secondary link. Form delivery is not connected yet:
it validates, then says nothing was sent. The mobile menu is a native `popover`.
Apartments are introduced by their own outdoor room (patio, peak-view terrace, outdoor kitchen, cabin porch).

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
