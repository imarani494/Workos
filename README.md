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



candidate-referral-system/
├── backend/
│   ├── config/             # Database configuration
│   ├── controllers/        # API controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── uploads/            # Store uploaded resumes
│   ├── .env                # Environment variables
│   ├── server.js           # Backend entry point
│   └── package.json        # Backend dependencies
├── frontend/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Application pages
│   │   ├── App.js          # Main application component
│   │   ├── index.js        # Frontend entry point
│   │   └── styles.css      # Custom CSS
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend documentation
├── .gitignore              # Files to ignore in Git
└── README.md               # Project documentation


Assumptions and Limitations
File Upload: Only PDF files are accepted for resumes.

Validation: Basic email and phone number validation is implemented.

Authentication: No user authentication is included (can be added as a bonus feature).

Deployment: The application is designed for local development (can be deployed to platforms like Heroku or Vercel).

Future Improvements
Add user authentication (e.g., JWT or session-based login).

Implement pagination for the candidate list.

Add a metrics dashboard (e.g., total candidates, status distribution).

Deploy the application to a cloud platform.

Store resumes in cloud storage (e.g., AWS S3, Google Cloud Storage).
