const express = require('express');
const PhotographerModel = require('../models/photographer');

const router = express.Router();


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json("Email and password are required");
    }

    PhotographerModel.findOne({ email })
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
    PhotographerModel.create(req.body)
        .then(photographer => res.status(201).json(photographer))
        .catch(err => {
            console.error("Error creating user:", err);
            res.status(500).json("Internal Server Error");
        });
});

module.exports = router;
