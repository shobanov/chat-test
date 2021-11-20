import { useHistory } from 'react-router-dom';
import { Form, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { NameType, saveNameAC } from '../../redux/chat';
import { AuthContainer, AuthWrapper, Button, ErrorMessage, FormContainer, Input, Title } from './AuthStyles';

// validation 
const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name too short')
    .max(20, 'First name too short')
    .required('First name required'),
  lastName: Yup.string()
    .min(2, 'Last name too short')
    .max(20, 'Last name too long')
    .required('Last name required'),
});

const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  function handleSubmit(values: NameType) {
    dispatch(saveNameAC(values));
    history.push('/chat');
  };

  return (
    <AuthContainer>
      <Formik initialValues={ {firstName: '', lastName: ''} } onSubmit={handleSubmit} validationSchema={ValidationSchema}>
        {({ errors, touched }) => (
          <AuthWrapper>
            <Title>Enter your first and last name to enter the chat</Title>
            <FormContainer as={Form}>
              <Input
                type="text"
                name="firstName"
                placeholder="First name"
              />
              {
                errors.firstName && touched.firstName ? (
                  <ErrorMessage id="firstError">{ errors.firstName }</ErrorMessage>
                ) : null
              }
              <Input
                id="secondInput"
                type="text"
                name="lastName"
                placeholder="Last name"
              />
              {
                errors.lastName && touched.lastName ? (
                  <ErrorMessage id="secondError">{ errors.lastName }</ErrorMessage>
                ) : null
              }
              <Button type="submit">
                Entry
              </Button>
            </FormContainer>
          </AuthWrapper >
        )}
      </Formik >
    </AuthContainer>
  );
};

export default Auth;