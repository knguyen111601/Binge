////////////////////////////////////////////////////////////////////////
// Import our dependencies 
////////////////////////////////////////////////////////////////////////
const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { application } = require("express");

////////////////////////////////////////////////////////////////////////
// Create Router
////////////////////////////////////////////////////////////////////////
const router = express.Router();

////////////////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////////////////
// The Signup Routes (Get => Form, Post => form submit)
// "/user/signup"
router.get("/signup", (req, res)=>{
    res.render("user/signup.liquid")
})

router.post("/signup", async(req,res)=>{
    // encrypt the password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    // save the user to our database
    User.create(req.body)
    .then((user)=>{
        console.log(user)
        // redirect user to login 
        res.redirect("/user/login")
    })
    .catch((error)=>{res.json({error})})
})

// The Login Routes (Get => Form, Post => form submit)
// "/user/login"
router.get("/login", (req, res)=>{
    res.render("user/login.liquid")
})

router.post("/login", (req, res)=>{
    // destructure username and password from req.body
    const {username, password} = req.body

    // search for the user
    User.findOne({username})
    .then(async (user)=>{
        // check if user exists
        if (user) {
            // compare passwords
            const result = await bcrypt.compare(password, user.password)
            if (result) {
                // store some data in the session object
                req.session.username = username
                req.session.loggedIn = true
                // redirect to Binge index page
                res.redirect("/binge");
            } else{
                // send wrong password error
                res.render("user/failPass.liquid")
            }

        } else {
            res.render("user/failUser.liquid")
        }
    })
    .catch((error)=>{res.json({error})})
})

// Logout route - get request - /user/logout
router.get("/logout", (req, res)=>{
    // destroy the session
    req.session.destroy((err)=>{
        // send user back to main page
        res.redirect("/")
    })
})

// View User Profile
router.get("/", (req, res)=>{
    User.find({username: req.session.username})
    .then((user)=>{
        res.render("user/user.liquid", {user: user})
    })
})

// Edit Profile Route
router.get("/edit", (req, res)=>{
    let id = req.params.id
    id = req.session.username
    User.find({username: id})
    .then((user)=>{
        res.render("user/edit.liquid", {user: user})
    })
})

// Update
router.post("/", (req,res)=>{
    let id = req.params.id
    id = req.session.username
    User.findOneAndUpdate({username: id}, {pfp: req.body.pfp}, {new: true})
    .then((user)=>{
        res.redirect("/binge")
    })
})
////////////////////////////////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////////////////////////////////
module.exports = router