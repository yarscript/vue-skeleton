// import Vue from 'vue';
// import Vuex from 'vuex';
//
// import state from '@/modules/core/store/state';
// import actions from '@/modules/core/store/actions';
// import mutations from '@/modules/core/store/mutations';
//
// /** Project modules import here  **/
// import products  from '@/modules/app/modules/products/store';
// import cart from '@/modules/app/modules/cart/store'
//
// import { localStoragePlugin } from '@/modules/core/store/plugins/localStorage';
//
// Vue.use(Vuex);
//
// const store = new Vuex.Store({
//   state: { core: state },
//   modules: {
//     products, cart
//   },
//   mutations: {
//     ...mutations,
//   },
//   actions: {
//     ...actions,
//   },
//
//   plugins: [localStoragePlugin],
// });
//
// export default store;

import state     from './state';
import actions   from './actions';
import mutations from './mutations';
import getters   from './getters';


const store = {
    namespaced: true,
    state     : { ...state },
    mutations: {
        ...mutations,
    },
    actions  : {
        ...actions,
    },
    getters  : {
        ...getters
    },
    plugins: [  ]
};

export default store;
