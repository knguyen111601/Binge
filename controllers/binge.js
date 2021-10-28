////////////////////////////////////////////////////////////////////////
// Import Dependencies 
////////////////////////////////////////////////////////////////////////
const express = require("express");
const Movies = require("../models/movies.js");
const moviesSeed = require("../models/seed.js")
////////////////////////////////////////////////////////////////////////
// Create Router
////////////////////////////////////////////////////////////////////////
const router = express.Router();

/////////////////////////////////
// Router Middleware
/////////////////////////////////
// middleware to check if user is logged in
router.use((req, res, next)=>{
    // check if logged in 
    if (req.session.loggedIn) {
        // send to routes
        next()
    } else {
        res.redirect("/user/login")
    }
})

////////////////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////////////////
router.get("/seed", (req, res)=>{
    Movies.deleteMany({})
    .then((movies)=>{
        Movies.create(moviesSeed)
    .then("movies", (movies)=>{
        console.log(movies)
    })
    .catch("error", (error)=>{console.log(error)})
    })
})

// Index route - get request to "/binge", returns all movies and shows
router.get("/", (req, res)=>{
    Movies.find({}).sort({order: 1})
    .then((movies)=>{
        res.render("index.liquid", {movie: movies})
    })
    .catch((error) => {
        res.json({error})
    })
});
// New route - get request to "/binge/new", returns a form to create a new movie/show
router.get("/new", (req, res)=>{
    res.render("new.liquid");
})


// Create route - post request to "/binge", posts the input from the "new" form
router.post("/", (req, res)=>{
    const nest = {
        title: req.body.title,
        type: req.body.type,
        releaseDate: req.body.releaseDate,
        img: req.body.img,
        desc: req.body.img,
        director: req.body.director,
        cast: {
            cast1: req.body.cast1,
            cast2: req.body.cast2,
            cast3: req.body.cast3
        }
    }
    Movies.create(nest)
    .then((movie=>{
        res.redirect("/binge")
    }))
    .catch((error) => {
        res.json({error})
    })
});

// Delete Route
router.delete("/:id", (req, res)=>{
    id = req.params.id
    Movies.findByIdAndDelete(id)
    .then((movie)=>{
        res.redirect("/binge")
    })
    .catch((error) => {
        res.json({error})
    })
})

// Edit Route
router.get("/:id/edit", (req, res)=>{
    const id = req.params.id
    Movies.findById(id)
    .then((movie)=>{
        res.render("edit.liquid", {movie: movie})
    })
    .catch((error) => {
        res.json({error})
    })
})

// Update Route
router.put("/:id", (req, res)=>{
    const id = req.params.id
    const nest = {
        title: req.body.title,
        type: req.body.type,
        releaseDate: req.body.releaseDate,
        img: req.body.img,
        desc: req.body.img,
        director: req.body.director,
        cast: {
            cast1: req.body.cast1,
            cast2: req.body.cast2,
            cast3: req.body.cast3
        }
    }
    Movies.findByIdAndUpdate(id, nest)
    .then((movie)=>{
        res.redirect(`/binge/${id}`)
    })
    .catch((error) => {
        res.json({error})
    })
})


// Search Route
router.post("/search", (req, res)=>{
    Movies.find({title: req.body.search})
    .then((movie)=>{
        const id = movie[0]._id
        res.redirect(`/binge/${id}`)
    })
    .catch((error) => {
        res.json({error})
    })
})

router.get("/mylist", (req, res)=> {
    res.render("mylist.liquid")
})








// Show Route - get request to "/binge/:id, returns that particular movie or show
router.get("/:id", (req, res)=>{
    const id = req.params.id
    Movies.findById(id)
    .then((movies)=>{
        console.log(movies)
        res.render("show.liquid", {movie: movies})
    })
})

////////////////////////////////////////////////////////////////////////
// Export router
////////////////////////////////////////////////////////////////////////
module.exports = router