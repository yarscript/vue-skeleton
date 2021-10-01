export default {
    news({ news }) {
        return news.news
    },

    getSplitNews({ news }) {
        return news.splitNews;
    },

    getPageNumber({ news }) {
        return news.pageNumber;
    },

    isLoading({ news }) {
        return news.loading
    }
}
