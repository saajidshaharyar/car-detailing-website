# PrestigeOnWheelz Auto-Detailing

A web application designed to provide my personal car detailing business with a modern, responsive website that informs customers and boosts online presence.

---

## 📌 Description

### Problem Statement
Local car detailing businesses often lack a professional, digital presence — missing out on customer engagement and trust.

### Why This Program Solves the Problem
This project provides a fully customizable website template built with modern technologies (React, TypeScript, Vite), giving small businesses an easy-to-maintain, attractive platform to showcase their services.

### Why Users Should Care
A visually appealing, responsive, and structured website helps build credibility and increases conversion rates for local service businesses, especially in highly competitive urban markets like Toronto.

---

## 💻 Tech Stack

- **React.js** – Frontend framework
- **TypeScript** – Type-safe JavaScript
- **Vite** – Fast bundler and dev server
- **Tailwind CSS** – Utility-first styling
- **Firebase Firestore** – Booking data storage
- **EmailJS** – Automated email confirmations
- **Framer Motion** – Smooth animations
- **React-Router** – Page navigation

---

## 🚀 Features

- Hero section with animated text and video background
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

## 🛠️ Installation & Development Timeline

### ✅ May 18–19
- Vite + TypeScript setup
- Folder structure under `components/Layout` and `components/Pages`
- Routing with `react-router-dom`
- Header/footer + light/dark mode
- Initial Git commit

### ✅ May 20–21
- Homepage completed (video hero, CTA, pricing)
- Reusable components (`Button`, `PricePlan`)
- Code commented and cleaned

### ✅ May 22–23
- About, Gallery, and Contact pages finalized
- Embedded Google Maps on Contact page
- Gallery slider and FAQ planning started

### ✅ June 24–26
- Firebase integration for booking availability
- Time slot gray-out and availability logic complete
- EmailJS integration added with `.env.local` key protection
- Final environment-safe push to GitHub

---

## ⚙️ Usage

```bash
npm install       # Install dependencies
npm run dev       # Start local development server
