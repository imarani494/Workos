## Candidate Referral Management System

## Introduction

 ## The Candidate Referral Management System is a full-stack web application designed to streamline the process of managing candidate referrals within an organization. Built with a React frontend and a Node.js + Express backend, this application allows users to add new referrals, view and update candidate statuses, and search/filter candidates—all while maintaining a user-friendly and responsive interface.

Project Type

Fullstack

Deployed App



Database: Hosted on MongoDB Atlas or local MongoDB instance

Video Walkthrough of the Project

A brief walkthrough of all the features of the Candidate Referral Management System. (Attach link to video, 1-3 minutes)

Video Walkthrough of the Codebase

A guided tour of the codebase, explaining key components and architecture choices. (Attach link to video, 1-5 minutes)

Features

## Dashboard: Displays a list of referred candidates with details like name, job title, and current status (Pending, Reviewed, Hired).

Referral Form: Allows users to refer new candidates, including uploading resumes (PDF only).

Search Bar: Filters candidates by job title or status.

Status Update: Dropdown to seamlessly change candidate statuses.

Responsive Design: Optimized for all screen sizes.

Design Decisions & Assumptions

File Upload: Only PDF files are accepted for resumes to maintain consistency and security.

Validation: Includes basic email and phone number validation.

Authentication: Not implemented yet, but planned for future enhancement (JWT or session-based).

Deployment: Initially designed for local development but easily deployable to Heroku, Vercel, etc.

Resume Storage: Currently stored locally; could be upgraded to cloud storage (AWS S3, Google Cloud Storage).

Installation & Getting Started

Clone the repository and install dependencies for both frontend and backend:



# Install backend dependencies
cd backend
npm install

# Start the backend server
npm start

# In a new terminal, install frontend dependencies
cd ../frontend
npm install

# Start the frontend server
npm start

Ensure MongoDB is running locally or update your connection string in .env for a cloud instance.

Usage

Once the servers are running, open your browser to the provided URL to access the application. Fill out the referral form, view the dashboard, update candidate statuses, and explore the search functionality.



## candidate-referral-system/
├── backend/
│   ├── config/             
│   ├── controllers/        
│   ├── models/            
│   ├── routes/            
│   ├── uploads/           
│   ├── .env               
│   ├── server.js           
│   └── package.json       
├── frontend/
│   ├── public/             
│   ├── src/
│   │   ├── components/    
│   │   ├── pages/         
│   │   ├── App.js        
│   │   ├── index.js       
│   │   └── styles.css     
│   ├── package.json        
│   └── README.md          
├── .gitignore              
└── README.md            


# Example
# Adding a new candidate via POST /candidates

Include screenshots of the dashboard, referral form, and status update process!

Credentials

(Currently, no authentication is required. When added, provide test credentials here.)

APIs Used

N/A (Self-contained system. In future versions, consider integrating LinkedIn API for candidate profile fetching!)

API Endpoints

POST /candidates: Add a new candidate.

GET /candidates: Fetch all candidates.

PUT /candidates/:id/status: Update candidate status.

DELETE /candidates/:id: Delete a candidate.

## Technology Stack

 ## Frontend: React, React Router, Axios, Bootstrap, CSS

 ## Backend: Node.js, Express, MongoDB, Multer, CORS
