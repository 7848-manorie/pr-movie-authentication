<img width="1916" height="873" alt="image" src="https://github.com/user-attachments/assets/0408d130-a11b-4ee0-9828-68292bdcdf3a" />


# 🎬 Role-Based Movie Management System (Node.js)


## 📌 Project Overview

This project is a **role-based movie management web application** built using **Node.js, Express, MongoDB, and EJS**, where users and admins have different levels of access. The system focuses on **authentication, authorization, and CRUD operations**, following real-world backend development practices.

Admins can manage movie data, while normal users can view content through a secure login system.

---

## 🎯 Objective

To build a secure Node.js application implementing **role-based access control (RBAC)** with separate dashboards for **Admin** and **User**, along with proper authentication and session handling.

---

## 🚀 Key Features

* User Authentication (Signup & Login)
* Role-Based Access Control (Admin / User)
* Secure Password Hashing using bcrypt
* Admin Dashboard for managing movies
* User Dashboard for browsing movies
* Add, Edit, View & Delete movie records
* Protected routes using custom middleware
* Server-side rendering using EJS templates

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, HTML, CSS, Bootstrap
* **Database:** MongoDB with Mongoose
* **Authentication:** bcrypt, express-session, cookies
* **File Uploads:** Multer
* **Dev Tools:** Nodemon

---


## 🔐 Roles & Permissions

### 👑 Admin

* Access admin dashboard
* Add, edit, and delete movies
* View all movie records

### 👤 User

* Signup & login
* Access user dashboard
* View movie details

Unauthorized users cannot access protected routes.

