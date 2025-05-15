# AeroTech Landing Page

![License](https://img.shields.io/github/license/JanJus7/AeroTech-LandingPage)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-%5E13.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-%5E3.0-blueviolet)
![Material UI](https://img.shields.io/badge/MUI-%5E5.0-ff69b4)

**AeroTech Landing Page** is a high-performance, fully responsive website for a fictional aerospace company. It includes real-time flight tracking via FlightRadar API (RapidAPI), a working contact form powered by EmailJS, and a modern UI built with Next.js, Tailwind CSS, and Material UI.

---

## 🔗 Live Demo

You can view the deployed project here:  
👉 [https://aero-tech-landing-page.vercel.app/](https://aero-tech-landing-page.vercel.app/)

The project is hosted on [Vercel](https://vercel.com), with API keys securely stored in environment variables. It runs 24/7 in the cloud with automatic deployment on every commit.

---

## For the best experience, click settings and disable popup notifications. It was required to pass the project :)

## ✨ Features

- ✅ Mobile-first, responsive design
- ⚡ Lazy loading for images and components
- ✈️ Real-time display of the 10 most tracked flights
- 💬 Testimonials section styled with Material UI
- 📬 Functional contact form (EmailJS)
- 🔐 API keys stored securely using `.env.local`
- 🎨 Built with Tailwind CSS + CSS Modules
- 🌐 SEO-friendly with server-side rendering (Next.js)

## 🛠 Technologies Used

- **Next.js** – React framework with server-side rendering
- **React** – Component-based UI
- **Tailwind CSS** – Utility-first CSS framework
- **Material UI** – Used in the testimonials section
- **EmailJS** – For sending contact form messages directly from the frontend
- **FlightRadar API (via RapidAPI)** – For live flight tracking data

## ✈️ Real-Time Flight Tracking (FlightRadar API)

AeroTech features a dynamic section that fetches and displays the **Top 10 most tracked aircraft worldwide** in real time, using the FlightRadar API through RapidAPI.

Each flight displays the following details:

- **Callsign** (e.g. `UAE2AY`)
- **Route**: From → To (e.g. `Dubai → Edinburgh`)
- **Aircraft type** (e.g. `Airbus A350-941`)
- **Popularity**: Number of users currently tracking the flight (e.g. `598 users tracking`)

This integration simulates live air traffic monitoring and adds a sense of realism to the landing page.

## 💬 Testimonials

The testimonials section is implemented using **Material UI** components, offering:

- Clean, accessible layout with responsive design
- Styled cards with avatars and user quotes
- Fully reusable and easy to customize

## 📬 Contact Form

A functional contact form is integrated using **EmailJS**. Features:

- Real-time input validation
- Sends messages directly to an email address
- No backend required
- Displays success/error feedback
- All credentials are stored in environment variables

## 🔐 Environment Variables

To use the contact form and flight data API, create a `.env.local` file in the root of the project and add the following variables:

```env
# EmailJS – Contact form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_emailjs_public_key

# RapidAPI – FlightRadar API
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key
