# ShoppyGlobe Backend

This is the backend API for the ShoppyGlobe e-commerce application built using **Node.js, Express, MongoDB, and JWT authentication**.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs
- dotenv

---

## 📦 Features
- User Registration & Login (JWT based)
- Product CRUD APIs
- Cart APIs (Add / Update / Delete)
- Protected routes using JWT
- MongoDB integration

---

## 📁 API Routes

### Auth Routes
- POST `/api/auth/register` – Register user
- POST `/api/auth/login` – Login user & get JWT

### Product Routes
- GET `/api/products` – Get all products
- POST `/api/products` – Add product

### Cart Routes (Protected)
- GET `/api/cart`
- POST `/api/cart`
- PUT `/api/cart/:id`
- DELETE `/api/cart/:id`

---

## 🔐 Authentication
Cart routes are protected using JWT.
Send token in headers:

## 📸 API Testing Screenshots

All API endpoints were tested using Thunder Client.

Screenshots are available in the `/screenshots` folder.
