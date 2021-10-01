export default {
  apiInitDispatch: {
    root: true,
    handler({ commit, dispatch }) {
    },
  },

  updateTitle: {
    root: true,
    handler({ commit }, title) {
      commit('updateTitle', title);
    },
  },

  updateLayout({ commit }, layout) {
    commit('updateLayout', layout);
  },

  updateFooter({ commit }, footer) {
    commit('updateFooter', footer);
  },

  updateHeader({ commit }, header) {
    commit('updateHeader', header);
  },

  isDropMenuActive({ commit }, active) {
    commit('updateDropMenu', { isActive: active });
  },

  scrollToTop() {
    window.scrollTo(0, 0);
  },
};
