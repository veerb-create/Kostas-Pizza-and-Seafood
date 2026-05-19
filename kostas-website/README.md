# Kosta's Pizza & Seafood — Website

A single-page website for Kosta's Pizza & Seafood (315 Chestnut St, Needham, MA).
No build tools, no frameworks. Just open `index.html` in a browser.

## Files in this folder

```
index.html   ← the website itself (HTML + CSS + small JS)
menu.js      ← the menu data (edit this when prices/items change)
logo.png     ← your real logo (already in place)
README.md    ← this file
```

## How to view it

Double-click `index.html` — it opens in your browser. That's it.

## How to update the menu

**The menu lives in `menu.js`.** Open it in any text editor (VS Code, Sublime,
even TextEdit). Each block in the file is one category card on the website.
Save, refresh the browser, done.

### Examples

**Change a price:**

```js
{ name: "Gyro", price: "9.95" },
```

…just change `"9.95"` to the new price. Don't add a `$` — the site adds it.

**Add a new item:**

```js
{ name: "Lamb Gyro", price: "11.50" },
```

Drop a new line like that anywhere inside an `items: [ ... ]` block.

**Add a description (the gray sub-line under the name):**

```js
{ name: "Cheeseburger Sub", price: "9.95", desc: "two 4 oz Angus beef patties" },
```

**Items with two sizes (e.g. 6 pc / 12 pc):**

```js
{ name: "Wings", sizes: [
    { label: "6 pc",  price: "8.75" },
    { label: "12 pc", price: "14.25" }
] },
```

**Rename a category** — change the `title:` line at the top of any block.
**Reorder categories** — cut and paste blocks in `menu.js` to reorder them.
**Delete a category** — delete the whole `{ ... }` block (and the comma after it).

That's the entire workflow. You never touch `index.html` to update the menu.

## How to edit other things

Everything else lives in `index.html`:

- **Colors:** edit the `--navy`, `--cream`, `--gold` variables at the top of `<style>`
- **Phone / address / hours:** search the file for `(781) 449-2255`, `315 Chestnut`, or `11:00 AM`
- **About story copy:** find the `<!-- ====== STORY ====== -->` section
- **Catering & delivery info:** in the `<!-- ====== VISIT ====== -->` section

## What's on the site

- Sticky nav with mobile menu and "Call to Order" button
- Full-screen hero using `logo.png`
- "Our Story" — 30+ years, fresh pita, no MSG
- Menu — 8 categories, 66 items pulled from `menu.js`, with a jump-nav across the top
- Visit — address, hours, embedded map, call-to-order, catering & delivery info, **cash-or-check-only** notice
- Reviews — link out to the real Yelp page (124 reviews)
- Footer — phone, address, Yelp, Maps

## Hosting it online (later)

When you're ready to publish, the easiest free options:

- **Netlify Drop** — drag this folder onto netlify.com/drop, get a URL in 10 seconds
- **GitHub Pages** — push to a GitHub repo, enable Pages in settings
- **Cloudflare Pages** — similar to Netlify, also free

All three handle this single-file-plus-assets setup perfectly.
