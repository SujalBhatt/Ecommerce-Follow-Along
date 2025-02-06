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


## Milestone 6: Backend Endpoint for Signup Page

### Objective
Created a backend endpoint for the signup page to securely store user data in the database. Implemented password encryption to enhance security and ensure compliance with best practices.

### Key Features Implemented
Password Encryption

Utilized bcrypt to hash user passwords during signup.
Ensured that only the hashed password is stored in the database, protecting sensitive user data.
Secure Data Storage

Stored complete user details, including name, email, and hashed password, in the database.
Maintained strict security standards to prevent unauthorized access.

### Technologies Used
Node.js
Express.js
MongoDB
bcrypt

### Steps Followed
Set up a POST endpoint /signup in the backend to handle user registrations.
Used bcrypt.hash() to encrypt passwords before saving them to the database.
Validated user input to ensure completeness and security.
Successfully tested the endpoint using Postman/Thunderclient to verify proper functionality.


## Milestone 7: User Authentication and JWT Implementation

### Objective
Implemented user authentication using JSON Web Tokens (JWT) to manage user sessions securely. This milestone ensures that only authenticated users can access protected routes and perform specific actions within the application.

### Key Features Implemented
1. **JWT Authentication**:
   - Generated JWT tokens upon successful user login.
   - Implemented middleware to verify JWT tokens for protected routes.

2. **Login Endpoint**:
   - Created a POST endpoint `/login` to authenticate users.
   - Validated user credentials and generated a JWT token upon successful authentication.

3. **Protected Routes**:
   - Secured specific routes by requiring a valid JWT token for access.
   - Implemented middleware to decode and verify tokens, ensuring only authenticated users can proceed.

### Technologies Used
- Node.js
- Express.js
- MongoDB
- bcrypt
- jsonwebtoken

### Steps Followed
1. **Login Endpoint**:
   - Set up a POST endpoint `/login` to handle user login requests.
   - Used bcrypt.compare() to verify user passwords.
   - Generated a JWT token using jsonwebtoken upon successful authentication.

2. **JWT Middleware**:
   - Created middleware to verify JWT tokens for protected routes.
   - Decoded tokens to extract user information and validate authenticity.

3. **Protected Routes**:
   - Applied JWT middleware to routes that require authentication.
   - Ensured that only users with valid tokens can access these routes.

### Outcome
At the end of this milestone, the application supports secure user authentication using JWT. This enhances security by ensuring that only authenticated users can access protected resources and perform specific actions. The implementation of JWT tokens also lays the groundwork for future features that require user authentication and authorization.


## Milestone 8: Product Card Component and Display

### Learning Goals
By the end of this milestone, you will:
- Learn how to create a card component.
- Learn how to display those cards on the products page.

### Why Create Card Components?
- **Showcase Products Effectively**: Presents product details in a clear and visually appealing way.
- **Reusable Design**: Can be used across multiple pages or sections of the app.
- **Improved User Experience**: Makes it easy for users to browse and interact with products.
- **Organized Layout**: Keeps the homepage clean and structured.

### How to Display a Single Card for Multiple Products?
- **Create a Dynamic Component**: Design a single card component that accepts product details as props.
- **Use Mapping**: Use array mapping to iterate over the product list and render a card for each product.
- **Pass Data Dynamically**: Pass unique product information (e.g., name, price, image) to each card.
- **Maintain Consistency**: Ensure the layout remains uniform for all products.

### Steps for Milestone 8 📝
1. **Create the Card Component**:
   - Design a reusable card component with props for product details (e.g., name, image, price).

2. **Design the Homepage Layout**:
   - Set up a grid layout or flexbox for displaying multiple cards neatly.

### Submission Guidelines 📥
- Push your code to your GitHub repository.
- Ensure your repository is publicly accessible.
- Update the README file to summarize your progress for Milestone 8.
- Share the repository link in the assignment submission section.


## Milestone 9: Product Input Form

### Welcome to Milestone 9! 🌟

Today, we will create a frontend form for taking product inputs. Let’s dive in and understand what this all means!

### Learning Goals 🎯
By the end of this milestone, you will:
- Learn how to create a form that will take all the details of a product.
- Learn how to take multiple images as input.

### Why Create a Product Form?
Creating a form to input all the details of a product is essential for managing product data. These details will be eventually saved in the database and displayed on the products homepage created in the previous milestone.

### Steps for Milestone 9 📝
1. **Create the Form for Products**:
   - Design a form that includes fields for product details such as name, description, price, and category.
   - Implement functionality to take multiple product images as input.

### Note
This lesson will help you understand the basics of creating products. Feel free to experiment with adding more features, such as creating admin access to allow only admins to upload products or creating a shop profile where only users with a shop profile can upload products.


## Milestone 10: Product Schema and Endpoint Creation

### Learning Goals 🎯
By the end of this milestone, you will:
- Learn how to write a product schema.
- Learn how to create an endpoint to validate and store product details in MongoDB.

### Product Schema
- Define the structure of product data (e.g., name, description, price, image URL) using Mongoose.
- Ensure each field has proper validation (e.g., required fields, correct data types).

### Endpoint Creation
- Build a POST endpoint to receive product data.
- Validate and save the product details to MongoDB.

### Why Validation?
- Ensures that only valid data is saved in the database, maintaining data integrity and preventing errors.

**Note:** This lesson will help you in understanding the basics of creating products. Please feel free to experiment with adding more features like creating an admin access and allowing only admins to upload products, or creating a shop profile where only users with a shop profile can upload products.


## Milestone 11: Dynamic Home Page

### Learning Goals 🎯
By the end of this milestone, you will:
- Learn how to write an endpoint that will extract and send data from MongoDB.
- Learn how to receive data at the frontend.
- Learn how to display that data dynamically using the product card created earlier.

### Steps for Milestone 11 📝
1. Write an endpoint that will send all products data to the frontend.
2. In the frontend, write a function to get all the data.
3. Display these data dynamically by passing them to the product card component.

**Note:** This lesson will help you in understanding how to send and receive data and how to display that data dynamically using components.


## Milestone 12:

Today, we will make our My products page that will display all the products That i was added according to my mail. We will write an endpoint that will send all the products with mail that was saved in MongoDB using add products page earlier.

### Learning Goals 🎯

By the end of this milestone, you will:

How to write an endpoint that will send data by filtering with my mail and send data from mongodb.
how to receive data at frontend -How to display that data dynamically using product card created earlier.
Steps for Milestone 12📝
Write an endpoint that will send all products with user mail to frontend In frontend write an function to get all the data Display these data dynamically passing to product card component

**Note** This lesson will help you in understanding How to Filter the data with particular constrains and send it to client.


## Milestone 13

### Learning Goals 🎯
- How to write an endpoint that will update the existing data in MongoDB.
- How to auto-fill the form with previous data and give option to edit.

### Steps for Milestone 13 📝
1. Write an endpoint that will receive new data and update the existing data inside MongoDB.
2. In frontend, add an edit button to the product card.
3. When clicking on edit, send the data to form and make it auto-fill and have option to edit those data and save.

### Progress
- Added an endpoint to update product details in MongoDB.
- Added an edit button to the product card.
- Created a new component to edit product details.
- Auto-filled the form with existing product data when editing.

### Submission Guidelines 📥
- Pushed code to GitHub repository.
- Ensured repository is publicly accessible.
- Updated README file to summarize progress for Milestone 13.
- Shared repository link in the assignment submission section.