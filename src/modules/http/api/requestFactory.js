import axios from 'axios';

export default () => {
    let axiosObject = axios.create({
        baseURL: `${process.env.VUE_APP_BASE_URL}/api`,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
        },

    });

    axiosObject.interceptors.response.use((response) => {
            if(response.headers['content-type'] === "application/pdf"){
                return response
            }

            return response.data.data || response.data
        },
        function (error) {
            return Promise.reject(error)

        })

    return axiosObject;
};
