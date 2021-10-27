# Project 2
#### by Kenny Nguyen

## Project Summary

This app is going to be an app for people that love binge watching movies and shows. The app will be a way for people to search and add movies and shows to a "to-watch" list. Users will have the option to click a movie or show and read the details about it on a show page. Also, there will be options to create, edit, and delete movies or shows as the user pleases.

The tools I will be using are: 
1. Express
2. Liquid-Express-Views
3. Liquid
4. dotenv
5. Mongoose
6. MongoDB
7. Method-Override
8. AJAX? Not sure as this was my idea for grabbing movies and shows like we had before

## Models

List here any models in your app and their properties 
Models I will have in my app are:
#### Movies & Shows
In the movies or shows model, there will be a schema that entails the details of the movie or show. This will include the poster image (if applicable), the title, and the description. 

#### Connections
This model will be the method for connecting to MongoDB and logging the events such as connecting or disconnecting. 

## Route Table

List your routes in a table 
| url | method | action |
|-----|--------|--------|
| /towatch | get | get all movies and shows (index)|
| /towatch/movie/:id | get | get a particular movie|
| /towatch/show/:id | get | get a particular show |
| /towatch/new | get | create a new movie or show |
| /towatch/movie/:id/edit | get | edit a movie |
| /towatch/show/:id/edit | get | edit a show |
| /towatch/movie/:id | put | update movie |
| /towatch/show/:id | put | update show |
| /towatch | delete | delete movie or show |



## User Stories

-  I should see my list of shows and movies that I added on the index page..

- I should see a show page for the movie or show I click on with Image, description, release date, and cast.

- I should be able to add, edit, or delete movies or shows easily. 

- I should be able to mark movies or shows as watched and have them move to a "watched" list


## Challenges 

- Detail roadblocks and anything you did to overcome them whether you did or didn't

## List of Technologies 
