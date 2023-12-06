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
		<input v-model="store.ricerca" @keyup.enter="confirm" type="text" placeholder="Cerca Film...">
	</header>
</template>

<style></style>