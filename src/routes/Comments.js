import { 
    addNewComment, 
    getComments 
} from '../controllers/CommentController';

const comments_routes = (app) => {
    app.route('/comments')
    .get((req, res, next) => {
        
        //console.log(`Request from: ${req.originalUrl}`)
        //console.log(`Request type: ${req.method}`)
        next();
    }, getComments)
    
    
    .post(addNewComment);

    
}

export default comments_routes;