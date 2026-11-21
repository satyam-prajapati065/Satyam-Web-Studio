# SATYAM WEB STUDIO – Premium Freelancer Portfolio & Website Showcase Platform

> **"Your Vision. My Code. Your Digital Success."**  
> A production-ready, full-stack digital agency portfolio and interactive website showcase platform built with the MERN stack for **Satyam Prajapati**.

---

## 🌟 Executive Overview

**Satyam Web Studio** is not an ordinary developer portfolio. It functions as a premium digital agency platform and interactive website template showcase where potential clients can:
- **Browse 35 Website Categories** (from SaaS and Corporate to E-commerce, Dining, Real Estate, Healthcare, Gyms, and Custom Apps).
- **Test-Drive Interactive Live Demos** featuring dedicated device preview frames (Desktop 100%, Tablet 768px, Mobile 390px, and Fullscreen).
- **Inspect Detailed Technical Specifications**, features, design styles, and tech stacks.
- **Submit Custom Inquiries** with auto-prefilled template references directly into a MongoDB database.
- **Connect Instantly via WhatsApp** and email with one click.
- **Manage Platform Content** through a password-protected JWT-authenticated Admin Dashboard (CRUD for templates, projects, services, pricing, client testimonials, and site settings).

---

## 🎨 Design Philosophy: White & Light Color Theme

In adherence to the design direction, the entire user interface is styled in a **White & Light Theme**:
- **Primary Background:** `#FFFFFF`
- **Secondary Background:** `#F8FAFC`
- **Soft Blue Background:** `#EFF6FF`
- **Soft Lavender Background:** `#F5F3FF`
- **Primary Text:** `#172033` (crisp slate-navy)
- **Secondary Text:** `#64748B` (muted slate)
- **Primary Accent:** `#3B82F6` (vibrant electric blue)
- **Secondary Accent:** `#8B5CF6` (lavender/purple)
- **Borders & Dividers:** `#E2E8F0`

---

## 🛠️ Technology Stack (MERN Only)

### Frontend:
- **React.js (v18+)** with **Vite** for sub-second build times.
- **React Router DOM (v6)** for client-side SPA routing.
- **Modular CSS3** with design tokens (`variables.css` and `global.css`).
- **Lucide React** for modern UI icons.
- **Axios** with request/response interceptors for JWT token handling.
- **Canvas Confetti** for delightful inquiry submission celebration.

### Backend:
- **Node.js & Express.js** RESTful API architecture.
- **MongoDB & Mongoose** object modeling.
- **JWT (JSON Web Tokens)** for stateless administrative authentication.
- **bcryptjs** for 10-round salted password hashing.
- **Multer** for file upload processing and image verification.
- **CORS & dotenv** for secure cross-origin resource sharing and environment management.

---

## 📂 Project Architecture

```
satyam-web-studio/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx          # Sticky white navbar with mobile drawer
│   │   │   │   ├── Footer.jsx          # Agency footer with direct channels
│   │   │   │   ├── DeviceFrame.jsx     # Responsive Desktop/Tablet/Mobile switcher
│   │   │   │   ├── Modal.jsx           # Clean reusable modal dialog
│   │   │   │   └── WhatsAppButton.jsx  # Floating WhatsApp direct click-to-chat
│   │   │   ├── home/
│   │   │   │   ├── Hero.jsx            # Headline, code terminal visual & badges
│   │   │   │   ├── TrustSkills.jsx     # Production technology badges
│   │   │   │   ├── CategoriesShowcase.jsx # 35-category showcase
│   │   │   │   ├── FeaturedTemplates.jsx  # Featured template grid
│   │   │   │   ├── ServicesPreview.jsx    # Professional service cards
│   │   │   │   ├── WhyChooseMe.jsx        # 6 core developer pillars
│   │   │   │   ├── WorkProcess.jsx        # 5-step transparent workflow
│   │   │   │   ├── PricingPreview.jsx     # Transparent pricing tiers
│   │   │   │   ├── TestimonialsSection.jsx # Conditionally rendered genuine reviews
│   │   │   │   └── ContactSection.jsx     # Full inquiry form + WhatsApp link
│   │   │   └── demos/
│   │   │       ├── SaaSDemo.jsx        # Interactive B2B SaaS with pricing switch
│   │   │       ├── EcommerceDemo.jsx   # Storefront with cart drawer & quick-view
│   │   │       ├── RestaurantDemo.jsx  # Chef menu & live table reservation
│   │   │       ├── RealEstateDemo.jsx  # Buy/Rent filter & tour scheduling
│   │   │       ├── HealthcareDemo.jsx  # Doctor roster & appointment booking
│   │   │       ├── CorporateDemo.jsx   # Enterprise consulting & budget slider
│   │   │       ├── DashboardDemo.jsx   # Real-time analytics charts & orders
│   │   │       └── VersatileDemo.jsx   # Universal dynamic engine for 28+ categories
│   │   ├── context/
│   │   │   └── AuthContext.jsx         # Global admin auth state
│   │   ├── layouts/
│   │   │   ├── MainLayout.jsx          # Public layout with Navbar, Footer & WhatsApp
│   │   │   └── AdminLayout.jsx         # Sidebar admin dashboard layout
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── AboutPage.jsx           # Satyam Prajapati profile & philosophy
│   │   │   ├── TemplatesPage.jsx       # Search & 35-category filter library
│   │   │   ├── TemplateDetailPage.jsx  # Spec sheet & "I Want a Website Like This"
│   │   │   ├── LiveDemoPage.jsx        # Device frame interactive runner
│   │   │   ├── ServicesPage.jsx        # Full service breakdown & policy notice
│   │   │   ├── ProjectsPage.jsx        # Client case studies
│   │   │   ├── PricingPage.jsx         # Pricing matrix & FAQ
│   │   │   ├── ContactPage.jsx         # Standalone inquiry portal
│   │   │   ├── NotFoundPage.jsx        # 404 handler
│   │   │   └── admin/
│   │   │       ├── AdminLogin.jsx
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── AdminTemplates.jsx   # Full CRUD for showcase templates
│   │   │       ├── AdminInquiries.jsx   # Pipeline manager for client requests
│   │   │       ├── AdminProjects.jsx    # Client case studies manager
│   │   │       ├── AdminServices.jsx    # Service offerings manager
│   │   │       ├── AdminPricing.jsx     # Pricing tiers manager
│   │   │       ├── AdminTestimonials.jsx # Genuine client review approval
│   │   │       └── AdminSettings.jsx    # WhatsApp, phone, email & brand info
│   │   ├── services/
│   │   │   └── api.js                  # Axios instance with JWT interceptor
│   │   ├── styles/
│   │   │   ├── variables.css           # White & Light Theme design tokens
│   │   │   ├── global.css              # Core typography, buttons & layout classes
│   │   │   ├── navbar.css
│   │   │   └── footer.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── config/
│   │   └── db.js                       # Mongoose database connector
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── templateController.js
│   │   ├── categoryController.js
│   │   ├── projectController.js
│   │   ├── serviceController.js
│   │   ├── inquiryController.js
│   │   ├── testimonialController.js
│   │   ├── pricingController.js
│   │   └── settingsController.js
│   ├── middleware/
│   │   ├── authMiddleware.js           # JWT verification
│   │   ├── uploadMiddleware.js         # Multer image validation
│   │   └── errorHandler.js             # JSON 404 & 500 error handler
│   ├── models/
│   │   ├── Admin.js
│   │   ├── Category.js
│   │   ├── Template.js
│   │   ├── Project.js
│   │   ├── Service.js
│   │   ├── Inquiry.js
│   │   ├── Testimonial.js
│   │   ├── Pricing.js
│   │   └── SiteSettings.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── templateRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── serviceRoutes.js
│   │   ├── inquiryRoutes.js
│   │   ├── testimonialRoutes.js
│   │   ├── pricingRoutes.js
│   │   └── settingsRoutes.js
│   ├── seeds/
│   │   ├── seedData.js                 # 35 categories, templates, services, pricing
│   │   └── seed.js                     # Seed script
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── package.json
└── README.md
```

---

## ⚡ Quick Start & Local Setup

### 1. Prerequisites
- Node.js (v18 or higher)
- MongoDB (Local instance or MongoDB Atlas connection string)

### 2. Environment Configuration
Create `server/.env` (or copy from `server/.env.example`):
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/satyam_web_studio
JWT_SECRET=satyam_web_studio_super_secret_jwt_key_2026_modern_agency
ADMIN_EMAIL=admin@satyamwebstudio.com
ADMIN_PASSWORD=SatyamStudio@2026
CLIENT_URL=http://localhost:5173
```

### 3. Install Dependencies
```bash
# Install root, client, and server dependencies
npm run install-all
```

### 4. Seed the Database
Populates all 35 categories, sample showcase templates, services, pricing packages, site settings, and the initial superadmin account:
```bash
npm run seed
```

### 5. Launch Development Servers
In separate terminal tabs:
```bash
# Terminal 1: Launch Backend Server (Port 5000)
npm run server

# Terminal 2: Launch Frontend Client (Port 5173)
npm run client
```

Open your browser to: **`http://localhost:5173`**

---

## 🔐 Administrative Access

The admin dashboard provides non-technical control over all platform content:
- **Login URL:** `http://localhost:5173/admin/login`
- **Default Email:** `admin@satyamwebstudio.com`
- **Default Password:** `SatyamStudio@2026`

*Note: Credentials can be updated directly from the Admin Profile settings or via `.env`.*

---

## 🚀 Production Deployment Guide

### A. Deploy Backend (e.g. Render / DigitalOcean / AWS)
1. Push your repository to GitHub.
2. In **Render**, create a **New Web Service** pointing to the repository.
3. Configure:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Set Environment Variables in Render:
   - `MONGO_URI`: Your MongoDB Atlas URI (`mongodb+srv://...`)
   - `JWT_SECRET`: A long random string.
   - `ADMIN_EMAIL` & `ADMIN_PASSWORD`: Your production admin credentials.
   - `CLIENT_URL`: Your production frontend URL (e.g. `https://satyamwebstudio.com`).

### B. Deploy Frontend (e.g. Vercel / Netlify)
1. In **Vercel**, import the repository.
2. Set **Root Directory** to `client`.
3. Set Build Command: `npm run build`
4. Output Directory: `dist`
5. Configure Rewrites/Proxy in `vercel.json` if directing API calls to the Render backend, or set the Axios baseURL in `client/src/services/api.js`.

### C. Connect a Custom Domain (e.g. `satyamwebstudio.com`)
1. In your domain registrar (GoDaddy, Namecheap, Cloudflare, Google Domains):
   - Add an **A Record**: `@` points to the Vercel IP (`76.76.21.21`).
   - Add a **CNAME Record**: `www` points to `cname.vercel-dns.com`.
2. In the Vercel project settings, navigate to **Domains** and enter `satyamwebstudio.com`.
3. SSL certificate will automatically provision within 2 minutes.

---

## 👤 Developer Contact & Credits

- **Developer:** Satyam Prajapati
- **Brand:** Satyam Web Studio
- **Role:** Web Developer | React.js Developer
- **Email:** `satyamprajapati065@gmail.com`
- **WhatsApp:** `+91 95540 79669`
- **Calling Phones:** `+91 95540 79669` / `+91 63071 64317`
- **Location:** Delhi NCR, India
- **GitHub:** https://github.com/satyam-prajapati065
- **LinkedIn:** https://www.linkedin.com/in/satyam-prajapati-94a25831a/
- **Tagline:** *"Your Vision. My Code. Your Digital Success."*
#   S a t y a m - W e b - S t u d i o  
 