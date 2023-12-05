import axios from 'axios';

export const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie?api_key=c9783224abe7e0c6744c19a5889bd43a&query=kill%20bill',
    params: {
        query: 'kill%20bill',
        include_adult: 'true',
        language: 'en-US',
        primary_release_year: '2007',
        page: '1',
        region: 'USA',
        year: '2015'
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer c9783224abe7e0c6744c19a5889bd43a'
    },
    Info: []
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
