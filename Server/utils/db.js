const mongoose = require("mongoose"); //mongoose import

// const URI = "mongodb://127.0.0.1:27017/admin" //URL for from mongosh shell for example
const URI = process.env.MONGODB_URI; //.env call to get the sensitive information from the .env file
//connection from the database is secured

const connectDb = async() => {
    try {
        await mongoose.connect(URI);
        console.log("Database connection succesfull !!");
    } catch (error) {
        console.error("Database connection failed.");
        process.exit(0);
    }
};

module.exports = connectDb;