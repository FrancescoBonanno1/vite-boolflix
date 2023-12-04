<script>
import axios from 'axios';
import { store } from './store';
import AppSearch from './AppSearch.vue';

export default {
    components: {
        AppSearch
    },
    data() {
        return {
            store
        }

    },
    methods: {
        getFilms() {
            axios.get(`${this.store.apiUrl}`).then(results => {
                console.log(results.data.results, "ecco i risultati della chiamata")
                this.store.movieInfo = results.data
                console.log(this.store.movieInfo, "ecco le cards dei film cercati")
            });
        }
    }
}
</script>

<template>
    <h1>prova</h1>
    <AppSearch @search="{ getFilms }" />
</template>

<style scoped></style>
