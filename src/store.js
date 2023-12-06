
import { reactive } from 'vue';
export const store = reactive({
	ricerca: "",
	api_url: 'https://api.themoviedb.org/3/search/movie',
	api_key: "c9783224abe7e0c6744c19a5889bd43a",
	contenitore: []
});
