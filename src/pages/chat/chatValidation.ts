import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  message: Yup.string().required(),
});