# Sovereign Arena - E-Commerce Storefront

A modern, high-performance e-commerce platform built with Next.js 14, React 18, and Tailwind CSS. Featuring a responsive design, dark theme, and enterprise-grade UI components.

## 🚀 Features

- **Next.js 14 App Router** - Latest React server components and routing
- **Responsive Design** - Mobile-first, works on all devices
- **Dark Theme** - Zinc-950 dark background with accent colors
- **Product Catalog** - Grid layout with product cards, pricing, and categories
- **Shopping Cart** - Real-time cart counter and notifications
- **Tailwind CSS** - Utility-first styling for rapid development
- **TypeScript** - Type-safe development experience
- **Vercel Ready** - Optimized for deployment to Vercel

## 📦 Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Build Tool**: SWC (via Next.js)
- **Linting**: ESLint

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
sovereign-arena/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page with product catalog
│   └── globals.css         # Global Tailwind CSS styles
├── public/                 # Static assets
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
└── README.md               # This file
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Navigation Bar
- Sticky header with Sovereign Arena branding
- Responsive menu for mobile devices
- Cart counter badge with item count

### Product Catalog
- 8 featured products with emoji icons
- Category badges
- Price display in blue accent color
- Hover effects and transitions
- "Add to Cart" buttons

### Dark Theme
- Background: `bg-zinc-950` (#09090b)
- Borders: `border-zinc-800`
- Accents: Blue (#3b82f6) for interactive elements
- Smooth hover transitions and shadows

## 🚀 Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy with one click!

### Environment Variables for Vercel

Add your environment variables in the Vercel dashboard under "Settings" → "Environment Variables"

### PayPal checkout

The pricing tiers use PayPal checkout. Set `NEXT_PUBLIC_PAYPAL_CLIENT_ID` to the
client ID of your PayPal REST app in Vercel's project Settings → Environment
Variables. Use a live app for real payments and a sandbox app for testing. Never
put the PayPal secret in a `NEXT_PUBLIC_` variable. Redeploy after changing this
value because Next.js embeds public environment variables at build time.

If checkout reports that PayPal could not load, check the app client ID and test
without browser content blockers. A successful build alone does not verify a
payment: test approval and capture in PayPal sandbox before accepting payments.
The pricing buttons currently make one-time payments, not recurring subscriptions.

## 🔒 Security

- Built-in security headers with Next.js
- Strict Content Security Policy ready
- Client-side cart management (expandable to backend)
- TypeScript for type safety

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## 📞 Support

For questions or issues, please open a GitHub issue in this repository.

---

**Built with ⚔️ by Sovereign Arena Development Team**
