import getProducts from "@/modules/app/modules/product/modules/http/api/getProducts";

export default {
    productsInit: async function ({ state, commit, getters }) {
        getProducts().then((response) => {
            commit('SET_PRODUCT_LIST', response.resource);
        }).finally(() => state.loading = true);
    },
}
