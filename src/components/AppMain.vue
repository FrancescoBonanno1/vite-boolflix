<script>
import axios from 'axios';
import { market } from './market';
export default {
    data() {
        return {
            market
        }
    },
    methods: {
        getFilms() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=947f61cd40d96768ce0ed9f6d316bd3f&query=Deadpool`).then(res => {
                console.log(res.results.original_language)
                this.market.movieInfo = res.results
                console.log(this.market.movieInfo)
            });
        }
    }
}
</script>

<template>
    <h1>prova</h1>
</template>

<style scoped></style>
