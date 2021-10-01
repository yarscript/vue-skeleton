export default {
    SET_NEWS_LIST(state, news) {
        state.news.news = news;

        const splitNews = [];
        let item = [];
        let newsKey = 0;

        state.news.news.forEach((value, key) => {
            item.push(value);

            if ((key + 1) % 2 === 0 || (key + 1) === state.news.news.length) {
                ++newsKey;
                splitNews.push(item);
                item = [];
            }
        })

        state.news.splitNews = state.news.splitNews.concat(splitNews);
        state.news.pageNumber += 1;
    },
}
