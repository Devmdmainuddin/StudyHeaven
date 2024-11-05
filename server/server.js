require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes/index");


const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATH'],
    allowedHeaders: ['Content-Type', 'Authorization',]

})

app.use(express.json());

// Connect to MongoDB
// {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
mongoose.connect(MONGO_URL,)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

    
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({
        success: false,
        message: 'Something went wrong'
    })
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// const corsOptions ={
//     origin: process.env.CLIENT_URL,
//     credentials: true
// }


// mongodb+srv://<db_username>:<db_password>@cluster0.sk1ew0y.mongodb.net/?retryWrites=true&w=majority&appName=cluster0