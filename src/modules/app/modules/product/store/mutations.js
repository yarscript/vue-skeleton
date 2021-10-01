export default {
    SET_PRODUCT_LIST(state, products) {
        products.forEach((product) => {
            if (product.is_special === '1') {
                state.specialProduct = product
            } else if (product.is_sales === '1') {
                state.salesProduct = product
            } else {
                state.products.push(product)
            }
        })
    },

    productStateUpdate(state, product) {
        state.product = product;
    }
}
