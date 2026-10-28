# SEO Content Plan — Advanced Action Sports

Status: planning. No near-city or event-article pages built yet.

## Positioning

- Two physical locations: Webster, MA (walk-in airsoft, paintball, Nerf, gel blaster, VR, retail, parties) and Granville, MA (Advanced Action Milsim, 400 acres, special events).
- Service area: New England, with the core drive-time markets being Worcester, Springfield, Boston, Providence, and Hartford.
- Secondary markets: Vermont and New Hampshire border towns, only after demand is confirmed.
- Public copy now says “Two locations serving New England.”

## Goals

- Rank for “[activity] near [city]” and “[event type] near [city]” searches within roughly 60–90 minutes of either field.
- Send qualified traffic to tickets, party booking, waivers, and memberships.
- Build topical authority around airsoft, paintball, gel blaster, Nerf, VR, milsim, and private events.
- Avoid thin, auto-generated city pages that Google treats as doorways.

## Content architecture

- **Activity hubs** (already exist): `/airsoft/`, `/paintball/`, `/gel-blaster/`, `/nerf-battles/`, `/virtual-reality/`, `/milsim/`.
- **Near-city pages** (new): nested under the activity hub, e.g. `/airsoft/near-providence-ri/`.
- **Event-type pages** (new): birthday parties, bachelor parties, corporate team building, youth groups, school trips, milsim events.
- **Guides** (new): drive times, first-timer guides, equipment, indoor vs. outdoor, “what to expect.”
- **Location pages** (optional later): dedicated Webster and Granville pages if the homepage section needs more depth.

## URL rules

- Use `/activity/near-city-state/` for near-city pages.
- One page per meaningful activity/city pair. Do not generate a page for every town.
- Every page gets a unique title, meta description, H1, canonical, and internal links.
- Only add a page to the sitemap when it is complete. Keep drafts noindexed.
- Use the correct physical location in each page: Webster for walk-in play, Granville for milsim/special events.

## Near-city page template

- **H1:** Activity Near City, State.
- **Intro:** real drive time and distance, route, parking, and why this field is worth the trip.
- **What to expect:** field type, hours, pricing, ages, rentals, safety, group size.
- **Local FAQ:** 3–5 questions unique to that city or route.
- **CTA:** Buy tickets / Book a party / Sign the waiver.
- **Internal links:** activity hub, tickets, directions, two or three related near-city pages.
- **Schema:** BreadcrumbList, FAQPage, and LocalBusiness/SportsActivityLocation. Only real scheduled events get Event schema.
- **Length:** 600–900 useful words. No filler and no city-name swapping.

## Anti-doorway rules

- Every page needs a unique local angle: route, landmarks, drive time, parking, nearby food or transit, local FAQ.
- Never publish the same template with only the city name changed.
- Keep the number of near-city pages proportional to actual demand; review Search Console before expanding.
- Keep NAP consistent and link to the correct field.
- If there is no meaningful local angle, do not publish the page.

## Priority roadmap

### Phase 1 — core activity + drive-time pages (weeks 1–6)

| Priority | URL | Primary intent |
|---:|---|---|
| 1 | `/paintball/near-hartford-ct/` | Paintball near Hartford |
| 2 | `/airsoft/near-providence-ri/` | Airsoft near Providence |
| 3 | `/airsoft/near-springfield-ma/` | Airsoft near Springfield |
| 4 | `/paintball/near-worcester-ma/` | Paintball near Worcester |
| 5 | `/milsim/near-boston-ma/` | Milsim near Boston |
| 6 | `/nerf-battles/near-worcester-ma/` | Nerf battles near Worcester |
| 7 | `/virtual-reality/near-boston-ma/` | VR near Boston |
| 8 | `/gel-blaster/near-providence-ri/` | Gel blaster near Providence |

### Phase 2 — event types + secondary activities

| URL | Primary intent |
|---|---|
| `/parties/birthday-parties-near-worcester-ma/` | Birthday party venue |
| `/parties/birthday-parties-near-providence-ri/` | Birthday party near Providence |
| `/parties/corporate-events-near-hartford-ct/` | Corporate team building |
| `/parties/bachelor-parties-near-boston-ma/` | Bachelor party |
| `/airsoft/near-hartford-ct/` | Airsoft near Hartford |
| `/paintball/near-providence-ri/` | Paintball near Providence |
| `/nerf-battles/near-providence-ri/` | Nerf near Providence |
| `/virtual-reality/near-worcester-ma/` | VR near Worcester |

### Phase 3 — Vermont / New Hampshire and broader New England

Only after Search Console shows demand:

- Airsoft near Brattleboro, VT
- Paintball near Keene, NH
- Airsoft near Manchester, NH
- Paintball near Burlington, VT
- Milsim events New England
- “Best airsoft fields in New England”
- “Best paintball fields near Boston”

## Event-type content

- Birthday parties for kids, teens, and adults.
- Bachelor and bachelorette parties.
- Corporate team building and company outings.
- Youth groups, scouts, church groups, and school trips.
- Milsim events and scenario games.
- Each page should cover capacity, ages, pricing, rentals, food/cake options, deposits, weather plan, and booking steps.

## Internal linking

- Activity hub → near-city pages, in a “Nearby cities” block.
- Near-city page → activity hub, tickets, waiver, directions, and two or three related near pages.
- Event page → activity hub, party booking, FAQ, and the relevant location.
- Add breadcrumbs to every near-city and event page.
- Keep the footer focused; a single “Areas served” link can point to a service-area page later.

## Technical SEO

- Add `areaServed` to LocalBusiness schema for Massachusetts, Rhode Island, Connecticut, Vermont, and New Hampshire.
- Add FAQPage schema to near-city and FAQ pages.
- Add BreadcrumbList schema to all nested pages.
- Use Article schema for guides.
- Keep the sitemap current and keep redirect pages excluded.
- Set up Google Search Console and Bing Webmaster Tools; submit the sitemap.
- Claim and align both Google Business Profiles (Webster and Granville): hours, photos, services, reviews.
- Choose analytics: Cloudflare Web Analytics or GA4. Track ticket, party, and waiver clicks as events.
- Keep maps lazy-loaded and avoid heavy embeds above the fold.

## Content inputs needed from the client

- Approved Granville claims: biggest field in New England, 400 acres, 19 miles of routes, helipads, camping.
- Photos and video for each activity and location.
- Public Google Calendar or event feed.
- Approved partner logos and links.
- Customer reviews and testimonials.
- Drive times, routes, parking details, and nearby landmarks.
- Current pricing, age limits, rental details, and seasonal hours.

## Reviews and social proof

- Use three to five approved five-star Google review excerpts on the site, attributed with a first name or initial and “Google review.”
- Link to the Google Business Profile from the footer and the locations section.
- Refresh the quotes quarterly and remove anything stale or no longer representative.
- Do not add `AggregateRating` or `Review` schema until the live rating and review count are verified.
- Ask for a review after every booking; put the review link in confirmation emails and receipts.

## Measurement and cadence

- Publish one to two complete pages per week; Phase 1 in roughly six to eight weeks.
- Monthly review: impressions, clicks, CTR, average position, and ticket/party/waiver conversions.
- After 60–90 days, consolidate or prune pages with no impressions and expand pages with demand.
- Do not scale city pages until the first eight prove they can earn impressions and clicks.
