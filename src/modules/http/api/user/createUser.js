import factory from '../requestFactory';

export default ({patient,password,confirm_password,phone}) => {
    return factory()
        .post('/patient/create-user', {
            patient_id:patient,
            password:password,
            confirm_password:confirm_password,
            phone:phone,
        });
}
