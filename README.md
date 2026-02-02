# 🚀 React Router – All Experiments (SPA Navigation)

## 📌 Project Title

**Implementation of Single Page Application Navigation using React Router DOM**

---

## 📖 Project Description

This project demonstrates the use of **React Router DOM** to build a **Single Page Application (SPA)** with multiple navigation techniques.
All experiments focus on routing concepts such as:

* BrowserRouter
* Routes & Route
* Link Component
* Navbar-based navigation
* Multi-page SPA without page reload

---

## 🧪 List of Experiments

### 🔹 Experiment 1: Dashboard & Profile Routing

### 🔹 Experiment 2: Home, About & Contact Pages

### 🔹 Experiment 3: SPA Navigation using Link Component

---

## 🧪 Experiment 1: Routing with Dashboard and Profile

### 🎯 Aim

To implement routing between **Dashboard** and **Profile** components using React Router.
<img src = "RouteExp2/public/Caro_1764425644364_1.png" alt = "page failed to load">
<img src = "RouteExp2/public/Screenshot 2026-02-02 095459.png" alt = "page failed to load">


### 🛠 Software / Tools Required

* React JS
* React Router DOM
* Node.js
* VS Code

### 📂 Folder Structure

```
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Dashboard.jsx
 │   └─ Profile.jsx
 ├─ App.jsx
 └─ index.js
```

### 🧩 Description

* `BrowserRouter` wraps the entire application.
* `Navbar` is visible on all pages.
* Navigation paths:

  * `/dashboard` → Dashboard component
  * `/profile` → Profile component

### ✅ Result

Successful navigation between Dashboard and Profile without reloading the page.

---

## 🧪 Experiment 2: Multi-Page Navigation (Home, About, Contact)

### 🎯 Aim

To create multiple pages using React Router for better page organization.
<img src = "RouteExp3/public/Screenshot 2026-02-02 095552.png" alt = "page failed to load">

### 🛠 Software / Tools Required

* React JS
* React Router DOM

### 📂 Folder Structure

```
src/
 ├─ components/
 │   └─ Navbar.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ About.jsx
 │   └─ Contact.jsx
 ├─ App.jsx
 └─ index.js
```

### 🧩 Description

* Pages are separated into the `pages` folder.
* Routes used:

  * `/` → Home
  * `/about` → About
  * `/contact` → Contact

### ✅ Result

Smooth multi-page navigation within a single-page application.

---

## 🧪 Experiment 3: SPA Navigation using Link Component

### 🎯 Aim

To implement navigation using the **Link** component instead of anchor tags.
<img src = "RouterExp/public/Screenshot 2026-02-02 095630.png" alt = "page failed to load">

### 🛠 Software / Tools Required

* React JS
* React Router DOM
* CSS

### 📂 Folder Structure

```
src/
 ├─ components/
 │   ├─ Home.jsx
 │   ├─ About.jsx
 │   └─ Contact.jsx
 ├─ App.css
 ├─ App.jsx
 └─ index.js
```

### 🧩 Description

* `Link` component enables client-side navigation.
* Prevents full page reload.
* Navbar is styled using CSS.
* Enhances performance and user experience.

### ✅ Result

A fully functional SPA with responsive and smooth navigation.

---

## ▶️ Procedure (Common for All Experiments)

1. Install React Router

```bash
npm install react-router-dom
```

2. Start React server

```bash
npm start
```

3. Open browser

```
http://localhost:3000
```

---

## 📌 Advantages of React Router

* No page refresh
* Faster navigation
* Clean URL structure
* Better user experience
* Easy component-based routing

---

## ✅ Final Conclusion

All three experiments successfully demonstrate the implementation of routing in a React Single Page Application.
React Router DOM provides a powerful and flexible way to manage navigation, making applications faster, cleaner, and more user-friendly.

---

### ✍️ Developed By

**Raveena Choudhary**
**Subject:** Web Development Lab

