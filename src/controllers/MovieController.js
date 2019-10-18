import mongoose from 'mongoose';
import { MovieSchema } from '../models/MovieModel';
import request  from 'request';

const Movie = mongoose.model('Movie', MovieSchema);

export const addNewMovie = (req, res) => {
    
    let query=req.body.title;
    
    let url='https://www.omdbapi.com/?t=' + query + '&apikey='+process.env.OMDBAPI_KEY; 

    request(url, function(error, response, body){ 

        if(error)
        {
        
            res.send(error);
        }

        if(!error && response.statusCode == 200){ 
            let data = JSON.parse(body);


        
            
              if (data.Response =='False')
              {
                res.send(data.Error);  
              }

            let newMovie = new Movie();

        
           newMovie.title=data.Title;
           newMovie.year=data.Year;
           newMovie.rated=data.Rated;
           newMovie.released=data.Released;
           newMovie.runtime=data.Runtime;
           newMovie.genre=data.Genre;
           newMovie.director=data.Director;
           newMovie.writer=data.Writer;
           newMovie.actors=data.Actors;
           newMovie.plot=data.Plot;
           newMovie.language=data.Language;
          newMovie.country=data.Country;
          newMovie.awards=data.Awards;
          newMovie.poster=data.Poster;
          //newMovie.ratings=data.Ratings;
          newMovie.metascore=data.Metascore;
          newMovie.imdbRating=data.imdbRating;
          //newMovie.imdbVotes=data.imdbVotes;
          newMovie.imdbID=data.imdbID;
          newMovie.type=data.Type;
          newMovie.dvd=data.DVD;
          newMovie.boxoffice=data.BoxOffice;
          newMovie.poduction=data.Production;
          newMovie.website=data.Website;
          //newMovie.response=data.Response;

           
           newMovie.title=data.Title;
   
            
            newMovie.save((err, movie) => {
        
            if (err) {
                res.send(err);
            }
            res.json(movie);
          });




            
            
        };
});
    
                        
};





export const getMovies = (req, res) => {
    Movie.find({}, (err, movie) => {
        if (err) {
            res.send(err);
        }
        res.json(movie);
    });
};



