Candidate Referral Management System
A full-stack web application built with React (frontend) and Node.js + Express (backend) to manage candidate referrals. The system allows users to:

View a list of referred candidates.

Add new candidates through a referral form.

Update candidate status (Pending, Reviewed, Hired).

Search and filter candidates by job title or status.

Features
Frontend (React)
Dashboard: Displays a list of referred candidates with their details (name, job title, status).

Referral Form: Allows users to refer new candidates with fields for name, email, phone, job title, and resume upload (PDF only).

Search Bar: Filters candidates by job title or status.

Status Update: Dropdown to update candidate status (Pending → Reviewed → Hired).

Responsive Design: Works seamlessly on all screen sizes.

Backend (Node.js + Express)
API Endpoints:

POST /candidates: Add a new candidate.

GET /candidates: Fetch all candidates.

PUT /candidates/:id/status: Update candidate status.

DELETE /candidates/:id: Delete a candidate (optional).

Database: MongoDB for storing candidate details.

File Upload: Handles PDF resume uploads and stores file paths in the database.

Validation: Ensures valid email, phone number, and file format.

Technologies Used
Frontend
React: JavaScript library for building the user interface.

React Router: For navigation between pages.

Axios: For making HTTP requests to the backend.

Bootstrap: For styling and responsive design.

CSS: Custom styles for additional UI enhancements.

Backend
Node.js: JavaScript runtime for the backend.

Express: Web framework for building RESTful APIs.

MongoDB: NoSQL database for storing candidate data.

Multer: Middleware for handling file uploads.

CORS: For enabling cross-origin requests.

Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v16 or higher)

npm (Node Package Manager)

MongoDB (local or cloud instance)
