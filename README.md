# Fermi Energy Landing Page

A modern, high-performance landing page built with Next.js 14+ and cutting-edge web technologies for the revolutionary energy startup Fermi Energy.

## 🚀 Tech Stack

### Core Framework & Styling
- **Next.js 14.2.5** with App Router (JavaScript, no TypeScript)
- **React 18** for component architecture
- **Tailwind CSS 3.4.1** for utility-first styling
- **shadcn/ui** for consistent, accessible UI components

### Animation & Interactions
- **GSAP (GreenSock) 3.12.2** for advanced animations and scroll triggers
- **Framer Motion 11.3.8** for React-specific animations
- **Lenis 1.3.8** for buttery smooth scrolling experiences

### Additional Utilities
- **Lucide React 0.408.0** for consistent iconography
- **clsx + tailwind-merge** for conditional styling
- **class-variance-authority** for component variants

### Development Tools
- **ESLint + Prettier** for code quality and formatting
- **PostCSS + Autoprefixer** for CSS processing
- **Vercel** deployment configuration

## 📁 Project Structure

```
Fermi-Landing-page/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles with Tailwind & shadcn/ui variables
│   │   ├── layout.js          # Root layout with font and providers
│   │   └── page.js            # Home page with sections
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   │   └── button.js      # Reusable button component
│   │   ├── hero.js            # Hero section with GSAP animations
│   │   ├── navbar.js          # Navigation with mobile menu
│   │   ├── section.js         # Reusable section wrapper
│   │   └── smooth-scroll-provider.js # Lenis integration
│   ├── hooks/                 # Custom React hooks
│   │   ├── useGSAP.js         # GSAP animation hook with cleanup
│   │   └── useSmoothScroll.js # Lenis smooth scrolling hook
│   └── lib/
│       └── utils.js           # Utility functions (cn helper)
├── .babelrc.json              # Babel config for ESLint only
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier formatting rules
├── components.json            # shadcn/ui configuration
├── jsconfig.json              # Path aliases configuration
├── next.config.js             # Next.js optimization settings
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind + shadcn/ui theme
└── vercel.json                # Vercel deployment config
```

## 🛠️ Getting Started

### Prerequisites
- **Node.js 18+** (Latest LTS recommended)
- **npm** or **yarn** package manager
- **Git** for version control

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Fermi-Landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server (hot reload)

# Production
npm run build        # Build optimized production bundle
npm start           # Start production server

# Code Quality
npm run lint        # Check code with ESLint
npm run lint:fix    # Auto-fix ESLint issues
npm run format      # Format code with Prettier
```

## 🎨 Key Features & Architecture

### 1. Hero Section (`src/components/hero.js`)
- **GSAP Timeline Animation**: Staggered entrance animations
- **ScrollTrigger Integration**: Scroll-based reveal effects
- **Responsive Grid Layout**: Statistics showcase
- **Call-to-Action Buttons**: Primary and secondary actions
- **Performance Optimized**: useGSAP hook with proper cleanup

```javascript
// Example GSAP animation usage
useGSAP(element => {
  const tl = gsap.timeline()
  tl.from('.hero-title', { y: 100, opacity: 0, duration: 1 })
    .from('.hero-subtitle', { y: 50, opacity: 0, duration: 0.8 }, '-=0.5')
}, [])
```

### 2. Navigation (`src/components/navbar.js`)
- **Fixed Positioning**: Stays visible during scroll
- **Mobile-First Design**: Hamburger menu for mobile
- **Backdrop Blur Effect**: Modern glassmorphism styling
- **Smooth Scroll Links**: Animated navigation to sections
- **React State Management**: Mobile menu toggle

### 3. Smooth Scrolling (`src/hooks/useSmoothScroll.js`)
- **Lenis Integration**: Hardware-accelerated smooth scrolling
- **Custom Easing**: Optimized easing function
- **Memory Management**: Proper cleanup on unmount
- **Performance Optimized**: RequestAnimationFrame loop

### 4. Animation System
- **Custom useGSAP Hook**: React-friendly GSAP integration
- **Context API**: Proper GSAP context for cleanup
- **ScrollTrigger**: Advanced scroll-based animations
- **Framer Motion**: Alternative animation library
- **Performance**: Memoized animations to prevent re-renders

## 🎯 Design System

### Color Palette (CSS Variables)
```css
/* Light Theme */
--background: 0 0% 100%;        /* Pure white */
--foreground: 222.2 84% 4.9%;   /* Nearly black */
--primary: 222.2 47.4% 11.2%;   /* Deep blue */
--accent: 210 40% 96%;          /* Light blue-gray */

/* Dark Theme Support */
--background: 222.2 84% 4.9%;   /* Dark background */
--foreground: 210 40% 98%;      /* Light text */
```

### Typography
- **Font Family**: Inter (optimized Google Font)
- **Font Loading**: Next.js font optimization
- **Scale**: Tailwind's default type scale
- **Line Heights**: Optimized for readability

### Responsive Breakpoints
```javascript
// Tailwind CSS breakpoints
sm: '640px',   // Mobile landscape
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
'2xl': '1536px' // Extra large
```

## ⚡ Performance Optimizations

### Next.js 14+ Features
- **App Router**: Latest routing paradigm
- **SWC Compiler**: Rust-based compiler (faster than Babel)
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Dead code elimination

### Build Optimizations
```javascript
// next.config.js optimizations
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

### Animation Performance
- **GSAP**: Hardware-accelerated animations
- **Transform Properties**: GPU-accelerated CSS properties
- **RequestAnimationFrame**: Smooth 60fps animations
- **Cleanup**: Proper animation cleanup to prevent memory leaks

## 🧩 Component Architecture

### shadcn/ui Integration
The project uses shadcn/ui for consistent, accessible components:

```bash
# Add new shadcn/ui components
npx shadcn-ui@latest add <component-name>
```

### Custom Components
- **Reusable**: All components accept props for customization
- **Accessible**: Built with accessibility in mind
- **Performant**: Optimized for minimal re-renders
- **Styled**: Tailwind CSS with design tokens

### Hook Pattern
```javascript
// Custom hooks for reusable logic
export function useGSAP(animation, dependencies = []) {
  // GSAP integration with cleanup
}

export function useSmoothScroll() {
  // Lenis smooth scrolling setup
}
```

## 🔧 Development Workflow

### Code Quality Standards
1. **ESLint**: Enforces Next.js and React best practices
2. **Prettier**: Consistent code formatting
3. **Husky** (optional): Pre-commit hooks
4. **TypeScript** (optional): Can be added for type safety

### Git Workflow
```bash
# Feature development
git checkout -b feature/new-section
git add .
git commit -m "feat: add new section component"
git push origin feature/new-section
```

### Debugging Tips
- **React DevTools**: Component tree inspection
- **GSAP DevTools**: Animation timeline debugging
- **Chrome DevTools**: Performance profiling
- **VS Code Extensions**: Tailwind IntelliSense, ES7+ React snippets

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Manual Deployment
```bash
# Build production bundle
npm run build

# The output will be in .next/ directory
# Upload to your hosting provider
```

### Environment Variables
Create `.env.local` for environment-specific variables:
```bash
NEXT_PUBLIC_API_URL=https://api.fermienergy.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 📚 Learning Resources

### Next.js 14+
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Performance Optimization](https://nextjs.org/docs/app/building-your-application/optimizing)

### Animation Libraries
- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)

### Styling
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style Guidelines
- Use **functional components** with hooks
- Follow **React best practices**
- Write **self-documenting code**
- Add **comments for complex logic**
- Test **responsive design** on multiple devices

## 📞 Support

For questions about this implementation:
- **Documentation**: Check inline code comments
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions

---

**Built with ❤️ for Fermi Energy - Powering the Future**
- **CSS Variables** for consistent theming
- **shadcn/ui** component patterns
- **Responsive breakpoints** for mobile-first design

## 🚀 Deployment

The project is pre-configured for **Vercel** deployment:

```bash
# Deploy to Vercel
vercel

# Or connect your GitHub repository to Vercel for automatic deployments
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [GSAP](https://gsap.com/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.studiofreight.com/)

## 🔧 Customization

### Adding shadcn/ui Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

### Custom Animations

Use the provided hooks for consistent animation patterns:

```javascript
import { useGSAP } from '@/hooks/useGSAP'

const MyComponent = () => {
  const ref = useGSAP(element => {
    gsap.from(element, { opacity: 0, y: 50, duration: 1 })
  })

  return <div ref={ref}>Animated content</div>
}
```

## 📝 Notes

- The project uses JavaScript (not TypeScript) as requested
- All animations are optimized for performance
- Responsive design is mobile-first
- SEO optimizations are built-in with Next.js

Ready to build an amazing landing page! 🎉
