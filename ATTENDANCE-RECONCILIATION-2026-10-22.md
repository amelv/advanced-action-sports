# Attendance and Eventbrite reconciliation

**Checked:** October 22, 2026  
**Date range reviewed:** July 22–October 22, 2026

## Handoff for the next agent

The goal is to finish a reliable comparison of actual attendance sheets against registrations, then recommend the safest way to get verified attendance into LGL. User asked for this promptly, with a light touch. They explicitly said to download files if needed and to skip files that deny access. Do not treat a registration as proof of attendance, and do not import anything into LGL until the source data and workflow are confirmed (including with Jared).

### Links supplied by the user

- [2026 attendance sheets Drive folder](https://drive.google.com/drive/u/3/folders/1_B7fzAfLs3JMSIFOiMJnSGsIjmfMm7zz)
- [Additional spreadsheets Drive folder](https://drive.google.com/drive/u/0/folders/16g88PFs2B-ldlkomuuv7rzSzhDhC2jlu)
- [Cloudflare Pages guide: migrate Jekyll from GitHub Pages](https://developers.cloudflare.com/pages/migrations/migrating-jekyll-from-github-pages/)

The Cloudflare Pages link was shared during the earlier website-hosting discussion; it is context only for the attendance/LGL task. No hosting migration was performed as part of this review.

### What the user clarified most recently

The requested remaining export is **BosqueGrande per-event registrations from July 22 through October 22, 2026**, with attendee name, email, event date, and registration status. A previous assistant explained that this means the attendee lists in BosqueGrande's **Events → Registrations** screen, because available connected tools could not read those custom production records. The user then clarified that the work was intended for another chat; no export was provided or created here. This handoff records the request so the next agent can continue if appropriate, without implying that BosqueGrande access or a new export is already available.

### Next actions

1. Check the shared Drive folders and available connected sources for a newer BosqueGrande or Eventbrite export before asking anyone to prepare one. The user expects the Eventbrite data may have changed since the older grant-reporting workbook was checked on October 22.
2. If no export is available, report plainly that the missing input is a BosqueGrande per-event registrations export for July 22–October 22 with name, email, event date, and registration status. Do not ask for account credentials. Use a supported export or have an authorized account holder provide the file.
3. Reconcile the export against attendance sheets for the same event dates. Keep registration, check-in, and attendance-sheet submissions distinct; identify missing event sheets, duplicate records, and disagreements rather than silently merging them.
4. Present clear per-event totals and exceptions, then recommend an LGL import structure. Do not write to LGL until the user confirms the result and Jared's workflow approval is obtained.
5. Update this note with the source file links, date of retrieval, coverage, matching method, counts, exceptions, and what remains uncertain. Avoid putting full attendee names/emails in this report unless needed; store sensitive row-level data in an appropriately shared source file.

### Access limitations and prior decisions

- The two inaccessible 2025 shortcuts (May 21 networking and November 19 networking) were skipped as the user instructed.
- The older Eventbrite grant-reporting workbook was last found to cover July 24–August 30 only. This is a dated finding; re-check for an updated source before relying on it.
- The 2026 attendance sheets reviewed were August 1, September 5, and October 3 Coffee Klatch. Their form-response counts and CSV roster counts are summarized below; the repeated contact sets and August 1 mismatch need to be validated before any import.
- No LGL import or edits to the source attendance / Eventbrite workbooks were made during this review.

## What I reviewed

- [August 1 Coffee Klatch attendance sheet](https://docs.google.com/spreadsheets/d/1xw8DaEOaa17XzI7fSoU5_LlB_LwAs53Hi-yG0IZMW-w/edit)
- [September 5 Coffee Klatch attendance sheet](https://docs.google.com/spreadsheets/d/1_5drSMwu6Kgz8GFhAizMQpcM8I2PkRByw9UwYAPS5DM/edit)
- [October 3 Coffee Klatch attendance sheet](https://docs.google.com/spreadsheets/d/1aWBulaoOsUBmi1BjzktVO2XQzLO_nh4t2qc4CUJc6r0/edit)
- [Q-MoB 2026 Eventbrite Data (grant reporting)](https://docs.google.com/spreadsheets/d/1atyvl1sy92UBteOxZ9AXtKkpQuUPPBR5m8bCBLXQ50Q/edit)
- [Q-MoB New Event Form Revised responses](https://docs.google.com/spreadsheets/d/1yrdVb7BnDqJsQMGITR103FQ5deg9idlZOP3GX-XAdR8/edit)
- [Q-MoB Status 2026-10-04](https://docs.google.com/spreadsheets/d/1c-zYiwl1R33ZWCxa2I5W4XIvrZ_8Y6VRPrl-Svej-XU/edit)
- [Q-MoB Project Management v3](https://docs.google.com/spreadsheets/d/18ck80H915qwLgnUF2E6i2DnNtM0bAztTzHjsvDqYhCE/edit)

## Findings

### Attendance sheets

Each `Sheet1` tab has a first row containing the field names and questions. Below that are **9 submitted forms** for that event. Each set has 9 distinct email addresses, and the same 9 addresses appear in all three months.

Each sheet also has a `CSV` tab with **10 roster entries** and no header row. The same 10 addresses appear in all three CSV tabs. For each month, 9 of the CSV addresses match that month's 9 form submissions.

The repeated lists may be expected for a recurring event, but confirm that each month’s responses are independent records of who attended before importing them as attendance.

### Eventbrite data

The available workbook contains **110 registration records** across **29 event/date groups**, from July 24 through August 30: 97 are marked `Attending` and 13 `Not Attending`. These are registration statuses, not confirmation that someone attended.

The workbook has no event records after August 30. The only matching event in the reviewed attendance sheets is the August 1 Coffee Klatch. Eventbrite has one registration for that event; its email does not match either the nine form submissions or the ten-entry CSV roster.

I found no matching attendance sheet in Drive for the other 28 Eventbrite event/date groups. The September 5 and October 3 attendance sheets have no corresponding event records in this Eventbrite workbook.

## Recommended next step for LGL

1. Get an up-to-date Eventbrite attendee export covering July 22–October 22, with event name/date, attendee name, email, and registration status. Do not include questionnaire answers.
2. Confirm whether each attendance form is a record of actual presence and whether the repeated rosters are expected.
3. Match confirmed attendees to LGL constituents by normalized email; review ambiguous matches manually.
4. Keep registration separate from attendance. Import only confirmed attendance, with one attendance record per person per event date, after Jared confirms the workflow. Review the LGL import preview before committing.

**Status:** No data has been imported into LGL. The available records are not sufficient for a reliable July–October attendance import because the Eventbrite export stops in August and the August 1 roster does not reconcile.

## Additional folder review

The newly shared folder contains shortcuts to older registrant and attendance spreadsheets, mostly for **2025** events (including July 16, August 2, August 10, September 17, and October 15, 2025). These are useful historical records but do not update the 2026 Eventbrite workbook. Two shortcuts—the May 21 and November 19, 2025 networking sheets—deny access; they were skipped as requested.

The folder also links to the **Q-MoB Status 2026-10-04** and **Q-MoB Project Management v3** workbooks. Their status notes describe a newer source of Eventbrite registrations in BosqueGrande: the Eventbrite webhook and per-event registrant screen are marked achieved. The combined Eventbrite/BosqueGrande registration list and check-in/attendance list are marked partially achieved, while per-event attendance statistics were still marked not started. The tracker says the BosqueGrande-to-LGL person link is achieved; the project plan notes that this path was verified on staging.

These are project-status notes, not the current attendee records. They point to BosqueGrande's per-event registration list as the next source to export or review; they do not confirm that the old Eventbrite workbook has been refreshed or that attendance is complete.

The New Event Form responses sheet contains **23 event requests with event dates from July 22 through October 22, 2026**. It includes several September and October dates missing from the old Eventbrite workbook. These are host event requests, not attendee registrations or proof that an event occurred. This sheet helps identify events to reconcile, but cannot fill in who registered or attended.

I did **not** refresh the Eventbrite reporting workbook. The new folder has historical 2025 registrant sheets and current project trackers, but no newer 2026 Eventbrite attendee export. The connected WordPress tools can see the Q-MoB site but do not expose BosqueGrande's custom per-event registration records, so those records still need an export from BosqueGrande or Eventbrite to finish the comparison.
