export default {
    getTitle({ seo }) {
        return seo.title
    },

    getDescription({ seo }) {
        return seo.description
    },

    isLoading({ seo }) {
        return seo.loading
    }
}
