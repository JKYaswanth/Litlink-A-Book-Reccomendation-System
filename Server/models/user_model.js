const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
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

userSchema.pre("save", async function(){
    const user = this;
    console.log("Actual Data ", this);

    if(!user.isModified("password")){
        return next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10); //10 Rounds of hashing
        const hashPassword = await bcrypt.hash(user.password, saltRound);

        user.password = hashPassword;
    } catch (error) {
        return next(error);
    }
}
);

const User = new mongoose.model('User',userSchema);
module.exports = User;