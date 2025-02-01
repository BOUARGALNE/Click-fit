const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

router.post('/add', (req, res) => {
    const { email, password, type } = req.body;
    connection.query(
        'CALL addUser(?, ?, ?)',
        [email, password, type],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: 'Error creating user' });
                return;
            }
            res.json({ message: 'User created successfully' });
        }
    );
});

module.exports = router;