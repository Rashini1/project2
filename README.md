# project2
 

# Employee Leave Management System

A web application to manage employee leave requests. Employees can submit leave requests, and administrators can approve or reject them.

---

## Features

* Employee login and leave request submission
* Admin login and leave request approval/rejection
* Role-based authentication (Admin / Employee)
* JWT token authentication
* MongoDB for data storage

---

## Tech Stack

* **Frontend:** React, Axios, Bootstrap
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT

---

## Prerequisites

* Node.js and npm installed
* MongoDB running locally or using MongoDB Atlas

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the backend folder:

```
MONGO_URI=mongodb://127.0.0.1:27017/leave-system
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend root:

```
REACT_APP_BACKEND_URL=http://localhost:5000
```

---

### 4. Set Up Admin Account

 

#### Option 1: Using Default Credentials

If the database already has a seeded admin, use:

```
Email: admin@test.com
Password: admin123
Role: admin
```

---


Run the script:

```bash
node seedAdmin.js
```

---

### 5. Start the Backend

```bash
cd server
npx nodemon server.js
```

Backend will run at: `http://localhost:5000`

---

### 6. Start the Frontend

```bash
cd client
npm start
```

Frontend will run at: `http://localhost:3000`

---

### 7. Login

Use the seeded admin credentials:

```
Email: admin@test.com
Password: admin123
Role: admin
```
 

 
