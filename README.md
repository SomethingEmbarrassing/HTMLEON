# HTMLEON

One-page model gallery for Android/iOS/Desktop: image cards → 3D viewer → AR on mobile.
Card gallery with optional region filter chips; models load only when a card is opened, so the page stays light on phones.

## Adding a model (no code changes)

1. Copy the `.glb` (and optional `.usdz` for iOS AR) into this folder, and a card image into `thumbs/`.
2. Add an entry to the list in `models.js`:

```js
{
  "id": "27-01",                  // unique; used in QR/deep links (?model=27-01)
  "name": "New Project",
  "description": "Optional caption",
  "glb": "27-01.glb",
  "usdz": "27-01.usdz",           // optional; iOS AR only
  "image": "thumbs/27-01.jpg",    // card image; "" = live 3D preview (heavy on phones)
  "region": "Downtown",           // any label; filter chips build themselves. "" = All only
  "scale": "0.1 0.1 0.1"          // browser-view size; AR places at real size
}
```

## Regions

Filter chips are generated from whatever `region` values exist in `models.js`.
No regions set = no chips shown. Add a new region name to any model and its chip appears.

## Public URL for QR codes

`YOUR_PUBLIC_URL` is set in `index.html` and is used to build the QR deep links.

## Notes

- Keep model files under 100MB for GitHub Pages.
- Local testing needs a local server (e.g. `python -m http.server`) — `file://` blocks .glb loading.
