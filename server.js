// Import Dependencies
const express = require("express")


// app object
const app = express()

// route
app.get("/", (req, res)=>{
    res.send("this app is working")
})

// IDEA FOR PROJECT
// WATCH TODO LIST FOR SHOWS/MOVIES



// Listener 
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)})