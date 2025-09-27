# 📦 Online Service Platform – MERN Stack Project

This is a **dynamic web application** built with the **MERN Stack** (MongoDB, Express, React + Vite, Node.js), styled using **Tailwind CSS** and **DaisyUI**. It features separate **User** and **Admin** pages, offering services for those starting an online **stationery shop**, providing **online ticketing**, **form filling**, **wedding arrangements**, **ID card making**, and more.

## 🛠️ Tech Stack

- **Frontend**: React (Vite) + Tailwind CSS + DaisyUI
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**: JWT / Token-based
- **Routing**: React Router DOM
- **State Management**: useState, useEffect, Context API (or Redux if used)
- **Role-based Access**: Admin & User

---

## 📚 Features

### 👥 User Features
- Browse available services (tickets, ID creation, etc.)
- Fill out and submit forms
- Place requests for wedding/event arrangements
- Submit and track stationery orders
- View order or request status

### 🛡️ Admin Features
- Dashboard with analytics (optional)
- Manage users and their roles
- Add/Edit/Delete available services
- View all service requests and forms
- Mark requests as complete or in-progress

---

## 📂 Folder Structure (Basic Overview)
```bash
project-root/
│
├── Admin/                  # Vite React App
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   └── tailwind.config.js
|
├── client/                  # Vite React App
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── context/
│   │   └── App.jsx
│   └── tailwind.config.js
│
├── server/                  # Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
│
└── README.md

---
##Installation
git clone https://github.com/Avanish9090/Online_services.git
cd Online_services

cd client
npm install
npm run dev


cd admin
npm install
npm run dev

cd server
npm install
node server.js  # or use nodemon

PORT=5000
MONGO_URI=your_mongodb_connection_string







