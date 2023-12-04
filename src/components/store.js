import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=947f61cd40d96768ce0ed9f6d316bd3f&query=Deadpool",
    movieInfo: []
});

