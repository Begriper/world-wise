# 🌍 WorldWise

An interactive world travel tracker built with **React 18**, **Vite**, and **Leaflet**. This app allows you to visually track the cities and countries you've visited by clicking on a map, adding notes, and viewing all your travel memories.

### 🌐 Live Preview

[https://world-wise-web-test.netlify.app](https://world-wise-web-test.netlify.app)

---

## 🚀 Features

- ✅ **Interactive world map** with city pins using [Leaflet](https://leafletjs.com/)
- 📍 **Click on a map location** to add a city you've visited
- 🕜 **Date and note input** for each visit
- 📅 View **city list and visit dates**
- 🌏 **Country categorization** based on visited cities
- 📖 Routing between views (Pricing, Product, Login, Map)
- 🎡 **Geolocation support** to find and add your current position
- ✏️ **Local editing and deleting** of cities
- 🌎 **Reverse geocoding** via [BigDataCloud API](https://api.bigdatacloud.net/data/reverse-geocode-client)
- 🌐 Netlify Functions support (experimental)

---

## 🛁 Pages & Screenshots

- `/` - Home: Introduction screen
- `/pricing` - Pricing info
- `/product` - Product description
- `/login` - Login screen (dummy)
- `/app/cities` - Main screen with visited cities & map
- `/app/countries` - List of countries from visited cities
- `/app/cities/:id` - Detail view of a selected city

_(See screenshots below)_

---

## 🛀 Tech Stack

- **React 18** (with Context & Hooks)
- **Vite** for blazing fast dev & build
- **Leaflet & React-Leaflet** for maps
- **React Router v6** for routing
- **DatePicker** for user-friendly date selection
- **Netlify** for deployment & functions
- **JSON as local DB** with optional Netlify Functions (`create-city.js`, `delete-city.js`)

---

## 📂 Project Structure

```
11-worldwise/
├── public/
│   └── data/
│       └── cities.json       # Local JSON DB
├── src/
│   ├── components/           # Reusable components
│   ├── contexts/             # Global state management
│   ├── hooks/                # Custom hooks
│   ├── netlify_functions/    # Serverless backend functions (optional)
│   └── pages/                # Main page structure
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚧 How to Run Locally

```bash
npm install
npm run dev
```

> Make sure your `cities.json` is located at `public/data/cities.json`

---

## ⚡ Deployment

Deployed on **Netlify**.

For proper function support:

- Add your `netlify_functions/` in Netlify dashboard under _Functions_
- Use absolute paths `/data/cities.json` to read static files

---

## 🚀 Inspiration

This project is part of the course:
**"The Ultimate React Course"** by _Jonas Schmedtmann_

---

Created by **František Stolar** ✨
