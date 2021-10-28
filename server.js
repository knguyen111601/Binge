////////////////////////////////////////////////////////////////////////
// Import Our Dependencies
////////////////////////////////////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const BingeRouter = require("./controllers/binge.js");
const UserRouter = require("./controllers/user.js")
const session = require("express-session")
const MongoStore = require("connect-mongo")
////////////////////////////////////////////////////////////////////////
// App Object
////////////////////////////////////////////////////////////////////////

const liquid = require("liquid-express-views");

// Absolute path to views folder
const viewsFolder = path.resolve(__dirname, "views/");

// Create an app with liquid passing the path to views
const app = liquid(express(), {root: viewsFolder});

////////////////////////////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////////////////////////////
// Morgan logging
app.use(morgan("tiny"));
// Method override to override request methods
app.use(methodOverride("_method"));
// Parse urlEncoded from form submissions
app.use(express.urlencoded({extended: true}));
// setup public folder to server files statically
app.use(express.static("public"));
// Middleware to create sessions (req.session)
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    resave: false
}))
////////////////////////////////////////////////////////////////////////
// Routes (router)
////////////////////////////////////////////////////////////////////////
app.get("/", (req, res)=>{
    res.render("user/index.liquid")
})

app.use("/binge", BingeRouter);

app.use("/user", UserRouter)

////////////////////////////////////////////////////////////////////////
// Listener 
////////////////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)})