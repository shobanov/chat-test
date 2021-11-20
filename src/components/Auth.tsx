import { Form, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as Yup from 'yup';
import { NameType, saveNameAC } from '../redux/chat';

// styles
const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #252527;
`;

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  @media (max-width: 480px) {
    width: 300px;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: aliceblue;
  margin-bottom: 30px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: auto 15px;
  text-align: center;
  position: relative;
  & #secondInput {
      margin-top: 15px;
  };
  #firstError {
    top: 26px;
  };
  #secondError {
    top: 80px;
  };
`;

const Input = styled.input`
  height: 35px;
  border-radius: 10px;
  padding-left: 15px;
  font-size: 90%;
  border: 1px solid;
  outline: none;
`;

const Button = styled.button`
  height: 35px;
  width: 30%;
  border-radius: 8px;
  margin-top: 15px;
  font-size: 90%;
  border: 1px solid;
  margin: 0 auto;
  margin-top: 20px;
  font-weight: 500;
`;

const ErrorMessage = styled.p`
  color: red;
  position: absolute;
  font-size: 12px;
  font-weight: 200;
  background: transparent;
  border: none;
  left: 5px;
`;

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

  function onSubmit(values: NameType) {
    dispatch(saveNameAC(values));
  };

  return (
    <AuthContainer>
      <Formik initialValues={ {firstName: '', lastName: ''} } onSubmit={onSubmit} validationSchema={ValidationSchema}>
        {({ errors, touched }) => (
          <AuthWrapper>
            <Title>Enter your first and last name to enter the chat</Title>
            <FormBox as={Form}>
              <Input
                as={Field}
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
                as={Field}
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
            </FormBox>
          </AuthWrapper >
        )}
      </Formik >
    </AuthContainer>
  );
};

export default Auth;