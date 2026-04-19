const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Connect to MySQL (using the user we created in Step 1)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'kram',
    password: 'kram',
    database: 'student_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

// ================= API ROUTES (CRUD) =================

// CREATE or INSERT : Add a new student
app.post('/api/students', (req, res) => {
    const { name, email, course } = req.body;
    const sql = 'INSERT INTO students (name, email, course) VALUES (?, ?, ?)';
    db.query(sql, [name, email, course], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Student added successfully', id: result.insertId });
    });
});

// READ or SELECT : Get all students
app.get('/api/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

// UPDATE: Edit a student by ID
app.put('/api/students/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, course } = req.body;
    const sql = 'UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?';
    db.query(sql, [name, email, course, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Student updated successfully' });
    });
});

// DELETE: Remove a student by ID
app.delete('/api/students/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM students WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Student deleted successfully' });
    });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});