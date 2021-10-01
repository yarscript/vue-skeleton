import factory from '../requestFactory';


export default ({name, birthday, phone, password, sex}) => {
    return factory()
        .post('/patient/register', {
            name,
            birthday,
            phone,
            password,
            sex
        })

};
