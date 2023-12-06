<script>
import { store } from '../store.js'
export default {
	name: "AppHeader",
	data() {
		return {
			store
		}

	},
	methods: {
		confirm() {
			console.log("avvia ricerca", this.store.ricerca);
			this.$emit("search")

		}

	}

}
</script>

<template>
	<header>
		<h1>Boolflix</h1>
		<input v-model="store.ricerca" @keyup.enter="confirm" type="text" placeholder="Cerca Film...">
	</header>
</template>

<style>
header {
	background-color: black;
	width: 100%;
	height: 15vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

header h1 {
	font-size: 2em;
	font-weight: bold;
	color: rgb(243, 8, 8);
}
</style>