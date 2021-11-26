import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ValidationSchema } from './validation';
import { NameType, saveNameAC } from '../../redux/chat';
import { AuthContainer, AuthWrapper, FormContainer, Title } from './styles';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

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
            <FormContainer>
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
              <Button type="submit" content="Entry" />
            </FormContainer>
          </AuthWrapper >
      </Formik >
    </AuthContainer>
  );
};