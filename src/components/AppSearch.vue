<script>
import { store } from './store';
export default {
    name: AppSearch,
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <input type="text" placeholder="Cerca il film" v-model="store.movieInfo" @keyup.enter="$emit('search')">
</template>


<style scoped></style>