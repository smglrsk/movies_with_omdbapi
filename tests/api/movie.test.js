const express =require("express");
const request = require('supertest');

const app = require('../../index');
const movieRepository = require('../../src/repositories/MovieRepository');
const sampleMovieList = require('../data/sampleMovieList.json');

const app = express();

jest.mock('../../src/repositories/MovieRepository')


test('POST /movies create should return object with movie details when creating new one', () => {    
    const sampleMovie = sampleMovieList[0];
    movieRepository.save.mockResolvedValue(sampleMovie);
    return request(app).post('/movies')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
        .send({'title' : sampleMovie.title})
        .then(response => {
            expect(response.statusCode).toBe(201)
            expect(response.body).toEqual(sampleMovie)
        })
})

test('GET /movies should fetch list of all movies already present in application database', () => {
    movieRepository.getAll.mockResolvedValue(sampleMovieList);
    return request(app).get('/movies')
            .set('Accept', 'application/json')
             .expect('Content-Type', /json/)
          .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(sampleMovieList)
    })
})

