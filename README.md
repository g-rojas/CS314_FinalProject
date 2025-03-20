This is a real-time messaging application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.io for real-time communication. The app allows users to send and receive messages instantly, providing a seamless chatting experience.

Description:
This messaging app supports:
Real-time messaging with Socket.io.
Authentication using JWT and bcrypt for hashing passwords.
User management: Register, login, and store user data in a MongoDB database.
Message storage: Messages are saved in MongoDB and displayed in real-time to other users.
Features
Real-time messaging using Socket.io
User authentication (signup/login)
Responsive frontend using React and Chakra UI
Real-time chat interface with message history
Secure password storage using bcryptjs

Technologies Used
Backend: Node.js, Express, MongoDB, Mongoose, Socket.io
Frontend: React, Chakra UI, Axios, React Router
Authentication: JWT (JSON Web Tokens), bcryptjs
Real-Time Communication: Socket.io

Prerequisites:
Ensure you have the following installed:
Node.js (Version 14 or higher)
MongoDB (Locally or use a cloud service like MongoDB Atlas)
Git
Clone the Repository
Clone the repository to your local machine:
bash
CopyEdit
git clone https://github.com/your-username/im-app.git
cd im-app

Install Backend Dependencies
In the root directory of the project, run:
bash
CopyEdit
cd backend
npm install

Install Frontend Dependencies
In the frontend directory, run:
bash
CopyEdit
cd frontend
npm install

Backend Setup
The backend is built with Node.js and Express. It handles user authentication, message creation, and real-time communication using Socket.io.
Create a .env file in the backend folder to store your environment variables:
bash
CopyEdit
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PORT=5125

Replace your-mongodb-uri with your MongoDB connection string.
Replace your-jwt-secret with a secret string for JWT signing.
Start the Backend Server
bash
CopyEdit
npm start

This will run the backend on http://127.0.0.1:5125.

Frontend Setup
The frontend is built using React and Chakra UI. It provides the user interface for interacting with the app.
Start the Frontend Development Server
bash
CopyEdit
npm start

This will run the frontend on http://localhost:3000.
Running the App
Once both the frontend and backend are set up, the app should be ready to run. You can access the app in your browser at http://localhost:3000.
Sign up or login to start chatting.
Send messages in real-time and see them instantly appear on the screen.
Messages will be saved to the database and persist even after refreshing the page.
Contributing
We welcome contributions to improve the app! Here’s how you can contribute:
Fork the repository and create a new branch for your changes.
Make your changes and ensure that all tests pass (if applicable).
Submit a pull request with a description of the changes and why they’re needed.
