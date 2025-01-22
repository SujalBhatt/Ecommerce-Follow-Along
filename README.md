# Ecommerce-Follow-Along
## Project description
In addition to e-commerce capability, the application embodies characteristics of a vibrant website which has been built with the help of the MERN stack (that includes MongoDB, Express.js and Node.js - apart from React.js). Hence, with this, the web application has all the wonderful features a user may require to have an enjoyable shopping experience while the background is loaded with robustness for the management of products, users and orders. Efforts on scalability security with real life usability have led to the development of this application.

## Milestone 1: Project Overview
Session Summary
This first milestone concentrated on providing background into the e-commerce project, attempting to understand how its architecture operates and the functions that it includes. Central to the session was a thorough discussion of MERN stack's architecture and how to configure it, in addition to preparing the repository for development purposes.

Major Points Covered
MERN Stack Overview:

Seeing how MongoDB, Express.js, React.js, and Node.js interact to create a full-stack web application.
Building the front- and back-end by adopting Node.js and JavaScript.
Fundamentals of REST API:

Some operations are meant to be performed by APIs:
User Authentication: Implement Registration and Sign in Functionality.
Product Management: Create, update, and get the list of products.
Order Management: Handle all clients' orders.
Connecting API and Database with the Help of JSON.
Architectural Design of Database Schema:

Structural Definition and Relationship in storing data in MongoDB
Authentication in Web Applications:

User authentication features are required for secure access to resources.
Verifying the identity of the user in registration and login.


## Milestone 2: Project Setup and Login Page

In this milestone, we set up the frontend and backend structure for the e-commerce application. We initialized the React app with Vite, configured Tailwind CSS for styling, and developed a basic login page. This lays the foundation for user-facing features and future backend integration.

Major Points Covered:
Project Structure: Separated the frontend (React) and backend (Node.js) into distinct directories.
Frontend Setup: Initialized a React app using Vite for faster development.
Tailwind CSS: Installed and configured Tailwind for utility-first styling.
Login Page: Developed a simple login form with fields for email and password, styled using Tailwind.
Development Server: Used Vite’s server (npm run dev) to run the frontend locally.
This milestone completed the setup for the frontend, laying the groundwork for future API integration and user authentication.



## Milestone 3: Backend Setup

In this milestone, we focused on setting up the backend structure for the e-commerce application. We created the necessary folders and files to organize our backend code, configured the server, and connected to the MongoDB database.

Major Points Covered:
- Backend Structure: Created folders for controllers, models, routes, and middleware to organize the backend code.
- Express Server: Set up an Express.js server to handle API requests.
- MongoDB Connection: Configured Mongoose to connect to a MongoDB database.
- Environment Variables: Used dotenv to manage environment variables securely.
- Basic Routes: Implemented basic routes for user registration and login.

This milestone established the backend foundation, enabling us to build and expand the API endpoints and integrate them with the frontend in future milestones.


## Milestone 4: User Model, Controller, and File Uploads  

In this milestone, we expanded the backend functionality by introducing a user management system and enabling file uploads. These enhancements set the stage for building a more interactive and user-friendly application.  

### Major Points Covered:  
1. **User Model**:  
   - Defined a schema using Mongoose to structure user data, including fields like name, email, and password.  
   - Established validation rules for secure and consistent data storage.  

2. **User Controller**:  
   - Created functions to handle user-related operations, such as registering new users and retrieving user details.  
   - Organized controller logic to maintain a clean and modular codebase.  

3. **File Uploads with Multer**:  
   - Integrated Multer middleware to handle file uploads (e.g., profile pictures).  
   - Configured storage settings to save uploaded files to the server.  

4. **Backend Refinements**:  
   - Improved code organization by separating logic into dedicated folders for models, controllers, and routes.  
   - Updated environment variables for secure configuration management.  

This milestone reinforces the backend's robustness by adding essential features like user data handling and file management.  


## Milestone 5: Sign-Up Page and Validation

🎯 Learning Goals
By the end of this milestone, you will:

Build the frontend UI for users to register by filling out their details.
Implement form validation to ensure that user inputs, like email and password, are correct before submission.

🚀 Key Concepts
What is a Sign-Up Page?
The Sign-Up page allows users to input their details to create an account. Typical fields include:

Name
Email
Password
This page will send user information to the server for processing.
What is Form Validation?
Form validation ensures that user inputs are correct and in the proper format:

Email format validation ensures the email entered is in the correct format (e.g., user@example.com).
Password validation checks for:
Minimum 6 characters.
At least one uppercase letter.
At least one number.
At least one special character. Form validation prevents errors and ensures the backend receives clean and valid data.

📝 Steps for Milestone 5
Sign-Up Page Development

Created a user-friendly sign-up form with fields for Name, Email, and Password.
Styled the form using Tailwind CSS to ensure responsiveness and visual appeal.
Form Validation Implementation

Implemented client-side form validation to ensure that:
The email entered is valid.
The password meets the required security criteria.
Displayed clear error messages to guide users through correcting their input.

🎯 Outcome
At the end of this milestone, the Sign-Up Page is fully functional with proper form validation, ensuring that only valid data is submitted. This enhances the overall user experience and prepares the application for future steps, including backend integration and authentication.

📥 Submission Guidelines
Once you’ve completed this milestone:

Push your code to the same GitHub repository you’ve used for previous milestones.
Make sure the repository is publicly accessible.
Update your README file with a section summarizing your progress for Milestone 5.
Share the repository link in the assignment provided.

🚀 Next Steps
In the next milestone, we’ll continue to build more advanced features for your app, such as connecting the frontend to the backend and managing user sessions securely. Keep up the great work!








