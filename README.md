# 🛒 iStore — Production-Style MERN E-commerce Platform

> A scalable, full-stack e-commerce system built with the MERN stack, designed with production-grade architecture, modular services, and real-world integrations.

---

## 📌 Table of Contents

* [Overview](#-overview)
* [Live Demo](#-live-demo)
* [Key Features](#-key-features)
* [Tech Stack](#-tech-stack)
* [System Architecture](#-system-architecture)
* [API Design](#-api-design-apiv1)
* [Engineering Decisions](#-engineering-decisions)
* [Project Structure](#-project-structure)
* [Setup Guide](#-setup-guide)
* [Environment Variables](#-environment-variables)
* [Screenshots](#-screenshots)
* [Future Enhancements](#-future-enhancements)
* [Author](#-author)

---

## 🚀 Overview

iStore is a **full-stack e-commerce platform** built to simulate real-world product systems. It supports **user workflows, admin operations, secure payments, and scalable backend architecture**.

The project focuses not only on features, but also on:

* clean architecture
* modular services
* API design
* real-world integrations

---

## 🌐 Live Demo

https://drive.google.com/file/d/1ZsT9cq7dSYEm3h1pmxqnRpRwCChwJtmD/view?usp=sharing

---

## ✨ Key Features

### 🧑‍💻 User Capabilities

* Product browsing and search
* Product details with reviews
* Add to cart and secure checkout
* User authentication & profile management
* Order tracking

### 🛠️ Admin Capabilities

* Manage products (CRUD)
* Manage users and orders
* Monitor platform activity

### ⚙️ System Capabilities

* RESTful API design
* JWT-based authentication
* Payment processing (Stripe / Razorpay)
* Image storage via Cloudinary
* Email notifications via SMTP
* Error handling and validation

---

## 🧱 Tech Stack

| Layer    | Technology                         |
| -------- | ---------------------------------- |
| Frontend | React, Redux Toolkit, React Router |
| Backend  | Node.js, Express.js                |
| Database | MongoDB Atlas                      |
| Payments | Stripe / Razorpay                  |
| Media    | Cloudinary                         |
| Email    | SMTP (Gmail / Mailtrap)            |

---

## 🏗️ System Architecture

![Architecture](<img width="891" height="663" alt="Screenshot 2026-02-24 193314" src="https://github.com/user-attachments/assets/95d3cd52-22f2-421e-ac37-b80a42e2a701" />)

### Architecture Breakdown

* **Client Layer**

  * React SPA with Redux for state management
  * Handles UI, routing, and API interactions

* **Delivery Layer**

  * CDN for static assets
  * Reverse proxy / load balancing (conceptual)

* **Backend Layer**

  * Node.js + Express REST API
  * Middleware-based request handling
  * JWT authentication layer

* **Service Layer**

  * Auth & Users
  * Product Catalog
  * Cart & Orders
  * Payment Adapter
  * Email Service

* **External Integrations**

  * Stripe / Razorpay → payment processing
  * Cloudinary → media storage
  * SMTP → email notifications

* **Data Layer**

  * MongoDB Atlas
  * Indexed collections (users, products, orders)
  * Text indexing for search

---

## 🔗 API Design (/api/v1)

![API](<img width="1709" height="682" alt="Screenshot 2026-02-24 192839" src="https://github.com/user-attachments/assets/0c4b720b-8e11-4bcb-8cd5-e4dcfcb91915" />)

### Domain-Oriented API Structure

#### 🔐 Auth & Users

```bash
POST   /register
POST   /login
GET    /me
PUT    /password/update
POST   /password/forgot
POST   /password/reset/:token
```

#### 📦 Products

```bash
GET    /products
GET    /product/:id
PUT    /review
ADMIN  /admin/product/new
ADMIN  /admin/products
```

#### 📑 Orders

```bash
POST   /order/new
GET    /order/:id
GET    /orders/me
ADMIN  /admin/orders
```

#### 💳 Payments

```bash
POST   /payment/process
GET    /payment/process
```

---

## ⚡ Engineering Decisions

### 🔹 1. REST API with Versioning

* Used `/api/v1` for forward compatibility
* Enables smooth evolution of APIs

### 🔹 2. JWT Authentication

* Stateless authentication
* Middleware-based validation
* Scalable across services

### 🔹 3. Modular Service Design

* Separation of concerns (Auth, Products, Orders, Payments)
* Improves maintainability and extensibility

### 🔹 4. External Service Integration

* Cloudinary → offloads media handling
* Stripe → secure payment processing
* SMTP → decoupled email workflows

### 🔹 5. MongoDB Indexing

* Indexed fields: category, price
* Text search on product name & description

---

## 📂 Project Structure

```bash
istore-Mern/
├── frontend/        # React application (UI + state management)
├── server/          # Node.js backend (API + business logic)
├── assets/          # Architecture diagrams
├── README.md
```

---

## 🛠️ Setup Guide

### 1. Clone Repository

```bash
git clone https://github.com/LokeshKhandelwal/istore-Mern.git
cd istore-Mern
```

---

### 2. Backend Setup

```bash
cd server
npm install
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create `.env` inside `server/`

```env
MONGO_URI=
JWT_SECRET=
STRIPE_API_KEY=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
SMTP_EMAIL=
SMTP_PASSWORD=
```

---

## 📸 Screenshots

*Add screenshots for:*

* Homepage
* Product page
* Cart
* Checkout
* Admin dashboard

---

## 🚧 Future Enhancements

* Redis caching for performance optimization
* Elasticsearch for advanced search
* Microservices architecture
* CI/CD pipeline (GitHub Actions)
* Monitoring & logging (Prometheus / Grafana)

---

## 👨‍💻 Author

**Lokesh Khandelwal**
Full-Stack Developer | React • TypeScript • Node.js • AI

🌐 Portfolio: https://www.lokeshkhandelwal.com
🔗 LinkedIn: https://linkedin.com/in/lokesh1911e

---

## ⭐ Final Note

This project demonstrates:

* full-stack engineering
* system design thinking
* real-world integration experience
* scalable architecture approach

---

