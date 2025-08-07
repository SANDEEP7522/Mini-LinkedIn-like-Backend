# 📡 Mini-LinkedIn-like Backend

This is the backend for the **Mini LinkedIn-like** application. It handles user authentication, post management, profile handling, and other core features of a professional networking platform.

---

## 🚀 Project Features

- User Authentication (Register/Login/forgetPassword)
- Post Creation, like and Comments
- Follow/Bookmark Functionality
- JWT Auth
- MongoDB & Express.js Backend
- ✅ [Live API Documentation](https://documenter.getpostman.com/view/38636822/2sB3BDJApX)

## 📦 Installation

```bash
git clone https://github.com/SANDEEP7522/Mini-LinkedIn-like-Backend/commits/main/
cd mini-linkedin-backend
npm install
PORT=8080
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


SMTP_HOST=''
SMTP_SERVICE=''
SMTP_PORT=''
SMTP_USER=''
SMTP_PASSWORD=''
JWT_SECRET=''
JWT_EXPIRE=''
COOKIE_EXPIRE=''

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

mini_linkdin/
│
├── src/
│ ├── automation/
│ │ └── removeUnVerifiedAccounts.js
│ │
│ ├── config/
│ │ ├── dbConfig.js
│ │ └── serverConfig.js
│ │
│ ├── controllers/
│ │ ├── likeController.js
│ │ ├── postController.js
│ │ └── userController.js
│ │
│ ├── middlewares/
│ │ ├── auth.js
│ │ ├── catchAsyncError.js
│ │ └── error.js
│ │
│ ├── models/
│ │ ├── post.js
│ │ └── userModel.js
│ │
│ ├── routes/
│ │ ├── likeRoute.js
│ │ ├── postRoutes.js
│ │ └── userRoute.js
│ │
│ ├── services/
│ │ ├── likeService.js
│ │ └── postService.js
│ │
│ ├── utils/
│ │ ├── cloudinares/
│ │ │ └── cloudinary.js
│ │ └── multer.js
│ │
│ └── commons/
│ ├── emailObject.js
│ ├── responseObject.js
│ ├── errorHandler.js
│ ├── sendEmail.js
│ └── sendToken.js
│
├── .env
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md

## 🚀 Features

- Create Post (Text + Optional Image)
- Upload Images to Cloudinary
- Get All Posts (with author & timestamp)
- Get Single Post by ID
- Auth protected routes using JWT
- MongoDB + Mongoose schema
