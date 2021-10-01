import factory from '../requestFactory';

export default ({old_password,new_password}) => {
    return factory()
        .post('patient/change-password', {
            old_password:old_password,
            new_password:new_password,
        });
}
