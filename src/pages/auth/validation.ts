import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name too short')
    .max(20, 'First name too short')
    .required('First name required'),
  lastName: Yup.string()
    .min(2, 'Last name too short')
    .max(20, 'Last name too long')
    .required('Last name required'),
});