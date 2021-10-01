import factory from '../requestFactory';

export default (api_token) => {
    let headers = {};

    if (api_token) {
        headers['Authorization'] = `Bearer ${api_token}`;
    }

    return factory()
        .get('/patient/info', {
            headers,
        })

};
