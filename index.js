const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/client');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

app.post('/login', (req, res) => {
    EmployeeModel.findOne({
        email: email
    })
        .then(user => {
            if (user) {
             if(user.password === password){
                 res.json("Success")
             }else{
              res.json("Password is incorrect")   
             }
            }
            else{
                res.json("User not found")
            }
        })
})

app.post('/register', (req, res) => {
   EmployeeModel.create(req.body)
        .then(client => res.json(client))
        .catch(err => res.json(err))
        
    })

app.listen(3002, () => {
    console.log("Server is running on port 3002");
})