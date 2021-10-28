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

- A challenge erupted from when I was trying to create a form for creating new movies or shows. I found that it would be better to have the "type" section to be a checkbox rather than having the user type out "movie" or "show" in case of typos. However, I found that checkboxes allow you to select multiple choices and that would not work with my schema. I changed it to a "radio" to allow for only one choice between the two. Then, I had to make the value equal to either "movie" or "show". This returns that exact string of the value. 

- Another challenge also came from the form. I have a nested object under my cast section in the schema. A form can't exactly have inputs for those nested object items. What I did to resolve this is to have a place to input for each of the nested items and allow the user to submit it. However, what happens behind the scenes is each of those items in the req.body are then set to equal to the nested object items using dot notation in the route object. 

- I ran into a stop when I was creating the edit route. I rediscovered the issue with the "radio" button. I had to find a way to have the correct entertainment type selected depending on whether the entertainment was a show or movie. My solution was to create an if statement that said if the type was a movie then have that selected. Else, it would have show selected. 
## List of Technologies 
