# Meridian Horizon Commercial Brokers LLC - Website

Website for Meridian Horizon Commercial Brokers LLC, a UAE-based commercial brokerage and business advisory company.

**Live site:** https://natasha0824inkf.github.io/meridian-horizon (GitHub Pages, before domain is connected)

---

## Before Launch - TODO List

Search for `[TODO]` in the following files and replace each one:

### `js/components.js`
- `PHONE` - actual phone number with country code, e.g. `+971 50 123 4567`
- `WHATSAPP_NUMBER` - digits only, no + or spaces, e.g. `971501234567`
- `EMAIL` - actual email address
- `LINKEDIN_URL`, `INSTAGRAM_URL`, `FACEBOOK_URL` - social media profile URLs

### `contact.html`
- Replace all `+971XXXXXXXXX` with the actual WhatsApp number
- Replace `info@[yourdomain].ae` with actual email
- Replace `+971 [XX XXX XXXX]` with actual phone
- Drop in the Brevo form embed code (see instructions below)

### All pages
- Replace the "Photo Placeholder" blocks with actual images

---

## Connecting the Contact Form (Brevo)

1. Create a free account at [brevo.com](https://brevo.com)
2. Go to **Contacts > Forms > Create a form**
3. Add fields: Name, Email, Phone, Subject, Message
4. Under **Share**, select **Embed** and copy the HTML snippet
5. In `contact.html`, find the `brevo-form-placeholder` div and replace it with the Brevo embed code
6. Delete the fallback `<form>` below it (it is a visual placeholder only and does not send emails)

---

## Connecting a Custom Domain (Free via GitHub Pages)

When the domain is ready:

1. In your domain registrar's DNS settings, add these 4 A records:
   ```
   Type  Name  Value
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   ```
2. Add a CNAME record:
   ```
   Type   Name  Value
   CNAME  www   natasha0824inkf.github.io
   ```
3. Create a file called `CNAME` in the root of this repo containing just the domain name, e.g.:
   ```
   meridianhorizon.ae
   ```
4. In GitHub: go to **Settings > Pages > Custom domain**, enter the domain and save
5. Tick **Enforce HTTPS** once DNS has propagated (can take up to 48 hours)

---

## Making Content Changes

The site is plain HTML. Each page is a self-contained `.html` file. To change text:

1. Open the relevant file in any text editor (or directly on GitHub via the pencil icon)
2. Find the text and edit it
3. Save/commit the change
4. GitHub Pages publishes the update within a minute or two

### Shared elements (header, footer, WhatsApp button)

These live in `js/components.js`. Edit them once there and all 7 pages update automatically.

### Adding a photo

Replace any `<div class="about-img-block">Photo Placeholder</div>` with:
```html
<img src="images/your-photo.jpg" alt="Description" style="width:100%; height:100%; object-fit:cover;">
```
Put image files in the `images/` folder.

---

## Site structure

```
/
├── index.html          Home
├── about.html          About Us
├── services.html       Services
├── industries.html     Industries
├── why-us.html         Why Choose Us
├── partners.html       Partners
├── contact.html        Contact
├── css/
│   └── style.css       All styles
├── js/
│   └── components.js   Shared header, footer, WhatsApp button
└── images/             Put photos here
```

---

## Switching to WordPress Later

1. Get hosting that supports WordPress (SiteGround, Bluehost or Hostinger)
2. Install WordPress via the host's one-click installer
3. Choose a theme close to this design (Astra or Hello Elementor are good)
4. Recreate the 7 pages
5. Install WPForms or Gravity Forms to replace the Brevo form
6. Update DNS at your registrar to point to the new host
7. Archive or keep this GitHub repo as a backup

WordPress has ongoing costs: hosting (~$5-15/month), possible premium theme ($50-100 one-off), and needs security updates. GitHub Pages costs nothing.
