import mongoose from 'mongoose';
import { CommentSchema } from '../models/CommentModel';
import { MovieSchema } from '../models/MovieModel';

const Comment = mongoose.model('Comment', CommentSchema);

const Movie = mongoose.model('Movie', MovieSchema);


export const addNewComment = (req, res) => {


    Movie.findById(req.body.movieId, function(err, movie) {
        if (err)  res.send(err);
      
           
            if (movie!=null)
            {
                    let newComment = new Comment(req.body);

                    newComment.save((err, comment) => {
                        if (err) {
                            res.send(err);
                        }
                        res.json(comment);
                    });
            }
            else
            {
                res.send({"Error": "Such movie ID doesnt  exist "});
            }       
      });


    
};

export const getComments = (req, res) => {
    Comment.find({}, (err, comment) => {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    });
};



