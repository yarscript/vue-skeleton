import factory from '../requestFactory';


export default ({token, new_password}) => {
    return factory()
        .post('/password/reset-password', {
            token,
            new_password,
        })

};
