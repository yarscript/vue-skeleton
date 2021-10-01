export const gettersFactory = (APP_STATE_KEY) => ({
    state: (callback) => state => APP_STATE_KEY => callback(state[APP_STATE_KEY])
})

