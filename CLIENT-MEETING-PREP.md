# Client Meeting Prep — Advanced Action Sports

Meeting: post-launch catch-up with client · Prepared 2026-10-01

Operational detail lives in `MIGRATION-PLAN.md`; raw notes in `PLANNING-NOTES.md`.

---

## 30-second status (for your opening)

"Your new site is **live** at **advancedactionsports.com** — it's been up since mid-August on
GitHub Pages. Same look, faster and cheaper to run, and everything from Wix works: the FAQs,
the party-booking redirects to Square, and the waiver link. We're now waiting on one domain
paperwork item — the 60-day hold from the contact update clears around **Oct 11**, after which
we officially move the domain registration to Porkbun (cheaper renewals, your name on the
record)."

---

## Timeline — where we are

| Date | What happened / happens |
|---|---|
| 2021-02 | Domain first registered (at Wix) |
| 2026-08-12 | Registrant contact updated at Wix → **ICANN 60-day transfer lock started** |
| 2026-08-18 | **New site went live** on GitHub Pages; DNS repointed; HTTPS working |
| **≈2026-10-11** | **60-day lock clears — Wix → Porkbun transfer can start** |
| 2026-10-11 → 2027-02-02 | Window to transfer the registration before the domain comes up for renewal |

Note: the lock only blocks *moving the registration between providers*; the site was already able
to go live (it did). Nothing customer-facing is waiting on it.

---

## What's live now (talking points / wins)

- **Site:** `https://www.advancedactionsports.com` — served from GitHub Pages (free hosting),
  valid SSL, apex redirects to `www`.
- **Content:** all activities + FAQs, plus **two new FAQ pages** (Nerf, VR) recovered from the old
  Wix pages so nothing was lost.
- **Redirects preserved:** old Wix links keep working — `/online-waiver` → WaiverMaster,
  `/book-party-warwick-ri` and `/book-party-webster-ma` → Square appointments.
- **Cleanup:** removed the staging "hidden from Google" flag — the site is now indexable.
- **Cost:** hosting is now free; only the domain registration is a paid item (currently still
  through Wix).

---

## Decisions / confirmations needed from the client

1. **Email provider — which is actually real?** DNS has *both* a GoogleWorkspace MX record set
   *and* leftover Microsoft 365/Lync records. Need the truth to fix SPF/DKIM/DMARC properly.
   (Recommended: confirm where mailboxes live — Gmail/Workspace or Outlook/M365.)
2. **Wix account + billing:** who pays the Wix subscription, and when does it renew? We want to
   cancel/downgrade **after** the Porkbun transfer, not before.
3. **Wix Bookings** — ✅ resolved: no longer used, **all bookings are on Square now**. No Wix
   booking data to preserve before closing the account.
4. **Legal owner for WHOIS:** after the transfer, switch the registrant from "Ian Costello / The
   Forge Companies" to the actual business. Need the exact legal name + contact email the client
   wants on record.
5. **Domain contact mailbox:** who reads `contact@advancedactionsports.com`? (The site's "Email Us"
   links go there.)
6. **Do they want extras?** Analytics, Cloudflare, a real contact form, etc. (see roadmap below).
7. **Post-launch feedback:** anything they've heard from customers, anything missing/incorrect on
   the new site since launch?
8. **VR status:** the VR page says "Currently Paused" — is that still accurate, or should we update
   messaging / hide it?

---

## Roadmap / enhancements (prioritized — pitch as options, not commitments)

### Tier 1 — Finish the migration (low effort, planned)
- **Transfer registration to Porkbun** (~Oct 11): ~$10/yr, free WHOIS privacy, you control it.
- **Fix registrant contact** to the business after transfer.
- **Clean up legacy DNS** (M365/Lync leftovers, GoDaddy `email.secureserver.net`, dead Wix/Ascend
  DKIM) once email provider is confirmed.
- **Email authentication:** correct SPF/DKIM/DMARC for the real provider (improves deliverability,
  keeps mail out of spam).
- **Export any remaining Wix content**, then cancel/downgrade Wix to stop the recurring charge
  (bookings are all on Square now — no booking data to preserve).

### Tier 2 — Visibility & marketing (small effort, high value)
- **Google Search Console + sitemap** (`jekyll-sitemap`) so the new site gets properly indexed.
- **Analytics** — pick one: GA4, or privacy-friendly Cloudflare Web Analytics / Plausible.
- **Google Business Profile** check/claim for both locations (Webster + Granville), align hours.
- **Review the homepage "VR — Coming Soon"** card and activity ordering for conversion.

### Tier 3 — Bigger / optional (only if client wants)
- **Cloudflare** in front of the site (CDN, caching, analytics) and/or **Cloudflare Registrar**
  (wholesale pricing) instead of Porkbun.
- **Real contact form** (currently `mailto:` only) — e.g. a static-form service.
- **Structured data / local SEO** expansion (already have LocalBusiness schema; could add FAQ
  schema to the FAQ pages for rich results).
- **Performance polish** (already optimized to AVIF/WebP; could add caching headers).

---

## Risks / watch-outs

- **Don't cancel Wix until the Porkbun transfer completes** — account closure is the one
  irreversible step. (Bookings are on Square, so there's no Wix booking data to lose.)
- **Email is the fragile part.** Records are carried as-is right now; make no mail-record changes
  until the provider is confirmed, then change carefully and test.
- **Don't change the registrant contact again before transfer** — it would restart the 60-day lock.
- **Domain renewal 2027-02-02** — make sure it's on auto-renew (at Porkbun after transfer); a lapse
  is the most expensive mistake here.

---

## Post-meeting action checklist

- [ ] Note email provider answer → update SPF/DKIM/DMARC plan in `MIGRATION-PLAN.md` (Phase 3 tree)
- [ ] Get Wix billing renewal date + who owns/can access the Wix account
- [x] Wix Bookings not in use (all on Square) — no data export needed
- [ ] Collect legal business name + WHOIS contact email for after-transfer update
- [x] Enforce HTTPS enabled in GitHub Pages (confirmed 2026-10-01; custom domain = `www`)
- [ ] Calendar reminder: **~2026-10-11** start Wix → Porkbun transfer (~5–7 days to complete)
- [ ] Calendar reminder: **2027-01-01** domain renewal check before 2027-02-02 expiry
- [ ] Decide analytics + Search Console (get access if approved)
- [ ] Note any post-launch content changes the client wants
