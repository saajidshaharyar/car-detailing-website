# The Neighbourhood Detailer

A web application designed to provide my personal car detailing business with a modern, responsive website that informs customers and boosts online presence.

---

## 📌 Description

### Problem Statement
Local car detailing businesses often lack a professional, digital presence — missing out on customer engagement and trust.

### Why This Program Solves the Problem
This project provides a fully customizable website template built with modern technologies (React, TypeScript, Vite, API Backend routes), giving small businesses an easy-to-maintain, attractive platform to showcase their services.

### Why Users Should Care
A visually appealing, responsive, and structured website helps build credibility and increases conversion rates for local service businesses, especially in highly competitive urban markets like Toronto.

---

## 💻 Tech Stack

- **React.js** – Frontend framework
- **TypeScript** – Type-safe JavaScript
- **Vite** – Fast bundler and dev server
- **Tailwind CSS** – Utility-first styling (Custom Fonts)
- **Firebase Firestore** – Booking data storage
- **Nodemailer** – Automated email confirmations
- **Framer Motion** – Smooth animations
- **React-Router** – Page navigation

---

## 🚀 Features

- Hero section with text and video background
- Header has animated text
- Dynamic pricing tiers (Standard, Advanced, Premium)
- Fully functional **booking form** with:
  - Time slot logic (blocks 3-hour ranges)
  - Friday lockout
  - Firestore-based availability check
  - Email confirmations to both customer and business
- Modal-based feature highlights
- Dark/light theme toggle
- Responsive before/after gallery with modal + keyboard nav
- Mobile-first, polished design

---

## ⚙️ Usage

1. Clone the repository.

2. Install dependencies with npm install or yarn.

3. Create a .env.local file with the required environment variables for email sending (e.g., EMAIL_SENDER, EMAIL_APP_PASS) and any other API keys.

4. Run the development server locally with npm run dev or yarn dev. This will start both the frontend and your API routes.

5. Test the booking form and email functionality locally.

6. Deploy to Vercel or your preferred hosting provider with environment variables configured in the deployment settings.

7. Connect your custom domain and verify email features are working in production.
```bash
npm install       # Install dependencies
npm run dev       # Start local development server
