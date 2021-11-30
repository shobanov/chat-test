import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AuthContainer, AuthWrapper, AuthForm, Title } from './styles';
import { ValidationSchema } from './authValidation';

import { Button } from '../../components';
import { Input } from '../../components';
import { NameType, saveNameAC } from '../../redux/chat';

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
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        <AuthWrapper>
          <Title>Enter your first and last name to enter the chat</Title>
          <AuthForm>
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last name"
            />
            <Button type="submit">Login</Button>
          </AuthForm>
        </AuthWrapper >
      </Formik >
    </AuthContainer>
  );
};