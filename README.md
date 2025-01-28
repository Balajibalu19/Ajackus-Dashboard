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
       cd user-management
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
![Image](https://github.com/user-attachments/assets/0b6856f4-d241-4bf3-8060-2b5cedd6ef89)

## Add User Form
![Image](https://github.com/user-attachments/assets/c45529dc-ccb1-4350-98ec-5acabe7a48ec)

## Edit User Form 
![Image](https://github.com/user-attachments/assets/663c7f2c-6048-4eb4-bd1e-516b1c3599cf)

## Delete Confirmation 
![Image](https://github.com/user-attachments/assets/3c418ff7-5924-438a-9155-7497718afb22)

# Reflective Notes
1.This project emphasizes clean code principles, such as DRY and effective naming conventions.

2.The folder structure and commit history reflect a professional development approach.

3.Given more time, additional features like real-time updates and advanced filtering could enhance the user experience.



### 1. **Effective Class, Method, and Variable Names**
   - Variables, methods, and components are named descriptively to convey their purpose.
   - **Example**:
     ```javascript
     const handleUserAddedOrEdited = (newUser) => { ... } // Clearly describes its purpose
     const defaultFormData = { username: "", name: "", email: "", phone: "", company: { name: "" } }; // Communicates structure
     ```

### 2. **Effective Implementation of DRY (Do not Repeat Yourself)**
   - Reusable logic is extracted into helper functions or separate components.
   - **Example**:
     - UserForm handles both **Add** and **Edit** functionality, reducing duplication.
     - `validateForm()` consolidates validation logic.
### 3. **Readable and Consistent Code Layout**
   - Consistent indentation, curly braces placement, and wrapping of lines for readability.
   - **Example**:
     ```javascript
     const handlePageChange = (page) => {
       setCurrentPage(page);
     };

     const handleSubmit = async (e) => {
       e.preventDefault();
       if (!validateForm()) return;
       try { ... } catch (error) { ... }
     };
     ```
### 4. **Effective Source Tree Directory Structure**
   - The project is well-organized:
     ```
     src/
     ├── components/
     │   ├── UserCard.js
     │   ├── UserForm.js
     │   └── Pagination.js
     ├── utils/
     │   └── api.js
     └── pages/
         └── UserList.js
     ```
### 5. **Effective File Organization**
   - Code is modularized into multiple files to improve maintainability.
   - **Example**:
     - `UserForm.js` handles the form logic.
     - `Pagination.js` handles pagination logic.
            

### 6. **Correct Data Validation & Exception Handling**
   - The code validates user input and handles API errors gracefully.
   - **Example**:
     - Validation:
       ```javascript
       if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = "Please enter a valid email address.";
       }
       ```
     - Error Handling:
       ```javascript
       try {
         const response = await getUsers();
         setUsers(response.data);
       } catch (error) {
         toast.error("Failed to fetch users.");
       }
 ### 7. **Good Unit Test Cases**
   - Unit tests ensure correctness.
   - **Example Test**:
     ```javascript
     test("should add a new user", async () => {
       const newUser = { id: 1, name: "John Doe", email: "john@example.com" };
       addUser.mockResolvedValueOnce({ data: newUser });
       await handleUserAddedOrEdited(newUser, true);
       expect(setUsers).toHaveBeenCalledWith([newUser, ...prevUsers]);
     });
     ```      ```
