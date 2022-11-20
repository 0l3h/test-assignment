# Test assignment

Contents:

1. Intro
2. Project structure
3. Client side
4. Server side
5. Persisting data
6. Running localy

## Intro

-------------------------------

This project is a test assignment, which took me six days to complete. 

The main goal was to write a program, which should implement CRUD operations on a list of usernames with ranking them and changing their order. 

The app has two HTML forms in it: first one is for creating a user with random rank assigned and second one is for editing a username. Also it is possible to change user's order by clicking either **rank down** or **rank up** button.

### Technology stack
- HTML
- CSS
- PostgreSQL 
- Sequelize 
- Node.js 
- Express.js
- JavaScript

## Project structure

-------------------------------

As for this project, I chose structure with two folders, .gitignore and README file. 

Client folder inludes all of the files needed for client side to send requests, render and manipulate data. 

Server folder contains code running our server which sends static content, connects to the database and handles API requests.

.gitignore is a file used to list directories and files which shouldn't be tracked by Git.

## Client side

-------------------------------

Website is written with pure HTML and CSS. No front-end framework was used. HTML markup is set dynamically by accessing the `document` object providing us with DOM API. This is also done without any external library.

In the client folder, we have **index.html** file with link to **styles.css** and a script file, **main.js**. The main sript, located in **client/js** folder, contains a code generating a markup based on array of objects representing user entities. There's also **api** subfolder, which contains api handlers sending requests to the server.

Loading data on the client side was implemented using JavaScript fetch method. Fetch sends a request to API endpoint, returning a resolved or rejected promise. Promise is an object which is used for non-blocking, asynchronous requests, such that if a request is getting too long to complete, the fetching code doesn't block execution process of other code on the client side, thus allowing a user to interact with a web page.

When fetching data, we send a request with some headers set. For POST and PATCH requests we set `Content-Type` to `application/json`, indicating that request body should be of type JSON. For GET request we set `Accept` header to `application/json`, which requires response body to be JSON.

## Server side

-------------------------------

Server is based on Node.js - a technology based on V8 engine and used for providing environment 
for running a JavaScript code outside of the browser. API routing is handled with Express.js which simplifies parsing request URLs, based on Node.js and enhances it with some more functionallity.

When accessing host and a port where server is running, server sends us static files. It is done by using Express middleware called `express.static()`.

There's another middleware, used for parsing incoming JSON in request body. That is `express.json()`.

Express sends us a response containing some headers in it. There's also some non-standard headers like `x-powered-by`, which basically says what technology has been used for creating a server. Here we disabled it by writing `app.disable('x-powered-by')`. The reason for that is because this information can be useful to hackers.

In some code there's a line with a `use strict` written. This directive makes script to run with additional checks for bad syntax, which makes a code less prone to bugs.

## Persisting data

-------------------------------

For storing the data I chose PostgreSQL as a DBMS and Sequelize as ORM library. Sequelize provides us with ways to communicate with our database through a so-called **data access object** (DAO) via JavaScript. In addition to that, the project has a **sequelize-cli** tool installed which makes it easy to manipulate database schema, track changes made to it and populate tables with some test data.

When initializing sequelize project via sequelize-cli, we get such directories added:

- **config** - containing configuration file.
- **models** - data access objects representing a table.
- **seeders** - code which inserts initial data in the table.
- **migrations** - files which modify a table structure, create or delete a table, and used for tracking those changes.

Methods, used for making queries to the database, defined in **server/src/controllers/user.controller.js** file. 

## Running locally

-------------------------------

After cloning this project open up the terminal, go to the server folder and run following command:

    npm i

Assuming you have Node.js and NPM on your machine, this will install all of the dependencies listed in package.json file, including dependencies needed only for development stage.

In order to successfully establish a connection to the database, in the config file we need to set a database user and its password to those set locally on our system. Go to **server/src/config/config.json** file. You'll see three environments here: **development**, **test** and **production**, with configuration set for each of them. Here we'll use development environment only. By default PostgreSQL uses **postgres** user. If that's your case, only password needs to be changed.

After setting up user and password, save the file, navigate to the **server** folder with your terminal and run...
    
    npx sequelize-cli db:create

This will create a database based on configuration provided, with a **userlist_development** name.

The next step is to create an actual **users** table. To do that we need to make changes to the database using migration files in **server/src/migrations** directory by running this command:

    npx sequelize-cli db:migrate

When finished creating a database and a table run command bellow:

    npm start

This will start the server, which will run on port defined in `process.env.PORT` variable or `5000` by default. Here we'll use the default port but for production stage, we must always set sensitive data like configuration, host, port, credentials, etc in environment variable.

After starting the server, in your terminal, you should see a message like this:

> \> server@1.0.0 start <br/>
> \> nodemon src/app.js
> 
> [nodemon] 2.0.20 <br/>
> [nodemon] to restart at any time, enter `rs` <br/>
> [nodemon] watching path(s): *.* <br/>
> [nodemon] watching extensions: js,mjs,json <br/>
> [nodemon] starting `node src/app.js` <br/>
> Server is listening on port: 5000

In order to see this project in your browser, open up a browser and type in address bar the following line:

    localhost:5000

After all of that is done, you should be able to see a website.