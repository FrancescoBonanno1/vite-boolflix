<script>
import { store } from '../store.js'
export default {
	name: "AppMain",
	data() {
		return {
			store
		}
	},
}


</script>

<template>
	<section id="wrapper">
		<div v-for="card in store.contenitore" class="cardcontainer">
			<img src="" alt="img">
			<h2>{{ card.original_title }}</h2>
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
