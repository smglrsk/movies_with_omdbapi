import request  from 'request';
import { 
    addNewMovie, 
    getMovies 
} from '../controllers/MovieController';

const movies_routes = (app) => {
    app.route('/movies')
    .get((req, res, next) => {
        
        //console.log(`Request from: ${req.originalUrl}`)
        //console.log(`Request type: ${req.method}`)
        next();
    }, getMovies)
    
    
    .post(addNewMovie)


    
}

export default movies_routes;
