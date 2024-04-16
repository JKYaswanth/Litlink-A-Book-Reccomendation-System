const User = require("../models/user_model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to our home page using controller");
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);
        const{username, password, emailid, phone} = req.body; //body for the POST
        const userExist = await User.findOne({emailid: emailid}); //Checking email duplicacy

        if(userExist){
            return res.status(400).json({msg: "Email Already Exists!!"}); //If the email exists then exit
            //status(400) :- Bad Request
            //status(200) :- OK
            //status(201) :- Created
            //status(500) :- Internal Server Error
        }

        //Else the collection is created
        const userCreated = await User.create({username, password, emailid, phone});

        res.status(201).json({msg: userCreated});   //Reflected as a JSON message

    } catch (error) {
        res.status(500).json({msg: "Internal Server Error"});
    }

};

module.exports = {home , register};