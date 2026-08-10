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
- Replace the Unsplash placeholder images with actual photos (put images in the `images/` folder and update the `src` attributes)

---

## Connecting the Contact Form (Brevo)

1. Create a free account at [brevo.com](https://brevo.com)
2. Go to **Contacts > Forms > Create a form**
3. Add fields: Name, Email, Phone, Subject, Message
4. Under **Share**, select **Embed** and copy the HTML snippet
5. In `contact.html`, find the `brevo-form-placeholder` div and replace it with the Brevo embed code
6. Delete the fallback `<form>` below it (it is a visual placeholder only and does not send emails)

---

## Connecting a Custom Domain via Hostinger

These are step-by-step instructions for pointing a domain managed on Hostinger to this GitHub Pages site.

### Step 1 - Log into Hostinger

1. Go to [hpanel.hostinger.com](https://hpanel.hostinger.com) and log in
2. In the left sidebar, click **Domains**
3. Find the domain you want to use and click **Manage** next to it

### Step 2 - Open the DNS Zone editor

1. In the domain management screen, click **DNS / Nameservers** in the left menu
   (some accounts show this as **DNS Zone** - it is the same thing)
2. You will see a list of existing DNS records

### Step 3 - Remove existing A records for @

Look for any existing A records where the **Name** column shows `@` or is blank.
Click the bin/delete icon on each one and confirm deletion.
(If there are none, skip this step.)

### Step 4 - Add the 4 GitHub Pages A records

Click **Add Record** (or **Add new record**) and add each of the following - one at a time:

| Type | Name | Points to       | TTL  |
|------|------|-----------------|------|
| A    | @    | 185.199.108.153 | 3600 |
| A    | @    | 185.199.109.153 | 3600 |
| A    | @    | 185.199.110.153 | 3600 |
| A    | @    | 185.199.111.153 | 3600 |

After adding all four, click **Save** (Hostinger often requires saving after each record or after all four - follow the prompts on screen).

### Step 5 - Add the CNAME record for www

Click **Add Record** again and add:

| Type  | Name | Points to                     | TTL  |
|-------|------|-------------------------------|------|
| CNAME | www  | natasha0824inkf.github.io     | 3600 |

Save the record.

### Step 6 - Add the CNAME file to this repo

In this GitHub repository, create a file called `CNAME` in the root folder (no file extension) containing just the domain name on one line:

```
meridianhorizon.ae
```

Replace `meridianhorizon.ae` with the actual domain name. This file tells GitHub Pages which domain to serve the site from.

To create the file directly on GitHub:
1. Go to the repository on GitHub
2. Click **Add file > Create new file**
3. Name it `CNAME` (capital letters, no extension)
4. Type just the domain name in the file body
5. Click **Commit changes**

### Step 7 - Configure GitHub Pages

1. In the GitHub repository, click **Settings**
2. Click **Pages** in the left sidebar
3. Under **Custom domain**, type the domain name and click **Save**
4. GitHub will check DNS - this may show a warning for up to 48 hours while DNS propagates
5. Once DNS is confirmed, tick **Enforce HTTPS** and save again

### How long does it take?

DNS changes typically propagate within a few hours, but can take up to 48 hours in some cases. The site will work at the GitHub Pages URL in the meantime.

---

## Making Content Changes

The site is plain HTML. Each page is a self-contained `.html` file. To change text:

1. Open the relevant file in any text editor (or directly on GitHub via the pencil icon)
2. Find the text and edit it
3. Save/commit the change
4. GitHub Pages publishes the update within a minute or two

### Shared elements (header, footer, WhatsApp button)

These live in `js/components.js`. Edit them once there and all pages update automatically.

### Adding a photo

Replace any Unsplash placeholder `<img>` with a real image:
```html
<img src="../images/your-photo.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;">
```
Put image files in the `images/` folder. Use `../images/` for pages inside the `blog/` subfolder.

### Adding a new blog article

1. Copy one of the existing files in the `blog/` folder
2. Update the title, meta description, date, category tag, and body text
3. Add a link to the new article in `blog/index.html` (copy one of the existing `.blog-card` blocks and update the text and `href`)
4. Commit and push - GitHub Pages will publish it within a minute

---

## Connecting a WordPress Site on Hostinger (Option B)

If the business decides to migrate to WordPress in the future, here is how to set that up on Hostinger.

### Installing WordPress on Hostinger

1. Log in to [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. In the left sidebar, click **Hosting**
3. Find the hosting plan and click **Manage**
4. In the hosting dashboard, look for **WordPress** or **Auto Installer**
5. Click **Install WordPress**
6. Choose the domain and directory (install to the root `/` for the main site)
7. Set an admin username and a strong password - save these somewhere safe
8. Click **Install** and wait 1-2 minutes
9. WordPress will be live at the domain - log in at `yourdomain.ae/wp-admin`

### Recommended WordPress setup

- Theme: **Astra** (free, fast, well-supported) or **Hello Elementor** if using Elementor page builder
- Page builder: **Elementor** (free version is sufficient to start)
- Contact forms: **WPForms Lite** (free) to replace the Brevo form
- SEO: **Yoast SEO** or **RankMath** (both free)
- Security: **Wordfence Security** (free)

### Switching DNS from GitHub Pages to Hostinger

Once WordPress is installed and the site is ready:

1. Log into Hostinger hPanel > Domains > Manage > DNS Zone
2. Delete the 4 A records pointing to GitHub Pages (185.199.xxx.xxx)
3. Add the A record(s) pointing to the Hostinger server IP
   (Hostinger shows the correct IP in your hosting dashboard under **Details**)
4. Update the CNAME for www to point to the Hostinger server or `@`
5. DNS propagation takes up to 48 hours - the old site will remain live in the meantime
6. Once DNS propagates, delete the `CNAME` file from the GitHub repository and disable GitHub Pages under Settings

### Note on costs

WordPress on Hostinger incurs monthly hosting fees (typically $3-10/month depending on the plan). The GitHub Pages site costs nothing. Keep the GitHub repository as a backup regardless of which hosting route is chosen.

---

## Site structure

```
/
├── index.html              Home
├── about.html              About Us
├── services.html           Services
├── industries.html         Industries
├── why-us.html             Why Choose Us
├── partners.html           Partners
├── contact.html            Contact
├── privacy.html            Privacy Policy
├── terms.html              Terms & Conditions
├── blog/
│   ├── index.html          Insights listing
│   ├── uae-mainland-vs-free-zone.html
│   ├── uae-business-banking.html
│   └── corporate-structuring-uae.html
├── css/
│   └── style.css           All styles
├── js/
│   ├── components.js       Shared header, footer, WhatsApp button
│   └── i18n.js             EN/FR translations
└── images/                 Put photos here
```
