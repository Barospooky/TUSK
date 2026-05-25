# SmileCare Dental Clinic Website

A professional, fully responsive dental clinic website.  
**No npm, no build step — just open index.html in a browser.**

---

## 🚀 Run Locally

Just open `index.html` in any modern browser. Done.

Or use VS Code Live Server for auto-reload.

---

## 📁 File Structure

```
dental-clinic/
├── index.html        → Full website (single page)
├── css/
│   └── style.css     → All styles
├── js/
│   └── main.js       → Navbar, scroll animations, form
└── README.md
```

---

## ✏️ What to Customize for the Client

### 1. Clinic Name
Search and replace `SmileCare` with the actual clinic name throughout `index.html`.

### 2. Doctor Names & Info
Find the `<!-- ═══ TEAM ═══ -->` section in `index.html`.
Replace each `[Doctor Name]`, role, and qualification.

### 3. Doctor Photos
Replace the Unsplash image URLs in the `<img>` tags inside `.team-photo`.
Just swap the `src` with a local file path (e.g. `images/doctor1.jpg`).

### 4. Phone Number
Search for `919999999999` — replace with actual WhatsApp number (with country code, no +).

### 5. Address
Search for `[Clinic Full Address]`, `[Area]`, `[PIN]` — fill in the real details.

### 6. Google Maps Embed
In the `<!-- CONTACT / MAP -->` section, replace the iframe `src` with the actual
Google Maps embed URL for the clinic:
  1. Go to maps.google.com → search the clinic address
  2. Click Share → Embed a map → Copy HTML → grab just the `src="..."` URL
  3. Paste it into the iframe src

### 7. Email
Replace `info@smilecaredental.com` with the clinic's real email.

### 8. Working Hours
Update in the Appointment section info cards and the Footer.

### 9. Stats (10+ years, 5000+ patients, etc.)
Update the `.stat-num` values in the hero section.

---

## 🌐 Deploy

### Netlify (Free, Recommended)
1. Go to netlify.com → drag and drop the `dental-clinic/` folder
2. Done — live in 30 seconds

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside the `dental-clinic/` folder
3. Follow prompts — select "Other" for framework

### GitHub Pages
1. Push to a GitHub repo
2. Settings → Pages → Deploy from `main` branch root
3. Done

---

## 🎨 Design System

Colors (edit in `css/style.css` `:root`):
- `--navy`    : #0B2341 (dark blue, primary)
- `--teal`    : #1A7FA8 (accent)
- `--teal-lt` : #2AAFD4 (light accent)
- `--sky`     : #E8F6FB (background tint)

Fonts: Playfair Display (headings) + DM Sans (body) from Google Fonts
