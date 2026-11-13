"""Generate a print-ready summit QR code once the real Vercel URL is known.

Install: pip install qrcode[pil]
Usage: python scripts/generate_qr.py https://your-real-domain.vercel.app
Output: public/summit-qr.png
The link uses ?source=summit_qr to tag event registrations when the form is connected.
"""
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit, parse_qsl, urlencode
import sys

if len(sys.argv) != 2:
    sys.exit('Usage: python scripts/generate_qr.py https://your-live-domain')
url = sys.argv[1].strip()
parts = urlsplit(url)
if parts.scheme != 'https' or not parts.netloc:
    sys.exit('Use a full HTTPS URL to the deployed NexStep homepage.')
query = dict(parse_qsl(parts.query))
query['source'] = 'summit_qr'
url = urlunsplit((parts.scheme, parts.netloc, parts.path or '/', urlencode(query), ''))
try:
    import qrcode
    from qrcode.constants import ERROR_CORRECT_H
except ImportError:
    sys.exit('Install qrcode first: pip install qrcode[pil]')
qr = qrcode.QRCode(version=None, error_correction=ERROR_CORRECT_H, box_size=18, border=4)
qr.add_data(url)
qr.make(fit=True)
image = qr.make_image(fill_color='#080d14', back_color='white').convert('RGB')
out = Path(__file__).resolve().parents[1] / 'public' / 'summit-qr.png'
image.save(out)
print(f'Saved QR: {out}\nDestination: {url}\nTest it with a phone before printing.')
