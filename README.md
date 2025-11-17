# Rakri AI - Website

A premium, modern Next.js website for Rakri AI - an AI-powered, GDPR-compliant recruitment platform specializing in client-hosted solutions for European and US recruitment agencies.

## Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4
- **Smooth Animations**: Framer Motion for polished, professional animations
- **Responsive Design**: Fully responsive across all devices (mobile-first approach)
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Dark Theme**: Professional dark color palette with electric blue accents
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance**: Optimized images, fonts, and server-side rendering

## Project Structure

```
Rakri/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky navigation with mobile menu
│   │   │   └── Footer.tsx          # Footer with social links
│   │   ├── ui/
│   │   │   ├── Button.tsx          # Reusable button component
│   │   │   ├── Container.tsx       # Responsive container
│   │   │   └── Section.tsx         # Animated section wrapper
│   │   └── sections/
│   │       ├── Hero.tsx            # Homepage hero section
│   │       ├── ValueProposition.tsx
│   │       ├── TrustBar.tsx
│   │       ├── offering/           # Offering page sections
│   │       └── contact/            # Contact page sections
│   ├── offering/
│   │   └── page.tsx                # Offering page
│   ├── contact/
│   │   └── page.tsx                # Contact page
│   ├── layout.tsx                  # Root layout with metadata
│   ├── page.tsx                    # Home page
│   └── globals.css                 # Global styles and theme
├── public/                         # Static assets
└── package.json
```

## Pages

### 1. Home Page (`/`)
- Animated hero section with gradient background
- Company branding and tagline
- Value proposition snapshot (3 key benefits)
- Trust bar with certifications
- Dual CTAs: "Explore Our Solution" and "Book Your Demo"

### 2. Offering Page (`/offering`)
- Why Rakri AI section
- Key benefits with numbered cards
- Features snapshot grid
- How It Works timeline
- Client testimonial with metrics
- Pricing & ROI overview
- Strong call-to-action section

### 3. Contact Page (`/contact`)
- Contact form with floating labels
- Form validation
- GDPR compliance notice
- Contact details (email, phone)
- Business hours (CET timezone)
- Location information
- Social media links

## Design System

### Color Palette
- **Primary Background**: `#0B1223` (Navy Dark)
- **Primary Accent**: `#3178C6` (Electric Blue)
- **Secondary Accent**: `#6C7A91` (Slate Gray)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#A0AEC0` (Light Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Key Components
- Smooth scroll behavior
- Hover effects with scale transforms
- Gradient text effects
- Backdrop blur for glassmorphism
- Animated background gradients

## Getting Started

### Prerequisites
- Node.js 18+ and npm 10+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Rakri
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project is compatible with any platform supporting Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker

## Customization

### Update Content
- Edit section components in `app/components/sections/`
- Modify metadata in `app/layout.tsx` and page files
- Update colors in `app/globals.css`

### Add New Pages
1. Create folder in `app/` (e.g., `app/about/`)
2. Add `page.tsx` with metadata export
3. Update navigation in `app/components/layout/Header.tsx`

### Modify Theme
Colors are defined in `app/globals.css` using CSS variables:
```css
:root {
  --navy-dark: #0B1223;
  --electric-blue: #3178C6;
  /* ... */
}
```

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Inter)
- **Icons**: Heroicons (inline SVG)

## Performance Optimizations

- Server-side rendering (SSR)
- Image optimization with Next.js Image
- Font optimization with next/font
- CSS-in-JS with Tailwind
- Code splitting
- Lazy loading animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright 2025 Rakri AI. All rights reserved.

## Support

For questions or issues, contact:
- Email: connect@rakriai.com
- Phone: +31 (0)20 123 4567 (Netherlands)
- Phone: +91 80 1234 5678 (India)
# Rakri
