# Summit & Shore

A marketing website for **Summit & Shore** — boutique short-term rental management in the Finger Lakes.

## Preview locally

**Important:** Use `http://` (not `https://`). The GitHub repo URL is not the live site—you must run a local server.

```bash
cd summit-and-shore
./preview.sh
```

Or manually:

```bash
cd summit-and-shore
python3 -m http.server 8080
```

Then open **http://127.0.0.1:8080** (or http://localhost:8080).

If you see “This page isn’t working” in Chrome:

1. Confirm the terminal shows `Serving HTTP on` (server is running).
2. Use `http://127.0.0.1:8080` — not `https://`.
3. Stay in the `summit-and-shore` folder when you start the server.

## Site structure

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Owner-focused conversion — hero, co-hosting, strategic advantage, staging, FAQ, contact (revenue calculator preserved as internal-only) |
| Presentation | `presentation.html` | Editorial staging & design framework (copy TBD) |
| Services | `services.html` | Co-hosting pillars — revenue, guest experience, presentation, owner partnership, local ops |
| Markets & Stays | `markets.html` | Guest browsing — properties, lakes, book a stay |
| About | `about.html` | Company story, hosts, philosophy |

Shared assets: `styles.css`, `script.js`, `images/`

## Customize

- Replace placeholder phone numbers and `hello@summitandshore.com` with real contact info
- Swap placeholder images for your own property photos
- **Logo icon:** Save your mountain mark (no text) as `images/logo-icon-source.png`, then run `python3 scripts/prepare-logo-icon.py` and copy to `images/logo-header.png`. Header/footer show the mark plus “Summit & Shore” in HTML.
- **Internal revenue tool:** Calculator markup lives in `index.html` with class `internal-only` (hidden from public). Remove that class to expose it again.
- Connect the contact form to your CRM or form backend
