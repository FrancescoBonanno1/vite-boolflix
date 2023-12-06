<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import { store } from './store.js'
export default {
	components: {
		AppHeader,
		AppMain
	},
	data() {
		return {
			store
		}
	},

	mounted() {
	},

	methods: {
		getInfoOld() {
			const address = `${store.api_url}?api_key=${store.api_key}&query=${store.ricerca}`;

			axios.get(address).then(res => {
				this.store.contenitore = res.data.results
				console.log(this.store.contenitore)
				console.log(res.data.results, "dati ricevuti");



			})

		},
		getInfo() {


			const options = {
				method: 'GET',
				url: this.store.api_url,
				params: {
					query: this.store.ricerca,
					api_key: this.store.api_key
				}
			};

			axios.request(options).then(response => {
				this.store.contenitore = response.data.results
			})
		},
		getInfoSeries() {
			const series = `${store.api_Series}?api_key=${store.api_key}&query=${store.ricerca}`;

			axios.get(series).then(res => {
				this.store.contenitoreSerie = res.data.results

				console.log(res.data.results, "dati ricevuti per le serie");



			})
		}
	}
}
</script>


<template>
	<AppHeader @search="getInfo(); getInfoSeries()" />
	<AppMain />
</template>

<style scoped></style>
