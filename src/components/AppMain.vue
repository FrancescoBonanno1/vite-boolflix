<script>
import { options } from './market'
export default {
    data() {
        return {
            options
        }
    },
    mounted() {

    },

    methods: {
        getFilms() {
            axios.get(this.options.url).then(risultato => {
                this.options.Info = risultato.data;
            }
            )
        }
    }
}

</script>

<template>
    <section id="wrapper">
        <div class="cardcontainer">
            <img src="" alt="img">
            <h2></h2>
            <p></p>
        </div>
    </section>
</template>

<style scoped>
#wrapper {
    width: 100%;
    background-color: rgb(63, 63, 63);
    height: 100vh;
}

.cardcontainer {
    background-color: rgb(206, 41, 41);
    width: 30%;
    height: 30%;
}
</style>
