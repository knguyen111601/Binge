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

#### User Profile
In the user profile model, there is the place for their username, password, as well as their profile picture. Upon creation of the account, the user's profile image will be a default blank image. The user can then edit this later by clicking on their profile and editing it. 

#### Connections
This model will be the method for connecting to MongoDB and logging the events such as connecting or disconnecting. 

## Route Table

#### Binge Routes
| url | method | action |
|-----|--------|--------|
| /binge | get | get all movies and shows (index)|
| /binge/movie/:id | get | get a particular movie|
| /binge/show/:id | get | get a particular show |
| /binge/new | get | create a new movie or show |
| /binge/movie/:id/edit | get | edit a movie |
| /binge/show/:id/edit | get | edit a show |
| /binge/movie/:id | put | update movie |
| /binge/show/:id | put | update show |
| /binge | delete | delete movie or show |

#### My List Routes
| url | method | action |
|-----|--------|--------|
| /binge/mylist | get | get all movies and shows (index)|
| /binge/mylist/movie/:id | get | get a particular movie|
| /binge/mylist/show/:id | get | get a particular show |
| /binge/mylist/new | get | create a new movie or show |
| /binge/mylist/movie/:id/edit | get | edit a movie |
| /binge/mylist/show/:id/edit | get | edit a show |
| /binge/mylist/movie/:id | put | update movie |
| /binge/mylist/show/:id | put | update show |
| /binge/mylist | delete | delete movie or show |
| /binge/mylist/:id/ | post | change movie type to watched |
| /binge/mylist/:id/delete | delete | delete movie or show from watched list|

#### User Routes
| url | method | action |
|-----|--------|--------|
| /user/signup | get | signup page |
| /user/signup | post | creates user |
| /user/login | get | login page |
| /user/login | post | checks if user exists and logs in |
| /user/logout | get | destroys session and logs out |
| /user | get | shows user profile |
| /user/edit | put | edit user profile |
| /user | post | update user profile |



## User Stories

-  I should see my list of shows and movies that I added on the index page..

- I should see a show page for the movie or show I click on with Image, description, release date, and cast.

- I should be able to add, edit, or delete movies or shows easily. 

- I should be able to add movies/shows to my list by clicking the add to my list button

- I should be able to mark movies or shows as watched and have them move to a "watched" list

- I should be able to edit my profile by clicking on the user in the top and clicked edit

- I should be able to edit movies once I have added them to my watch list

## Challenges 

- A challenge erupted from when I was trying to create a form for creating new movies or shows. I found that it would be better to have the "type" section to be a checkbox rather than having the user type out "movie" or "show" in case of typos. However, I found that checkboxes allow you to select multiple choices and that would not work with my schema. I changed it to a "radio" to allow for only one choice between the two. Then, I had to make the value equal to either "movie" or "show". This returns that exact string of the value. 

- Another challenge also came from the form. I have a nested object under my cast section in the schema. A form can't exactly have inputs for those nested object items. What I did to resolve this is to have a place to input for each of the nested items and allow the user to submit it. However, what happens behind the scenes is each of those items in the req.body are then set to equal to the nested object items using dot notation in the route object. 

- I ran into a stop when I was creating the edit route. I rediscovered the issue with the "radio" button. I had to find a way to have the correct entertainment type selected depending on whether the entertainment was a show or movie. My solution was to create an if statement that said if the type was a movie then have that selected. Else, it would have show selected. 

- Creating a profile picture for the user was quite tedious. It required me to create a default image for each user when they signup. Then, I had to change all of the routes in the binge.js to first look for the user and their profile picture so that it can be seen on the layout of every page. 

- Creating a rating system required me to ensure that the user had watched the movie/show first. I did this by making an if statement that created the rating form if the movie type was "watched" rather than "movie" or "show". 
## List of Technologies 
