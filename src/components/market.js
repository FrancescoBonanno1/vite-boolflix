import axios from 'axios';

export const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
        query: 'Deadpool',
        include_adult: 'true',
        language: 'en-US',
        primary_release_year: '2018',
        page: '1'
    },
    headers: {
        accept: 'application/json',
        Authorization: '947f61cd40d96768ce0ed9f6d316bd3f'
    }
};


axios
    .request(options)
    .then(function (response) {
        console.log(response.results);
    })
    .catch(function (error) {
        console.error(error);
    });