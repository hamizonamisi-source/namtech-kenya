# NamiTech Kenya - Modern Responsive Website & SEO Implementation

## 1. Project Overview & Identity
- **Brand Name**: NamiTech Kenya
- **Tagline**: Connecting & Securing the Nation
- **Target Market**: Kenya (Nairobi, Kiambu, Mombasa, Kisumu, Nakuru, Eldoret & Nationwide)
- **Primary Phone / WhatsApp**: `+254 738 735 545`
- **Email**: `hamizonamisi@gmail.com`
- **Location**: Kenya

---

## 2. Multi-Page Architecture & Route Map
1. **Home (`/`)**:
   - High-impact cyber-network hero with full integration of the supplied NamiTech master graphic.
   - Exact headline: *"Fast Internet & Advanced CCTV Installation in Kenya"*.
   - Exact subheadline: *"NamiTech delivers high-speed networking, reliable home/office internet setups, and 24/7 security camera solutions."*
   - Clear conversion CTAs: **[Get a Free Quote]** (smoothly links to Contact form & opens dynamic modal) and **[Call Us: +254 738 735 545]**.
   - Core Services split: **Internet & Networking Setup** and **CCTV & Security Solutions**.
   - Interactive **Kenyan Installation Cost Estimator (KES)** with real-time budget calculations.
   - **Why Choose NamiTech?** section highlighting *Local Expertise*, *Fast Installation (24-48h)*, and *24/7 Support & Maintenance*.
   - Local social proof and client testimonials from Nairobi, Mombasa, and Kisumu.
   - Comprehensive Lead Form with Kenyan phone formatting and WhatsApp auto-redirect.

2. **Services (`/services`)**:
   - Deep-dive technical specifications for Internet, Fiber setup, Mesh WiFi dead-zone elimination, Cat6 structured cabling, and 4K IP CCTV surveillance.
   - Visual spotlights of server rack dressing and camera mounting technicians.

3. **About Us (`/about`)**:
   - Kenyan engineering background, enterprise uptime guarantees (99.8%), 500+ projects completed, and coverage map across Kenyan counties.

4. **Contact Us (`/contact`)**:
   - Direct call, WhatsApp click-to-chat with pre-filled message, official email link, and embedded lead capture form.

---

## 3. SEO Keyword Matrix (Kenyan Market)
- **Primary Keywords Targeted**:
  - `Internet installation services Kenya`
  - `CCTV installation Kenya`
  - `networking solutions Kenya`
  - `home WiFi setup`
  - `business internet setup Kenya`
- **Secondary Keywords Targeted**:
  - `Smart CCTV security camera installation`
  - `fiber internet installation`
  - `structured cabling Kenya`
  - `reliable WiFi installers Nairobi`
  - `NamiTech networking`
- **Metadata**: Meta title, OpenGraph tags, description, and keyword headers embedded in `index.html`.

---

## 4. Visual Assets & Media Strategy
- **Master Hero Graphic**: Uploaded to WebDev cloud storage (`/manus-storage/namitech-hero_36867b26.jpg`) and prominently featured in the Hero section and meta tags.
- **Micro-Assets**:
  - Server rack and neat cabling highlight: `/manus-storage/service-networking-rack_7442e541.jpg`
  - CCTV technician install preview: `/manus-storage/service-cctv-technician_460f33f1.jpg`
  - Operations NOC room: `/manus-storage/operations-noc_4cc85d1e.jpg`
  - Kenya network fiber map: `/manus-storage/kenya-fiber-map_a289a8ea.jpg`
  - Stylized NamiTech Kenya logo with camera head & cyber nodes.

---

## 5. Conversion & Mobile Features
- **Sticky Contact Bar**: Top ticker with 24/7 rapid tech dispatch notices.
- **Floating Contact Hub**: Quick action WhatsApp icon + direct phone call button available on every screen.
- **Smart Kenyan Lead Form**: Allows users to select Internet, CCTV, or Both, with instantaneous WhatsApp message generation for zero friction.

---

## 6. Netlify Deployment

This project is configured as a static Vite site and is ready for deployment on Netlify. The repository-root `netlify.toml` defines the production build command as `pnpm build` and the publish directory as `dist/public`. Netlify will use Node.js 22 during the build.

The site uses Wouter client-side routes, so both `netlify.toml` and `client/public/_redirects` include an SPA fallback that serves `/index.html` for direct visits to `/about`, `/services`, `/contact`, and any future client-side routes.

All website images are bundled under `client/public/assets/` and referenced with `/assets/...` paths. This removes the previous dependency on Manus-only storage URLs and allows the deployed Netlify site to serve the images independently.

### Deploy from Git

Connect the repository in Netlify and keep the detected settings, or enter the following values manually:

| Setting | Value |
|---|---|
| Build command | `pnpm build` |
| Publish directory | `dist/public` |
| Node version | `22` |

The site is frontend-only. No environment variables are required for the current WhatsApp, call, email, and client-side quote form actions. The lead form currently confirms the request in-browser and offers a pre-filled WhatsApp handoff; connect a form provider or backend endpoint later if submissions need to be persisted.

### Local production verification

Run `pnpm check && pnpm build` from the repository root. After the build completes, preview the generated static output with `pnpm exec vite preview --host` or deploy the repository to Netlify.
