import getSeo from "@/modules/http/api/seo/getSeo";

export default {
    seoInit: function ({ state, commit }) {
        getSeo().then((response) => {
            commit('SET_SEO_LIST', response.resource);
        }).finally(() => state.loading = true);
    },
}
