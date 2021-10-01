import factory from '../requestFactory';

export default async(payload) => {
    return factory()
        .get('/seo', payload);
}
