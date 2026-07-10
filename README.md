# HTMLEON
HTML page for Android/IOS/Desktop to display GLB from IFC and use AR if on mobile.

Opens with a card gallery of models; selecting a card loads it in the 3D/AR viewer.

## Adding a model (no code changes)

1. Copy the `.glb` (and optional `.usdz` for iOS AR, and optional thumbnail image) into this folder.
2. Add an entry to the list in `models.js`:

```json
{
  "id": "new-part",
  "name": "New Part",
  "description": "Optional caption",
  "glb": "New Part.glb",
  "usdz": "New Part.usdz",
  "image": "new-part.jpg",
  "scale": "0.1 0.1 0.1"
}
```

Notes:
- `id` must be unique (used in QR/deep links: `?model=new-part`).
- Leave `image` blank (`""`) to show a live rotating 3D preview on the card instead.
- `usdz` and `scale` are optional.

## Public URL for QR codes

When the site is hosted publicly, you may want the QR code to point to a
specific URL rather than the current location. Define a global
`YOUR_PUBLIC_URL` before loading `script.js`:

```html
<script>
  const YOUR_PUBLIC_URL = 'https://example.com/htmleon';
</script>
<script src="script.js"></script>
```

Alternatively, inject the variable from your hosting environment. For
example, in a simple shell script:

```bash
export YOUR_PUBLIC_URL="https://example.com/htmleon"
```

Ensure that `YOUR_PUBLIC_URL` resolves to the public address where the page
is served so the generated QR code directs to the correct location.
