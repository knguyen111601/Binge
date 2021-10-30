////////////////////////////////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////////////////////////////////
const mongoose = require("./connection.js");

////////////////////////////////////////////////////////////////////////
// Movies Model
////////////////////////////////////////////////////////////////////////
const {Schema, model} = mongoose;

// movie schema 
const MyListSchema = new Schema({
    order: Number,
    title: {type: String, required: true},
    type: {type: String, required: true},
    releaseDate: String,
    img: String,
    desc: String,
    director: String,
    rating: {type: Number, default: 0},
    cast: {
        cast1: String,
        cast2: String,
        cast3: String
    },
    username: String
}, {timestamps: true})

// Make model
const MyList = model("MyList", MyListSchema);

////////////////////////////////////////////////////////////////////////
// Export the model
////////////////////////////////////////////////////////////////////////
module.exports = MyList