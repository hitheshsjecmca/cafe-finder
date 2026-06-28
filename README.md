# ☕ CafeFinder

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML](https://img.shields.io/badge/HTML5-orange)
![CSS](https://img.shields.io/badge/CSS3-blue)
![AWS](https://img.shields.io/badge/AWS-Location%20Service-FF9900)


CafeFinder is a web application that helps users discover nearby cafes using interactive maps and location-based search. It integrates **Amazon Location Service** to provide real-time cafe search, map visualization, and location-aware recommendations.

---

## 🚀 Features

- 🗺️ Interactive map powered by Amazon Location Service
- 📍 Find nearby cafes using browser geolocation
- 🔍 Search cafes by keyword
- 📌 Click on a cafe to zoom into its location
- ❤️ Save favorite cafes
- 📋 Sidebar displaying cafe information
- 📍 Dynamic map markers for search results
- 🎯 Cafe details panel
- 📱 Responsive and clean user interface

---

## 📸 Screenshots

> Add screenshots here after deployment.

```
/screenshots/home.png
/screenshots/search-results.png
/screenshots/cafe-details.png
```

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Maps & Location
- Amazon Location Service
- MapLibre GL JS

### APIs
- Amazon Places API
- Browser Geolocation API

---

## 📂 Project Structure

```
CafeFinder/
│
├── index.html
├── style.css
├── script.js
├── config.js           # Stores API key (Ignored by Git)
├── .gitignore
├── README.md
└── assets/
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/hitheshsjecmca/cafe-finder.git
```

### 2. Navigate to the project

```bash
cd cafe-finder
```

### 3. Install a local server

```bash
npm install -g serve
```

### 4. Create `config.js`

```javascript
const API_KEY = "YOUR_AMAZON_LOCATION_API_KEY";
```

### 5. Start the project

```bash
npx serve
```

Open:

```
http://localhost:3000
```

---

## 🔐 Environment Setup

The API key is **not included** in this repository.

Create a file named:

```
config.js
```

Add:

```javascript
const API_KEY = "YOUR_API_KEY";
```

This file is ignored using `.gitignore`.

---

## 🧭 How It Works

1. The application loads an interactive map.
2. Browser Geolocation retrieves the user's current location.
3. Amazon Places API searches for nearby cafes.
4. Search results appear as:
   - Sidebar cards
   - Interactive map markers
5. Clicking a cafe:
   - Zooms the map
   - Opens an information popup
   - Displays cafe details
6. Users can save cafes as favorites.

---

## 📌 Current Features

- [x] Amazon Maps Integration
- [x] Browser Geolocation
- [x] Real-time Cafe Search
- [x] Interactive Markers
- [x] Sidebar Search Results
- [x] Cafe Details Panel
- [x] Favorites System
- [x] Near Me Button

---

## 🚧 Upcoming Features

- 🧭 Route Navigation
- ⭐ Ratings & Reviews
- 🔐 User Authentication
- 📱 Mobile Responsive Design
- 🌙 Dark Mode
- 🏷️ Advanced Filters
- 📜 Search History
- 📍 Manual Location Selection

---

## 💡 Challenges Faced

- Integrating Amazon Location Service APIs
- Managing API keys securely using `.gitignore`
- Handling browser geolocation permissions
- Rendering dynamic markers from API responses
- Synchronizing map interactions with sidebar updates

---

## 📖 Learning Outcomes

This project helped me learn:

- REST API integration
- Asynchronous JavaScript (`fetch`, `async/await`)
- Browser Geolocation API
- Interactive mapping using MapLibre GL JS
- Working with Amazon Web Services (AWS)
- DOM manipulation
- Dynamic UI rendering

---

## 👨‍💻 Author

**Hithesh**

- GitHub: https://github.com/hitheshsjecmca

---

## 📄 License

This project is developed for learning and educational purposes.
