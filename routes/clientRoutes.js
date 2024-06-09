const express = require('express');
const ClientModel = require('../models/client');

const router = express.Router();


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json("Email and password are required");
    }s

    ClientModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.status(200).json("Success");
                } else {
                    res.status(400).json("Password is incorrect");
                }
            } else {
                res.status(404).json("User not found");
            }
        })
        .catch(err => {
            console.error("Error finding user:", err);
            res.status(500).json("Internal Server Error");
        });
});


router.post('/register', (req, res) => {
    ClientModel.create(req.body)
        .then(client => res.status(201).json(client))
        .catch(err => {
            console.error("Error creating user:", err);
            res.status(500).json("Internal Server Error");
        });
});

module.exports = router;
