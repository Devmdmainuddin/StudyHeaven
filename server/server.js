require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes/index");


const app = express();
const port = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// cors({
    
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATH'],
//     allowedHeaders: ['Content-Type', 'Authorization',]

// })
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());

// Connect to MongoDB
// {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
mongoose.connect(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected to StudyHeaven database"))
    .catch(err => console.log(err));

    
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({
        success: false,
        message: 'Something went wrong'
    })
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// const corsOptions ={
//     origin: process.env.CLIENT_URL,
//     credentials: true
// }


// mongodb+srv://<db_username>:<db_password>@cluster0.sk1ew0y.mongodb.net/?retryWrites=true&w=majority&appName=cluster0