const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoutes');
const photographerRoutes = require('./routes/photographerRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.use('/api/client', clientRoutes);
app.use('/api/photographer', photographerRoutes);

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});



