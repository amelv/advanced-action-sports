# Migration Plan: Advanced Action Sports — Wix → GitHub Pages + Porkbun

Last updated: 2026-08-11

Goal: Serve `www.advancedactionsports.com` from GitHub Pages (static Jekyll site) instead of
Wix. Move domain registration off Wix (Wix acts as both registrar and DNS host and locks
self-service nameserver changes, so DNS control requires leaving Wix).

---

## Current state (verified 2026-08-11)

| Item | Value |
|---|---|
| Domain | `advancedactionsports.com` |
| Registrar | Wix.com Ltd. (registered 2021-02-02, expires 2027-02-02) |
| DNS | `ns14.wixdns.net` / `ns15.wixdns.net` (Wix; NS changes not available self-service) |
| Hosting | Resolves to Wix CDN (185.230.63.x) |
| Registrant contact | Ian Costello — The Forge Companies, `contact@theforgecompanies.net`, 52 Lawrence Dr Apt 404, Lowell MA 01854 (public WHOIS; appears to be a previous contractor — **confirm with client before starting transfer**) |
| Domain status | `clientTransferProhibited` / `clientUpdateProhibited` (registrar lock — removed during transfer-away) |
| Email — MX (inbound) | Google: `aspmx.l.google.com` (10), `alt1` (20), `alt2` (30), `alt3` (40), `alt4` (50) |
| Email — SPF | `v=spf1 include:spf.protection.outlook.com -all` (keep verbatim until mail confirmed) |
| Email — DMARC | TXT `v=DMARC1; p=none; rua=mailto:dmarc_agg@vali.email` — set as plain TXT at new DNS (Wix shows it as a CNAME to `_dmarc.wixemails.com`; the TXT is what actually resolves today) |
| Email — DKIM | Wix/Ascend-owned: `s1/s2/sel1._domainkey → *.s009.ascendbywix.com` — **cannot survive** leaving Wix |
| Email — legacy / MS365 | CNAMEs `autodiscover→outlook.com`, `lyncdiscover`, `msoid`, `sip` + SRV `sip`/`sipfederationtls` (leftovers) + `email → email.secureserver.net` (GoDaddy-era) |
| Booking | Wix Bookings widgets on `/book-party-warwick-ri` and `/book-party-webster-ma` (die with Wix) |
| Waiver | External: `https://waivermaster.com/sign.html?q=MQH6WTTY` (not Wix — survives migration) |
| Static site | Jekyll repo `git@github.com:amelv/advanced-action-sports.git`, staged at `https://alexamelvin.com/advanced-action-sports/` |

Mail setup is unconfirmed by the client ("Google Workspace and/or Outlook"). Full DNS snapshot
is preserved in the [DNS snapshot](#dns-snapshot-before-cutover) section so every record can be
reproduced/rolled back.

---

## Targets

- Host: GitHub Pages (`amelv.github.io`), repo already Jekyll
- Registrar: Porkbun (`.com` transfer ≈ $10/yr)
- Primary URL: `https://www.advancedactionsports.com` (apex 301s → www)

---

## Phase 0 — Pre-migration backups (before touching anything in Wix)

1. **Save the DNS snapshot** (already in this doc — keep it updated if Wix DNS changes).
2. **Email-SKU check + registrant contact check (do these first)**:
   - Registrant is **Ian Costello / The Forge Companies** — client confirmed this is an **old
     business partner, harmless** (contact: `contact@theforgecompanies.net`).
   - **Strategy: do NOT change the registrant** (avoids the 60-day lock). Coordinate with the
     partner in advance: they forward the EPP code to us when the transfer starts, then we move
     the registrant to the business *after* the Porkbun transfer completes.
   - Fallback: if the partner won't help, update the contact now (starts 60-day lock) and use
     that window for the full build + staging.
3. **Export Wix Bookings / client data**: if the client has used Wix Bookings (party
   reservations, attendee/ticket history), export anything needed **before** the Wix account is
   ever closed. See Phase 5 — this is the one data loss that cannot be fixed after closure.
4. **Weigh email SKU**: confirm with the client whether Google Workspace or MS365 provides the
   real mailboxes (see "Post-cutover email decision tree" below). Wix itself had no email
   configured.
5. Note the current Wix plan/billing (premium?) so nothing auto-renews itself into a contract
   renewal while we're mid-migration. Keep it active until Phase 5.

---

## Phase 1 — Production-ready site (do first; Wix stays live)

1. `_config.yml`:
   - `url: "https://www.advancedactionsports.com"`
   - `baseurl: ""`
   - remove default `robots: noindex` (staging-only flag)
2. Add root `CNAME` file: `www.advancedactionsports.com`
3. New pages (match existing FAQ template):
   - `nerf-faq/`
   - `vr-faq/`
4. New `online-waiver/` → redirect to `https://waivermaster.com/sign.html?q=MQH6WTTY`
5. New redirects → `https://advancedactionsports.square.site/s/appointments?location=11e9ac966d80998a80640cc47a2b63cc`:
   - `book-party-warwick-ri/`
   - `book-party-webster-ma/`
6. Redirect pages are static HTML (meta refresh + JS) — no Jekyll plugins on GitHub Pages.
7. **Commit early, commit often.** Have a green build (with new pages + redirects) verified on
   the staging URL *before* any DNS or domain action. This is the fast rollback path.
8. Keep the existing staging URL (`https://alexamelvin.com/advanced-action-sports/`) live as a
   preview target the whole way through. Test every new page/redirect there first.

### Full redirect map (old Wix path → new)

| Old Wix path | Destination |
|---|---|
| `/` (apex) | GitHub 301 → `https://www.advancedactionsports.com/` |
| `/airsoft`, `/paintball`, `/nerf-battles`, `/gel-blaster`, `/milsim`, `/virtual-reality`, `/event-space`, `/memberships`, `/jobs` | same slug (1:1) |
| `/airsoft-faq`, `/paintball-faq`, `/gel-blaster-faq` | same slug (1:1) |
| `/nerf-faq`, `/vr-faq` | new pages |
| `/online-waiver` | redirect → waivermaster.com/sign.html?q=MQH6WTTY |
| `/book-party-warwick-ri`, `/book-party-webster-ma` | redirect → Square appointments URL |

---

## Phase 2 — Registrar transfer Wix → Porkbun (start immediately; runs ~7–10 days)

1. In Wix: Domains → *Transfer away from Wix* →
   - disable **private registration** first (so EPP/transfer emails aren't missed)
   - request transfer, get **EPP code** (sent to registrant contact email)
   - unlocking clears `clientTransferProhibited`; budget ~2 days if Wix support escalation needed
2. Do **not** update WHOIS contact info (re-triggers ICANN 60-day lock). Keep domain auto-renew **ON**.
3. At Porkbun: start transfer with EPP code (~$10.26 `.com` transfer). Completes in ~5–7 days; DNS authority moves to Porkbun when done.
4. While waiting: complete Phase 1 and keep Wix site live.

> Registrar transfer is the only *slow-to-reverse* step (ICANN 60-day lock prevents an instant
> transfer back). It does **not** by itself take the site offline — DNS still points at Wix until
> Phase 3. If anything looks wrong during Phase 2's wait, just stop; the site keeps working.

---

## Phase 3 — DNS cutover at Porkbun (on transfer-complete day)

Set TTL to **300s (or the lowest allowed)** during cutover so changes propagate in minutes, then
raise to 1 hour after Phase 4. Do this at a low-traffic moment (evening) and keep the Wix site up.

### Replace (Wix infra → GitHub)

| Type | Name | Old (Wix) | New |
|---|---|---|---|
| A | @ | 185.230.63.171 / 185.230.63.186 / 185.230.63.107 | 185.199.108.153, 185.199.108.154, 185.199.108.155, 185.199.108.156 |
| CNAME | www | cdn3.wixdns.net | amelv.github.io |
| TXT | _dmarc | (CNAME → _dmarc.wixemails.com) | `v=DMARC1; p=none; rua=mailto:dmarc_agg@vali.email` |

### Carry verbatim (mail — until email decision is confirmed)

| Type | Name | Value |
|---|---|---|
| MX | @ | aspmx.l.google.com `10` |
| MX | @ | alt1.aspmx.l.google.com `20` |
| MX | @ | alt2.aspmx.l.google.com `30` |
| MX | @ | alt3.aspmx.l.google.com `40` |
| MX | @ | alt4.aspmx.l.google.com `50` |
| TXT | @ | `v=spf1 include:spf.protection.outlook.com -all` |
| CNAME | autodiscover | autodiscover.outlook.com |
| CNAME | lyncdiscover | webdir.online.lync.com |
| CNAME | msoid | clientconfig.microsoftonline-p.net |
| CNAME | sip | sipdir.online.lync.com |
| CNAME | email | email.secureserver.net |
| SRV | _sip._tls (prio 100, weight 1) | sipdir.online.lync.com `443` |
| SRV | _sipfederationtls._tcp (prio 100, weight 1) | sipfed.online.lync.com `5061` |

### Drop (die with Wix / cannot transfer)

| Type | Name | Value |
|---|---|---|
| CNAME | s1._domainkey | …p009.s009.ascendbywix.com (Wix infra) |
| CNAME | s2._domainkey | …   ^ same  (Wix infra) |
| CNAME | sel1._domainkey | …   ^ same  (Wix infra) |

Notes:
- GitHub Pages: apex A records cause 301 → www automatically. No AAAA records needed.
- No CAA records currently exist; none required (GitHub uses Let's Encrypt).
- GitHub → repo Settings → Pages → custom domain `www.advancedactionsports.com` → **Enforce HTTPS**. GitHub auto-writes/verifies the `CNAME`.

### Post-cutover email decision tree (one client confirmation, non-blocking)
- If mail is **Gmail/Workspace**: remove the MS365 CNAME/SRV rows + `autodiscover`, change SPF to
  `v=spf1 include:_spf.google.com -all`.
- If mail is actually **MS365**: switch MX to Microsoft (e.g. `*.mail.protection.outlook.com`) and
  keep the MS365 rows.
- If Square/booking mail sends **from this domain**: extend SPF with Square's include (check
  Square's published SPF) or mail may fail SPF under the `-all` policy.

---

## Phase 4 — Verification (before considering anything "done")

- `dig +short CNAME www…` → `amelv.github.io`
- `dig +short A …` → 185.199.108.x
- `curl -I https://www.advancedactionsports.com/` → 200 + valid cert
- `curl -I https://advancedactionsports.com/` → 301 to www
- Mail round-trip: send + receive, check spam, run SPF/DMARC report check (e.g. Gmail or Google
  Workspace "Message security"). Adjust SPF per decision tree.
- Walk new pages + all redirects (book-party, online-waiver, faqs, 1:1 slugs)
- Confirm old book-party links from FB/IG posts resolve (not 404).

Wait 2–3 days of verified uptime before Phase 5.

---

## Phase 5 — Retire Wix (last, and only after Phase 4 holds)

1. **Export any remaining Wix data first** (Bookings/client lists, anything not already in the
   static site or Square). Closing the account is permanent — see broken-doors below.
2. Downgrade/cancel the Wix premium plan; stop Wix auto-charges.
3. Confirm the domain no longer exists in the Wix account (it transferred out in Phase 2).
4. Keep the old `alexamelvin.com/advanced-action-sports/` staging URL working as a fallback (it
   can even stay; harmless).

---

## Reversibility & nothing-breaks checklist (safety-net summary)

Everything except two "one-way doors" is reversible, and neither door closes until late in the
process. Sequence matters: **build → transfer → point DNS → verify → only then touch Wix.**

One-way doors (do these last / irreversibly):
1. **Wix account closure** — deletes Wix Bookings data, page content, contact lists. Mitigate:
   export first (Phase 0/5). Never close until Phase 4 passes.
2. **Registrar transfer lock** — after moving to Porkbun, an ICANN 60-day lock prevents an instant
   transfer back. Not dangerous by itself: DNS pointing can still be changed any time, so the
   site can always be pointed back to Wix IPs.

How to roll back at each stage:
- **Before Phase 3**: nothing changed on the live site — just stop. Wix site still serving.
- **After Phase 3 (DNS switch)**: repoint at Porkbun → restore old A (@ = 185.230.63.171/.107/.186)
  + www CNAME (`cdn3.wixdns.net`) + `_dmarc` CNAME if it was originally a CNAME. Site is back on
  Wix in ~minutes (after TTL). Keep these values saved (they're in the snapshot below).
- **Code rollback**: `git revert`/`git checkout` the CNAME/_config change and redeploy — the site
  build is fully version-controlled.
- **Web rollback to the pinned build**: stage the new build at the existing staging URL first and
  never cut over from an unverified commit.

Other safety measures:
- Keep TTL short around cutover; restore to 1 hour after verification.
- Do DNS cutover in a low-traffic window; note current Wix TTLs are already 1 hour.
- Validate the full built site (all pages, images, fonts, redirects) on the staging URL before
  flip — GIFTS: run local `jekyll build` and fix warnings first.
- Keep Wix premium plan paid **until rollback window passes**, so Wix hosting remains available as
  an emergency fallback.
- Do not let the domain lapse at any point — keep auto-renew ON until the client has new renewal
  automation set on a date they control.

---

## DNS snapshot (before cutover) — advancedactionsports.com

Taken from the Wix DNS editor, 2026-08-11. Reproduce these to roll back.

**A (Host):**
- `@ → 185.230.63.171` (TTL 1h)
- `@ → 185.230.63.186` (TTL 1h)
- `@ → 185.230.63.107` (TTL 1h)

**CNAME:**
- `_dmarc → _dmarc.wixemails.com`
- `s1._domainkey → s1._domainkey.advancedactionsports.com.s009.ascendbywix.com`
- `s2._domainkey → s2._domainkey.advancedactionsports.com.s009.ascendbywix.com`
- `sel1._domainkey → sel1._domainkey.advancedactionsports.com.s009.ascendbywix.com`
- `autodiscover → autodiscover.outlook.com`
- `email → email.secureserver.net`
- `lyncdiscover → webdir.online.lync.com`
- `msoid → clientconfig.microsoftonline-p.net`
- `sg → sg.advancedactionsports.com.s009.ascendbywix.com`
- `sip → sipdir.online.lync.com`
- `www → cdn3.wixdns.net`

**TXT:**
- `@ = v=spf1 include:spf.protection.outlook.com -all`
- `_dmarc` also resolves a TXT: `v=DMARC1; p=none; rua=mailto:dmarc_agg@vali.email`

**SRV:**
- `_sipfederationtls._tcp → sipfed.online.lync.com` (prio 1, weight 100) — note: Wix lists
  weight 1 / prio 100 semantics; replicate exactly as shown in Wix.

  Actually, as shown by Wix: Service `sipfederationtls`, Proto `tcp`, Weight 1, Port 5061,
  Target `sipfed.online.lync.com`, Priority 100.
- Service `sip`, Proto `tls`, Weight 1, Port 443, Target `sipdir.online.lync.com`, Priority 100.

**MX (Google Workspace):** aspmx.l.google.com 10, alt1 20, alt2 30, alt3 40, alt4 50.

**NS:** ns14.wixdns.net, ns15.wixdns.net (not editable at Wix; replaced by Porkbun after transfer).

---

## Risks / gotchas

- Mail outage is the biggest risk — carry MX/SPF/DMARC exactly, verify mail before any Wix cancellation.
- Wix locks nameserver changes → Cloudflare Registrar would require a two-step transfer (intermediate registrar + 60-day wait); deferred, not needed.
- Repo must be public (or account on a paid plan) for GitHub Pages with a custom domain.
- Existing FB/IG links to `/book-party-*` and `/online-waiver` keep working only if redirects are live.
- Wix Bookings widgets on the book-party pages cannot be migrated — redirect to Square instead.
- Wix/Ascend DKIM (`s1/s2/sel1._domainkey`) can't move — senders using the domain through Ascend
  will lose DKIM; all automation already runs on Square.
- Don't touch WHOIS contact info during Phase 2 or the transfer window resets to 60 days.
- SPF uses `-all`: any mail sent from *other* senders (Square, Mailchimp, etc.) using this domain
  will silently fail SPF until their include is added. Audit senders during Phase 4.