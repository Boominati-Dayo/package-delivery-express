# Global Track Logistics - Next.js Version

A modern, full-featured logistics tracking website built with Next.js 14, MongoDB, and SMTP email.

## Features

- Real-time package tracking
- Dark/Light mode toggle
- SMTP email notifications
- Admin dashboard with shipment management
- Responsive design
- SEO optimized (sitemap.xml, robots.txt)

## Tech Stack

- **Framework:** Next.js 14 (TypeScript)
- **Database:** MongoDB (Mongoose)
- **Email:** Nodemailer (SMTP)
- **Styling:** Tailwind CSS
- **Auth:** JWT

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in `.env.local`:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email
   SMTP_PASS=your_app_password
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Pages

- `/` - Home page with testimonials
- `/track` - Package tracking
- `/services` - Our services
- `/about` - About us
- `/contact` - Contact form
- `/faq` - FAQ
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/admin` - Admin dashboard (login required)
- `/admin/login` - Admin login

## Brand Colors

- Primary: #351c15 (Dark Brown)
- Secondary: #4a2a1f (Light Brown)
- Accent: #ffbe03 (Gold)

## Powered By

UPS & Global Partners