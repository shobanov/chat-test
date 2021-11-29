import { Form } from 'formik';
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #252527;
  height: 100vh;
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: aliceblue;
  margin-bottom: 30px;
  font-weight: 300;
`;

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: auto 15px;
  text-align: center;
  position: relative;
  & :first-child {
    margin-bottom: 15px;
  }
`;