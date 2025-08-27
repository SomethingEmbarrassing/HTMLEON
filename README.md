# HTMLEON
HTML page for Android/IOS/Desktop to display GLB from IFC and use AR if on mobile

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
