# Project2--Quotation-Station

Explanations of the technologies used

jQuery- Used jQuery to create an add quote and edit quote form that allows for the user to make the changes they prefert. jQuery goes hand in hand with the AJAX calls that we use to POST, PUT and DELETE the quote information into the database while adding, editing or deleting. We also used arrow functions to make the code much easier to read.

CSS- Used a color pallete online to give the app the color scheme it currently has. I was able to use many different classes and ids to organize each individual page and provide different buttons and links for each page.

HTML- Combined HTML with mustache-express in order to loop the data through the desired page with the corresponding information such as quote and quote author. Used break and header tags to organize the show page as well as forms and inputs with password authorization and inputting quotes etc.

All NPM packages- Used all the NPM packages like express, mustache-express, nodemon, body-parser and most importantly pg-promise. Pg-promise allows for us to connect to our server and interact with the databse. The new NPM package I used was jshint, it was very helpful in identifying small syntax errors and other small problems in my code

API- I used an API key from forismatic and created an axios call to render each random quote onto the screen. Each time you refresh the page, the API key will render a new quote.

SQL- This technology allowed for me to store quotes and user information in a database that would update with calls from the quotes model and user model. 



# Wireframes
![picture](IMG_1169 3.JPG)


# User Stories 
As a user I want my app to be able to provide a nice user experience where they can generate random quotes and save/add them to their favorites. Anyone will be able to view these quotes and be inspired by them, whenever they choose.



# The approach taken

My approach started with the idea of a random quote generator and I knew I wanted a save, add and edit page. When creating the wireframes, I knew I had to map out each page and in the end I decided to make the show/save page the same. It was a question of being able to link those pages together correctly. 

I started with password authorization first because that could've been the biggest roadblock to get through later on and it just made more sense to start where the app's home page was going to be. 

Then it was the axios call to get the quote rendered from the API key to the browser to display a random quote. 

After that, I moved onto the add quote form to add quotes to the database. After writing the ajax call in jQuery, I was able to get quotes added to the database.

I was able to follow similar steps to complete show, edit and delete functions of the app. There were some variations in file paths as well.

Once that was comlpete, I styled the app.


# Installation instructions (if needed)

Just simply sign up!





# Unsolved problems

When a quote is edited, it goes down to the bottom of the show page rather than where it originally was before. 

The API key sometimes would send a bad string so the quote and quote author wouldn't print on the screen.

