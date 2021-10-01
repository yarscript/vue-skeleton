export default {
    /**
     * @param state
     * Get texts state selector
     */
    texts: (state) => state.texts,

    /**
     * @param state
     * Get loading state selector
     */
    isLoading: (state) => state.loading,

    /**
     * @param state
     * Get languages list state selector
     */
    getLangsList: (state) => state.list,

    /**
     * @param state
     * Get selected language state selector
     */
    selectedLang: (state) => state.selected,
}
