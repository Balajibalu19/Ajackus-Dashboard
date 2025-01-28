# User Management Dashboard
## Table of Contents
1.Overview

2.Features

3.Technologies Used

4.Setup Instructions

5.Folder Structure

6.Functionality

7.Error Handling

8.Challenges and Improvements

9.Output Screenshots


# Overview
The User Management Dashboard is a simple web application where users can view, add, edit, and delete user details. It interacts with the JSONPlaceholder API to simulate backend functionality. The application demonstrates CRUD operations, clean UI/UX, and robust validation and error handling.

# Features
1.View Users: Fetch and display a list of users with their details.

2.Add User: Add a new user by filling out a form.

3.Edit User: Modify existing user details using the edit functionality.

4.Delete User: Remove a user by sending a delete request to the API.

5.Error Handling: Handle API errors gracefully with user feedback.

Bonus:
   
   1.Client-side form validation.
    
   2.Fully responsive design for mobile and desktop.
    
   3.Pagination for user lists.

# Technologies Used
 1.Frontend: React.js, Tailwind CSS
 
 2.Backend API: JSONPlaceholder (mock API)
 
 3.Other Libraries: Axios (API requests), React Toastify (notifications) 


# Setup Instructions
## Prerequisites
1.Node.js: Ensure you have Node.js (v14 or later) installed.

2.NPM/Yarn: Package manager for installing dependencies.
## Steps
1. Clone the Repository

       git clone https://github.com/Balajibalu19/Ajackus-Dashboard.git
       cd user-management-dashboard
2. Install Dependencies

         npm install
3. Run the Application

         npm start

Open the Application Open http://localhost:3000 in your browser to view the app.

# Folder Structure

      src/
      ├── components/
      │   ├── UserCard.jsx
      │   ├── UserForm.jsx
      │   ├── Pagination.jsx
      ├── pages/
      │   ├── UserList.jsx
      ├── utils/
      │   ├── api.js
      ├── App.js
      ├── index.css
      ├── main.jsx

# Functionality
## View Users
1.Fetches user data from the /users endpoint of the JSONPlaceholder API.

2.Displays details like ID, First Name, Last Name, Email, and Department in a table format.
## Add User
1.Displays a form for user input.

2.Validates user inputs (e.g., email format, required fields).

3.Sends a POST request to the API to simulate adding a new user.
## Edit User
1.Fetches the current data for a user.

2.Displays an editable form with pre-filled user details.

3.Sends a PUT request to update the user information.
## Delete User
1.Sends a DELETE request to remove the user.

2.Displays a confirmation dialog before deletion. 

# Error Handling
1.API Failures: Displays error messages when the API call fails (e.g., network issues).

2.Form Validation: Highlights invalid fields and provides clear error messages.

# Challenges 
## Challenges
1.Handling mock API limitations.

2.Designing a responsive UI to handle various screen sizes.

3.Implementing robust form validation for better user experience.

# Output Screenshots

## Home Page (User List)
