import Vue from 'vue';
import Vuex from 'vuex';

import state from '@/modules/core/store/state';
import actions from '@/modules/core/store/actions';
import mutations from '@/modules/core/store/mutations';

/** Project modules import here  **/
import product from '@/modules/app/modules/product/store';
import lang    from '@/modules/core/modules/lang/store';
import news  from '@/modules/app/store';
import feedback  from '@/modules/app/store';
import seo  from '@/modules/app/store';

import { localStoragePlugin } from '@/modules/core/store/plugins/localStorage';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: { core: state },
  modules: {
    product, lang, text, news, feedback, seo
  },
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions,
  },

  plugins: [localStoragePlugin],
});

export default store;
