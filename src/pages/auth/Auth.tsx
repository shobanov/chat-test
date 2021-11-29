import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ValidationSchema } from './validation';
import { AuthContainer, AuthWrapper, AuthForm, Title } from './styles';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
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
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
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