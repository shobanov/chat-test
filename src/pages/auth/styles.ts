import { Field } from 'formik';
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
`;

export const FormContainer = styled.form`
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

export const Input = styled(Field)`
  height: 35px;
  border-radius: 10px;
  padding-left: 15px;
  font-size: 90%;
  border: 1px solid;
  outline: none;
`;

export const Button = styled.button`
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

export const ErrorMessage = styled.p`
  color: red;
  position: absolute;
  font-size: 12px;
  font-weight: 200;
  background: transparent;
  border: none;
  left: 5px;
`;