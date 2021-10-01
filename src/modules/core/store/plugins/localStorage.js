// Sync with local storage.
if (localStorage.getItem(process.env.VUE_APP_STORAGE_KEY)) {
  const syncedState = JSON.parse(localStorage.getItem(process.env.VUE_APP_STORAGE_KEY));
}

// LocalStorage plugin.
const localStoragePlugin = (store) => {
  store.subscribe((mutation, state) => {
    const syncedData = {
      // auth: state.auth,
      // cart: state.cart,
      // menu: state.menu,
    };

    localStorage.setItem(process.env.VUE_APP_STORAGE_KEY, JSON.stringify(syncedData));

    if (mutation.type === 'common/clear') {
      localStorage.removeItem(process.env.VUE_APP_STORAGE_KEY);
    }
  });
};

export { localStoragePlugin };
