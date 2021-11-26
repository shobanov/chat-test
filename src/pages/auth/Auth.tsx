import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ValidationSchema } from './validation';
import { NameType, saveNameAC } from '../../redux/chat';
import { AuthContainer, AuthWrapper, Button, ErrorMessage, FormContainer, Input, Title } from './styles';

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
};

export const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(values: NameType) {
    dispatch(saveNameAC(values));
    history.push('/chat');
  };

  return (
    <AuthContainer>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
        {({ errors, touched }) => (
          <AuthWrapper>
            <Title>Enter your first and last name to enter the chat</Title>
            <FormContainer>
              <Input
                type="text"
                name="firstName"
                placeholder="First name"
              />
              {
                errors.firstName && touched.firstName ? (
                  <ErrorMessage id="firstError">{errors.firstName}</ErrorMessage>
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
                  <ErrorMessage id="secondError">{errors.lastName}</ErrorMessage>
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