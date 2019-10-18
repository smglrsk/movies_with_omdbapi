import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MovieSchema = new Schema({
    title: {
        type: String
    },
    year: {
        type: Number
    },
    rated: {
        type: String
    },
    realised: {
        type: String
    },
    runtime: {
        type: String
    },
    genre: {
        type: String
    },
    director: {
        type: String
    },
    actors: {
        type: [String]
    },
    plot: {
        type: String
    },
    language: {
        type: [String]
    },
    country: {
        type: [String]
    },
    awards: {
        type: String
    },
    poster: {
        type: String
    },
    ratings: {
        type: [String]
    },
    metascore: {
        type: String
    },
    imdbRating: {
        type: Number
    },
    imdbVotes: {
        type: Number
    },
    imdbID: {
        type: String
    },
    type: {
        type: [String]
    },
    dvd: {
        type: String
    },
    boxoffice: {
        type: String
    },
    production: {
        type: String
    },
    website: {
        type: String
    },
    response: {
        type: Boolean
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
