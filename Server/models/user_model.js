const mongoose = require('mongoose');

//schema definition for the collection
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
    },

    emailid: {
        type: String,
        require: true,
    },

    phone:{
        type: String,
        require: true
    }

});

const User = new mongoose.model('User',userSchema);
module.exports = User;