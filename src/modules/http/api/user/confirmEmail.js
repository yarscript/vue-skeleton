import factory from '../requestFactory';

export default ({email}) => {
    return factory()
        .post('/confirm-email', {
            email:email
        });
}
