import state from "@/modules/core/store/state";

const defaults = { ...state };

export default {
    updateTitle(state, title) {
        state.title = title;
    },

    updateLayout(state, layout) {
        state.layout = layout;
    },

    updateFooter(state, footer) {
        state.footer = { ...state.footer, ...footer };
    },
    updateHeader(state, header) {
        state.header = { ...state.header, ...header };
    },

    updateDropMenu(state, isActive) {
        state.dropMenu = { ...state.dropMenu, ...isActive };
    },

    error(state, options) {
        state.error = { ...defaults.error };
    },

    clear(state) {
        state = { ...defaults };
    },
}
