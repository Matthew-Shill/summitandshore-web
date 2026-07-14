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

**This is a static site — there is no `npm run dev`.** Use `./preview.sh` or Python’s built-in server only.

**Port 8080 stuck or “empty reply”?** Another process may be holding the port without serving files. Fix:

```bash
# Stop whatever is on 8080 (replace PID if lsof shows a different one)
lsof -i :8080 -sTCP:LISTEN
kill <PID>

# Or use another port
python3 -m http.server 5500
# → http://127.0.0.1:5500
```

`./preview.sh` automatically tries 8080, then 5500, 3000, and 8888 if a port is busy or broken.

## Site structure

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Owner-focused conversion — hero, co-hosting, advantage, staging, FAQ, contact (revenue calculator preserved as internal-only) |
| Services | `services.html` | Co-hosting pillars — presentation, revenue, guest experience, local ops |
| Our Region | `our-region.html` | Story, vision, and Finger Lakes service corridors |
| Privacy | `privacy.html` | Privacy Policy |
| Terms | `terms.html` | Terms of Service |

Redirect stubs (noindex): `about.html` and `markets.html` → `our-region.html`; `presentation.html` → `services.html#design-showcase`.

Shared assets: `styles.css`, `script.js`, `images/`, `robots.txt`, `sitemap.xml`, `favicon.png`, `apple-touch-icon.png`

## Customize

- Swap property photos in `images/` and update `src` paths in HTML as needed
- **Logo icon:** Save your mountain mark (no text) as `images/logo-icon-source.png`, then run `python3 scripts/prepare-logo-icon.py` and copy to `images/logo-header.png`. Header/footer show the mark plus “Summit & Shore” in HTML.
- **Internal revenue tool:** Calculator markup lives in `index.html` with class `internal-only` (hidden from public). Remove that class to expose it again.
- Contact form posts via FormSubmit to `Justin@summitandshore.co`
