export default {
    SET_SEO_LIST(state, response) {
        state.seo.title = response[0];
        state.seo.description = response[1];
    },
}
