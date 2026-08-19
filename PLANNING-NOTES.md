# Migration Planning Notes — Advanced Action Sports

Working notes captured during planning. **STATUS: PLANNING PHASE — do NOT build site
pages or change any live config yet.** The full operational plan lives in `MIGRATION-PLAN.md`;
this file holds the loose ends, decisions, and raw content scraped from the live Wix site.

Last updated: 2026-08-11

---

## Decisions agreed so far

| Topic | Decision |
|---|---|
| Target host | GitHub Pages (Jekyll repo already exists: `amelv/advanced-action-sports`) |
| New registrar | Porkbun |
| Book-party pages | Redirect both `book-party-warwick-ri` and `book-party-webster-ma` → `https://advancedactionsports.square.site/s/appointments?location=11e9ac966d80998a80640cc47a2b63cc` |
| Online waiver | Redirect to external WaiverMaster — `https://waivermaster.com/sign.html?q=MQH6WTTY` (NOT a Wix feature; survives migration) |
| Missing pages | Build `nerf-faq/` and `vr-faq/` to match existing `*-faq` template |
| Legacy DNS records | Carry everything harmless; replace Wix-owned records; drop Wix/Ascend DKIM. Exact table in `MIGRATION-PLAN.md` |
| Payment | Dev fronts ~$10 Porkbun transfer; bill client the exact amount with receipt. Registrant remains the client's |

## Open items (need client input)

1. **Registrant contact is Ian Costello / The Forge Companies** —
   **RESOLVED 2026-08-11**: client confirmed Ian is an **old business partner, harmless**.
   **Strategy: do NOT change the registrant** (avoids the 60-day ICANN lock). Instead coordinate
   with the partner to forward the EPP code when the Wix transfer starts, then fix the registrant
   to the business *after* the Porkbun transfer lands. Fallback if the partner is unhelpful:
   change the contact now and accept the 60-day lock (build/stage during the window).
2. **Which mail is real**: Google (MX points to Google) vs Microsoft 365 (SPF + a full M365/Lync
   record set exist) vs some mix. Client believes Gmail. Resolve before cutover; preserve exact
   records until then.
3. **GitHub Pages visibility**: custom domain on GitHub Pages requires a public repo (or paid
   account) — confirm repo `amelv/advanced-action-sports` is public or the account is on a paid
   plan.
4. **Wix subscription state**: what plan is the Wix account on and when does it renew? Keep it
   active as fallback until Phase 4 passes.

## Phase 1 files to build later (when approved)

- `nerf-faq/index.html` — source text scraped below
- `vr-faq/index.html` — source text scraped below
- `online-waiver/index.html` — redirect to WaiverMaster
- `book-party-warwick-ri/index.html` — redirect to Square appointments
- `book-party-webster-ma/index.html` — redirect to Square appointments
- Later (cutover commit only, DON'T do now): `_config.yml` → production URL/baseurl/noindex,
  root `CNAME`, remove per-page `robots: noindex` (all 14 pages), flip layout robots default.

Booking links used by sibling pages (for FAQ "Book Now" buttons):
- Nerf: `https://advancedactionsports.square.site/s/search?q=nerf`
- Paintball: `https://advancedactionsports.square.site/s/search?q=paintball%20admission`
- Gel-blaster: `https://advancedactionsports.square.site/s/search?q=gel%20blaster`
- VR: page is currently paused ("VR is Currently Paused") — confirm booking link before build.

---

## Raw FAQ source text (scraped from live Wix, 2026-08-11)

Use this as the source of truth for the new FAQ pages. Older Wix site is the only copy of this
content.

### /nerf-faq (title: "Nerf Battles FAQ")

1. **How do I book a Nerf battle at your indoor arena?**
   Booking a Nerf battle at our indoor arena is easy! Simply visit our website or give us a call
   to check availability and make a reservation. Our friendly staff will guide you through the
   process.
2. **What equipment do you provide for the Nerf battles?**
   We provide all the necessary equipment for a thrilling Nerf battle experience. This includes
   Nerf blasters, foam darts, and eye protection for all participants. You're welcome to bring
   your own Nerf blasters if you prefer.
3. **Is there an age limit to participate in the Nerf battles?**
   Our Nerf battles are suitable for participants of ages 8 and up. We offer different game modes
   and difficulty levels to cater to various age groups, ensuring everyone has a fantastic time.
4. **How long does a typical Nerf battle session last?**
   The duration of a Nerf battle session varies depending on the package you choose. On average,
   a session lasts around three hours, including briefing, gameplay, and cooldown periods. We
   also offer extended sessions for those who want more playtime.
5. **Can I bring my own foam darts or additional Nerf blasters?**
   We provide foam darts for all participants to ensure everyone has a consistent and safe
   experience. However, you're welcome to bring your own Nerf blasters as long as they meet our
   safety guidelines. Please check with our staff for more information.
6. **Are the Nerf battles supervised by your staff?**
   Yes, all Nerf battles are supervised by our experienced staff. They ensure that safety rules
   are followed, offer guidance, and make the gameplay as enjoyable as possible for everyone
   involved.
7. **Can I host a private event or birthday party at your Nerf battle arena?**
   Absolutely! We offer private event and birthday party packages to make your celebration extra
   special. Contact our team for more details and personalized options to create an unforgettable
   experience.
8. **Do you have food and drinks available at the arena?**
   We have a concession area and have a food vendor where you can purchase snacks, beverages and
   food to keep your energy levels up during the Nerf battles. Outside food and drinks are not
   permitted, with the exception of birthday cakes for pre-booked parties.
9. **Is there a dress code for the Nerf battles?**
   We recommend wearing comfortable clothing and closed-toe shoes for optimal mobility and
   safety. Avoid wearing loose jewelry or clothing with sharp edges that could cause injury during
   gameplay.
10. **Can I spectate a Nerf battle without participating?**
    No! Spectators are not allowed in the Arena. If you have any further questions or need
    additional information, feel free to reach out to our friendly staff. We're here to ensure you
    have an amazing time at our indoor Nerf battle arena!

### /vr-faq (title: "Virtual Reality FAQ")

1. **Will the VR make me dizzy?**
   Because of the high quality of our content and equipment we use, customers rarely experience
   motion sickness.
2. **Is there an age requirement?**
   We strongly recommend that guests who visit our Seymour VR arcade gaming center are at least
   8 years old.
3. **What if I wear glasses?**
   Our Meta Quest 2 headsets fit mostly all types of glasses. But rest assured, if your glasses
   don't fit, most customers can still see clearly due to how close the VR screens are to your
   eyes.
4. **How do you move in the games?**
   All of our VR experiences are free-roam, which means you physically walk around in real life
   to move your avatar in the game. It's as real as it gets!
5. **How much does it cost?**
   VR costs $25 per player for a 50 minute Escape Room. We also offer short 10 minute experiences
   for $5 per person.
6. **If I have a Groupon, how do I book?**
   All you have to do is email or call, and we can help book you in.
7. **Do we need a reservation?**
   Yes, reservations or online bookings are required.
8. **Can I bring in my own food?**
   Outside food and beverage, with the exception of water, is not permitted onsite.
9. **Can I have alcohol onsite?**
   No. Alcohol, smokeless tobacco, and Marijuana products are not permitted onsite.

---

## Immediate next step (blocks everything else)

Get access to `contact@theforgecompanies.net` (or establish who reads it) so the Wix → Porkbun
EPP transfer can start. Until then, planning continues but no domain action happens.