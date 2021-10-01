import getNews from "@/modules/http/api/news/getNews";

export default {
    newsInit: async function ({ state, commit, getters }) {
        getNews(undefined, state.pageNumber).then((response) => {
            commit('SET_NEWS_LIST', response.resource.data);
        }).finally(() => state.loading = true);
    },
}
