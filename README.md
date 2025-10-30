# Scalable Task Manager Web App

## Overview
This is a **Full-Stack Task Management Application** built using **React** (frontend) and **Node.js + Express** (backend).

The app allows users to:  
- Register and log in securely  
- Manage personal tasks with **CRUD operations**  
- Authenticate with **JWT tokens** and **bcrypt password hashing**

---

## Features

### Authentication
- User registration and login  
- JWT-based authentication and protected routes  
- Password hashing using **bcrypt**

### Dashboard
- CRUD operations on user-specific tasks  
- Task statuses: `Pending`, `In Progress`, `Completed`  
- Search and filter functionality  
- Fully responsive design

### Backend (Node.js + Express)
- RESTful API structure  
- MongoDB connection using **Mongoose**  
- Error handling and validation  
- Middleware for JWT token verification

### Frontend (React + TailwindCSS)
- Single Page Application (SPA) with **protected routes**  
- Responsive Navbar with hamburger menu for mobile  
- Token-based authentication stored in **localStorage**  
- User-friendly UI for task management

---

## Installation

### 1. Clone the repository


  :          Backend Setup ############

cd backend

npm install

nodemon server.js / npm run dev

  :            Create a .env file in backend/:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

   :             Frontend Setup

cd ../frontend

npm install

npm run dev

Scaling Frontend-Backend Integration for Production

1 Deploy Frontend & Backend Separately

Backend on Render, Railway, or AWS EC2

Frontend on Vercel or Netlify

2 Use Environment Variables

Store API URLs securely in .env files for dev and prod

3 Enable HTTPS and Configure CORS

Secure communication via HTTPS

Proper CORS configuration

4 Token Expiry & Refresh

Implement token expiration and refresh tokens

5 Optimize Database

MongoDB indexes and pagination for large datasets

6 Performance Optimization

Lazy-load React routes/components

Use caching (Redis/CDN) if needed

7 Containerization (Optional)

Use Docker to containerize frontend/backend

Makes scaling and CI/CD easier