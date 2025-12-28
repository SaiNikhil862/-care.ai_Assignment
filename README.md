# Digital Health Wallet – Frontend

This is the frontend application for the Digital Health Wallet project built as part of the 2care.ai assignment.

The frontend allows users to register, login, upload medical reports, add vitals, and view their health data securely.

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM

---

## Features

- User registration and login
- JWT-based authentication handling
- Upload medical reports (PDF/Image)
- Add health vitals (BP, Sugar, etc.)
- View uploaded reports
- Responsive and user-friendly UI

---

## Project Structure

frontend/
├── src/
│ ├── components/
│ ├── services/
│ ├── App.jsx
│ └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json

yaml
Copy code

---

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm

### Install & Run

```bash
cd frontend
npm install
npm run dev
Frontend will run on:

arduino
Copy code
http://localhost:5173



Backend Dependency

The frontend expects the backend server to be running at:

http://localhost:5000

Author

Sai Nikhil
---

✅ backend/README.md
```md
# Digital Health Wallet – Backend

This is the backend service for the Digital Health Wallet project built as part of the 2care.ai assignment.

The backend provides REST APIs for authentication, medical report management, vitals tracking, and report sharing.

---

## Tech Stack

- Node.js
- Express.js
- SQLite
- JWT Authentication
- Multer (File Uploads)
- bcrypt (Password Hashing)

---

## Features

- User registration and login
- JWT-based authentication
- Secure password hashing
- Upload medical reports (PDF/Image)
- Store and retrieve vitals data
- Share reports with read-only access
- SQLite database integration

---

## Project Structure



backend/
├── routes/
├── middleware/
├── uploads/
├── database.js
├── index.js
└── package.json


---

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm

### Install & Run

```bash
cd backend
npm install
node index.js


Backend will run on:

http://localhost:5000

API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
POST	/api/reports/upload	Upload medical report
GET	/api/reports	Get user reports
POST	/api/vitals	Add vitals
GET	/api/shares/me	View shared reports
Security

Passwords hashed using bcrypt

JWT used for API authentication

Protected routes using middleware

File type validation for uploads
