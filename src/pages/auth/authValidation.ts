import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name is too short')
    .max(15, 'First name is too long')
    .required('First name required'),
  lastName: Yup.string()
    .min(2, 'Last name is too short')
    .max(15, 'Last name is too long')
    .required('Last name required'),
});