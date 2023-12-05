import axios from 'axios';

export const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
        query: 'Deadpool',
        language: 'en-US',
        api_key: 'c9783224abe7e0c6744c19a5889bd43a'
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
