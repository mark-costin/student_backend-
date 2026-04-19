# Student Management System

A full-stack application for managing student records using a Node.js backend and a MySQL database. 

## 📸 Preview
![Application Screenshot](Screenshot%20from%202026-04-19%2019-13-57.png)
*The interface features a horizontal entry form and a dynamic data table.*

## 🚀 Features
* **Add Students**: Input Full Name, Email, and Course via the top form.
* **View Records**: Automatically lists all students stored in the MySQL database.
* **Edit Data**: Populate the form with existing data to update student details.
* **Delete Records**: Remove entries with a confirmation prompt.

## 🛠️ Tech Stack
* **Frontend**: HTML5, CSS3, and Vanilla JavaScript using the Fetch API.
* **Backend**: Node.js and Express.js.
* **Database**: MySQL.
* **Dependencies**: `express`, `mysql2`, and `cors`.

## ⚙️ Setup Instructions

### 1. Database Setup
* Create a MySQL database named `student_db`.
* Use the provided `student_backup.sql` to create the `students` table.
* The table includes columns for `id`, `name`, `email`, and `course`.

### 2. Backend Configuration
* Navigate to the project folder and run: `npm install express mysql2 cors`.
* The server connects to MySQL using the host `localhost`, user `kram`, and password `kram`.
* Start the server by running: `node server.js`.

### 3. Frontend Usage
* Open `index.html` in your browser.
* The frontend communicates with the API at `http://localhost:3000/api/students`.

## 📡 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/students` | Fetches all students. |
| **POST** | `/api/students` | Creates a new student. |
| **PUT** | `/api/students/:id` | Updates a student by ID. |
| **DELETE** | `/api/students/:id` | Deletes a student by ID. |
