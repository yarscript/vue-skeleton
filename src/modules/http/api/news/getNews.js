import factory from '../requestFactory';

export default async(payload, pageNumber = 1) => {
    return factory()
        .get('/news?limit=2&page=' + pageNumber, payload);
}
