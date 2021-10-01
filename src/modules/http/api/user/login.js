import axios from "axios";
import store from "@/store";
import router from "@/router";


export default ({login, password, sms_code, sms_token}) => {
    let axiosObject = axios.create({
        baseURL: `${process.env.VUE_APP_BASE_URL}`,
        headers: {
            // 'X-Requested-With': 'XMLHttpRequest',
            // 'Content-Type': 'application/json',
        },

    });
    axiosObject.interceptors.response.use((response) => {
            if(store.getters.maintenanceMode){
                store.dispatch('setMaintanceMode',false)
            }
            if(store.getters.limitError){
                store.dispatch('setLimitError',false)
            }
            return response.data.data
        },
        function (error) {
            if(error.response.status === 503 && error.response.data.status === 'maintenance_mode'){
                store.dispatch('setMaintanceMode',true)
                router.push({ name: 'maintenance'})
            }
            if(error.response.status === 429 && error.response.data.code === 'too-many-attempts-exception'){
                store.dispatch('setLimitError',true)
            }
            return Promise.reject(error)

        })

    return axiosObject.post('/auth/login?XDEBUG_SESSION_START=PHPSTORM', {
    // return axiosObject.post('/auth/login', {
        login,
        password,
        sms_code,
        sms_token
    })

};
