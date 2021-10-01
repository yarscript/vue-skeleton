import getTexts from "@/modules/http/api/texts/getTexts";

export default {
    changeLang({ commit }, lang) {
        commit('selectlang', lang);
    },

    textsInit: async function ({ state, commit, getters }) {
        getTexts().then((response) => {
            commit('SET_TEXT_LIST', response.resource);
        }).finally(() => state.loading = true);
    },
};
