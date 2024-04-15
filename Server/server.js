require("dotenv").config(); // to use dotenv and the env file created
const express = require("express"); //to use express
const app =  express(); //assigning express path
const router = require("./router/auth-router.js"); //importing routers
const connectDb = require("./utils/db.js"); //calling the database connection util file

app.use(express.json()); //allowing the transfer of JSON files, it is a middle ware.
app.use("/api/auth", router); //To use the router created

const PORT = 5000;


//Connect to the port only when the connection to the database is successfull
connectDb().then(() => {
    app.listen(PORT, () =>{
        console.log(`server is running at port : ${PORT}`);
    });
});