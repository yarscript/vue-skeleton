import factory from '../requestFactory';

export default async(payload) => {
    return factory()
        .post('/feedback/create', payload);
}
