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
		<div v-for="card in  store.contenitore " class="cardcontainer">
			<img src="" alt="img">
			<h2>{{ card.title }}</h2>
			<h2>{{ card.original_title }}</h2>
			<p v-if="card.original_language === 'en'">
				<img src="../assets/img/gb.png" alt="">
			</p>
			<p v-else-if="card.original_language === 'ja'">
				<img src="../assets/img/jp.png" alt="">
			</p>
			<p v-else-if="card.original_language === 'de'">
				<img src="../assets/img/de.png" alt="">
			</p>
			<p v-else-if="card.original_language === 'it'">
				<img src="../assets/img/it.png" alt="">
			</p>
			<p v-else-if="card.original_language === 'ko'">
				<img src="../assets/img/kr.png" alt="">
			</p>
			<p v-else-if="card.original_language === 'fr'">
				<img src="../assets/img/fr.png" alt="">
			</p>
			<p v-else-if="card.original_language === 'no'">
				<img src="../assets/img/no.png" alt="">
			</p>
			<p v-else-if="card.original_language === 'pt'">
				<img src="../assets/img/pt.png" alt="">
			</p>
			<p v-else-if="card.original_language === 'cn'">
				<img src="../assets/img/cn.png" alt="">
			</p>
			<p v-else>
				{{ card.original_language }}
			</p>
			<span>{{ card.vote_average }}</span>
		</div>


		<div v-for="serialny in store.contenitoreSerie" class="cardcontainer">
			<img src="" alt="img">
			<h2>{{ serialny.name }}</h2>
			<h2>{{ serialny.original_name }}</h2>
			<p v-if="serialny.original_language === 'en'">
				<img src="../assets/img/gb.png" alt="">
			</p>
			<p v-else-if="serialny.original_language === 'ja'">
				<img src="../assets/img/jp.png" alt="">
			</p>
			<p v-else-if="serialny.original_language === 'de'">
				<img src="../assets/img/de.png" alt="">
			</p>
			<p v-else-if="serialny.original_language === 'it'">
				<img src="../assets/img/it.png" alt="">
			</p>
			<p v-else-if="serialny.original_language === 'ko'">
				<img src="../assets/img/kr.png" alt="">
			</p>
			<p v-else-if="serialny.original_language === 'fr'">
				<img src="../assets/img/fr.png" alt="">
			</p>
			<p v-else-if="serialny.original_language === 'no'">
				<img src="../assets/img/no.png" alt="">
			</p>
			<p v-else-if="serialny.original_language === 'pt'">
				<img src="../assets/img/pt.png" alt="">
			</p>
			<p v-else-if="serialny.original_language === 'cn'">
				<img src="../assets/img/cn.png" alt="">
			</p>
			<p v-else>
				{{ serialny.original_language }}
			</p>
			<span>{{ serialny.vote_average }}</span>
		</div>
	</section>
</template>

<style scoped>
#wrapper {
	width: 100%;
	background-color: rgb(63, 63, 63);
	height: 85vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	overflow-y: auto;

}

.cardcontainer {
	background-color: rgb(175, 42, 42);
	width: 15%;
	height: 40%;
	border: 2PX solid rgb(80, 79, 79);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
</style>
