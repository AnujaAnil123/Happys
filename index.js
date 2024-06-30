const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://happysapparel:happysapparel2024@happys.7skppxm.mongodb.net/?retryWrites=true&w=majority&appName=happys")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const express = require("express");

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

// for user routes
const userRoute = require('./routes/userRoute')
app.use('/',userRoute)

app.listen(5000,function(){
    console.log("Server is running in 5000....")
    
})