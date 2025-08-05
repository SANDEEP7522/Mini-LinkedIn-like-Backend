# 📡 Mini-LinkedIn-like Backend

This is the backend for the **Mini LinkedIn-like** application. It handles user authentication, post management, profile handling, and other core features of a professional networking platform.

---
## 📦 Installation

```bash
git clone https://github.com/SANDEEP7522/Mini-LinkedIn-like-Backend/commits/main/
cd mini-linkedin-backend
npm install
PORT=8080
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```


## 🚀 Tech Stack

- **Node.js** + **Express.js** – Backend server
- **MongoDB** + **Mongoose** – Database
- **JWT** – Authentication
- **bcrypt** – Password hashing
- **dotenv** – Environment variable management
- **CORS** – Security & logging
- **Dev Tools:** Postman, dotenv

---

## 📁 Folder Structure




## 🚀 Features

- Create Post (Text + Optional Image)
- Upload Images to Cloudinary
- Get All Posts (with author & timestamp)
- Get Single Post by ID
- Auth protected routes using JWT
- MongoDB + Mongoose schema



