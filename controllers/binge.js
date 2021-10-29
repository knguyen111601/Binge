////////////////////////////////////////////////////////////////////////
// Import Dependencies 
////////////////////////////////////////////////////////////////////////
const express = require("express");
const Movies = require("../models/movies.js");
const moviesSeed = require("../models/seed.js")
const MyList = require("../models/mylist.js")
const Users = require("../models/user.js")
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
        Users.find({username: req.session.username})
        .then((user)=>{
            res.render("index.liquid", {movie: movies, user: user})
        })
    })
    .catch((error) => {
        res.json({error})
    })
});
// New route - get request to "/binge/new", returns a form to create a new movie/show
router.get("/new", (req, res)=>{
    Users.find({username: req.session.username})
        .then((user)=>{
            res.render("new.liquid", {user: user});
        })
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
        Users.find({username: req.session.username})
        .then((user)=>{
            res.render("edit.liquid", {movie: movie, user: user})
        })
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

router.get("/mylist", (req, res)=>{
    MyList.find({username: req.session.username})
    .then((movie)=>{
        Users.find({username: req.session.username})
        .then((user)=>{
            res.render("mylist.liquid", {movie: movie, user: user})
        })

    })
})

router.post("/mylist", (req,res)=>{
    const id = req.body.id
    Movies.findById(id)
    .then((movie)=>{
        const nest = {
            title: movie.title,
            type: movie.type,
            releaseDate: req.body.releaseDate,
            img: movie.img,
            desc: movie.img,
            director: movie.director,
            cast: {
                cast1: movie.cast.cast1,
                cast2: movie.cast.cast2,
                cast3: movie.cast.cast3
            },
            username: req.session.username
        }
        MyList.create(nest)
        .then((movie)=>{
            res.redirect("/binge/mylist")
        })
    })
})

// Delete Route
router.delete("/mylist/:id", (req, res)=>{
    id = req.params.id
    MyList.findByIdAndDelete(id)
    .then((movie)=>{
        res.redirect("/binge/mylist")
    })
    .catch((error) => {
        res.json({error})
    })
})


// Edit Route
router.get("/mylist/:id/edit", (req, res)=>{
    const id = req.params.id
    MyList.findById(id)
    .then((movie)=>{
        Users.find({username: req.session.username})
        .then((user)=>{
            res.render("mylist/edit.liquid", {movie: movie, user: user})
        })
    })
    .catch((error) => {
        res.json({error})
    })
})

// Update Route
router.put("/mylist/:id", (req, res)=>{
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
    MyList.findByIdAndUpdate(id, nest)
    .then((movie)=>{
        res.redirect(`/binge/mylist/${id}`)
    })
    .catch((error) => {
        res.json({error})
    })
})

// My List Show Route - get request to "/binge/mylist/:id", returns the movie on your list
router.get("/mylist/:id", (req, res)=>{
    const id = req.params.id
    MyList.findById(id)
    .then((movies)=>{
        Users.find({username: req.session.username})
        .then((user)=>{
            res.render("mylist/show.liquid", {movie: movies, user: user})
        })
    })
})

// Show Route - get request to "/binge/:id, returns that particular movie or show
router.get("/:id", (req, res)=>{
    const id = req.params.id
    Movies.findById(id)
    .then((movies)=>{
        Users.find({username: req.session.username})
        .then((user)=>{
            res.render("show.liquid", {movie: movies, user: user})
        })
    })
})

////////////////////////////////////////////////////////////////////////
// Export router
////////////////////////////////////////////////////////////////////////
module.exports = router