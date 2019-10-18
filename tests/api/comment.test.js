const express =require("express");
const request = require('supertest');


const movieRepository = require('../../src/repositories/MovieRepository');
const commentRepository = require('../../src/repositories/CommentRepository');
const sampleMovieList = require('../data/sampleMovieList.json');
const sampleCommentsList = require('../data/sampleCommentsList.json');

const app = express();

jest.mock('../../src/repositories/MovieRepository');
jest.mock('../../src/repositories/CommentRepository');


test('POST /comments fail on adding comment to an unexisting movie', () => {
    movieRepository.getById.mockResolvedValue(new Error());        
    commentRepository.getAll.mockResolvedValue(sampleCommentsList);
    return request(app).post('/comments')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({'movieId' : '5da82d5a6c812f4d7c83xyz0', 'body' : 'good!!'})
    .then(response => {
        expect(response.statusCode).toBe(400)        
    })
})

test('POST /comments fail on adding comment to not existing movie', () => {
    movieRepository.getById.mockResolvedValue(sampleMovieList[0]);        
    commentRepository.save.mockResolvedValue({'movieId' : '5da82efa6c812f4d7c83e6d6', 'body' : 'good!!!'});
    return request(app).post('/comments')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({'movieId' : '5da82efa6c812f4d7c83e6d6', 'body' : 'good!!!'})
    .then(response => {
        expect(response.statusCode).toBe(201)        
    })
})

test('GET /comments return all comments in database', () => {
    commentRepository.getAll.mockResolvedValue(sampleCommentsList);
    return request(app).get('/comments')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(sampleCommentsList)
    })
})

