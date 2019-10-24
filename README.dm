Node REST API  movie database with OMDB API

REST API features:
-	POST /movies:
	Based on passed data (i.e. title), other movie details are fetched from http://www.omdbapi.com/  - and saved to application database.
	Parameters: title. 
	Based on that title another external query  via OMDB API  is triggered.  Result of that query is saved in our database. 
        i.e. {"title":"Batman"}
-	GET /movies:
	fetches list of all movies already present in application database.
-	POST /comments:
	Comment are saved to the application database
        Parameters: 
        -  movie id from the abovementioned table movies comment 
        – a comment to be saved in the database 
         i.e. {"movieId":"5da716140dabb32e583c0000a",
               "body": "Very good"
               }
-	GET /comments:
	fetches a list of all comments present in application database.

Requirements
Node
Express
MongoDB


Installation
npm install
npm start

This app is just a rudimentary API  which communicates with two databases. One of them is OMDB  http://www.omdbapi.com/  (you should have your API key and place it in .env file) which is an axuliary database.  As a second one you are free to choose any database. In this case  for the sake of simplicity Mongo DB Atlas https://cloud.mongodb.com/ was used.
Mongo DB connection string is saved in .env file.
ES6 modules are used.

To be improved:  jest tests.  Currently there are some issues with babel. I hope to solve the problem  as soon as possible.




 
