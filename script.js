const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const qrContainer = document.getElementById('qrContainer');
const qrUrl = YOUR_PUBLIC_URL || window.location.href;

if (!isMobile) {
  qrContainer.style.display = 'flex';
  new QRious({
    element: document.getElementById('qrcode'),
    value: qrUrl,
    size: 180,
    background: 'white',
    foreground: 'black',
  });
}

const modelViewer = document.getElementById('model');
if (!modelViewer.canActivateAR) {
  const fallback = document.createElement('div');
  fallback.className = 'fallback';
  fallback.textContent = 'AR is not supported on this device.';
  document.querySelector('main').appendChild(fallback);
}
