////////////////////////////////////////////////////////////////////////
// Import our dependencies 
////////////////////////////////////////////////////////////////////////
// Import the existing connected mongoose object from connection.js
const mongoose = require("./connection");

////////////////////////////////////////////////////////////////////////
// Create our User Model
////////////////////////////////////////////////////////////////////////
// destructuring schema and model from mongoose 
const {Schema, model} = mongoose; 

// Make a user Schema
const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

// Made the model 
const User = model("User", UserSchema)

////////////////////////////////////////////////////////////////////////
// Export the model
////////////////////////////////////////////////////////////////////////
module.exports = User