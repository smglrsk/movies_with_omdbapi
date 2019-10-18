import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CommentSchema = new Schema({
    movieId: {
        type: mongoose.Schema.Types.ObjectId
    },
    body: {
        type: String,
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
