import factory from '../requestFactory';


export default ({login, sms_code, sms_token}) => {
    return factory()
        .post('/password/forgot', {
            login,
            sms_code,
            sms_token,
        })

};
