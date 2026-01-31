# 🗂️ Task Management System

A full-stack Task Management System built using Node.js, TypeScript, Prisma, and Next.js.
This application allows users to register, log in securely, and manage their personal tasks with full CRUD functionality.

## 🚀 Features
🔐 Authentication & Security

User Registration & Login

Password hashing using bcrypt

JWT-based Authentication

Access Token

Refresh Token

Protected routes for authenticated users only

## 📝 Task Management

Create new tasks

View personal tasks

Toggle task status (completed / pending)

Tasks are user-specific (data isolation)

## 🖥️ Frontend (Next.js)

Modern Next.js App Router

Responsive UI with Tailwind CSS

Login & Register pages

Task dashboard (in progress / extendable)

## ⚙️ Backend (Node.js + TypeScript)

RESTful API using Express

Prisma ORM with SQL database

Clean project structure

Proper HTTP status codes & error handling

## 🏗️ Tech Stack
### Frontend
<ul className="space-y-0 text-sm leading-tight">
  <li>Next.js (App Router)</li>
  <li>TypeScript</li>
  <li>Tailwind CSS</li>
</ul>

### Backend
<ul className="space-y-0 text-sm leading-tight">
  <li>Node.js</li>
  <li>Express.js</li>
  <li>TypeScript</li>
  <li>Prisma ORM</li>
  <li>SQLite (PostgreSQL / MySQL ready)</li>
</ul>

### Tools
<ul className="space-y-0 text-sm leading-tight">
  <li>Git & GitHub</li>
  <li>JWT</li>
  <li>bcrypt</li>
</ul>


## 📂 Project Structure
```
backend/
├── frontend/          # Next.js frontend
│   ├── src/
│   │   ├── app/
│   │   ├── services/
│   │   └── components/
│   └── package.json
│
├── src/               # Backend source
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── utils/
│
├── prisma/
│   └── schema.prisma
│
├── .gitignore
├── package.json
└── tsconfig.json
```

## ▶️ How to Run the Project Locally
### 1️⃣ Clone the Repository
```
git clone https://github.com/<YOUR_USERNAME>/task-management-system.git
cd backend
```
### 2️⃣ Backend Setup
```
npm install
npx prisma migrate dev
npm run dev
```

Backend will run on:
```
http://localhost:4000
```
### 3️⃣ Frontend Setup
```
cd frontend
npm install
npm run dev

```
Frontend will run on:
```
http://localhost:3000
```
## 🔁 Application Flow

User registers using /register

User logs in using /login

Backend returns JWT token

Token is stored in browser

Authenticated user accesses task APIs

Tasks are created and fetched per user

## 📌 API Endpoints
### Authentication
```
POST /auth/register

POST /auth/login
```
Tasks
```
GET /tasks

POST /tasks

PATCH /tasks/:id/toggle

DELETE /tasks/:id
```
### 🧪 Example Test Credentials
```
Email: test@test.com
Password: 123456
```

## 📌 Future Improvements

Refresh token rotation

Task edit & delete UI

Pagination & search UI

Deployment (Vercel + Render)

Role-based access control

## 📝 License

Licensed under the MIT License
