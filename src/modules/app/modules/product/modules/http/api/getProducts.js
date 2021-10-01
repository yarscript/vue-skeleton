import factory from '@/modules/http/api/requestFactory';

export default async(payload) => {
    return factory()
        .get('/product', payload);
}
