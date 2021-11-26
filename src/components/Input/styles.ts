import { Field } from 'formik';
import styled from 'styled-components';

export const InputStyled = styled(Field)`
  height: 35px;
  border-radius: 10px;
  padding-left: 15px;
  font-size: 90%;
  border: 1px solid;
  outline: none;
  position: relative;
  & ~ p {
    top: 26px;
    & ~ p {
      top: 80px;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  position: absolute;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.2px;
  background: transparent;
  border: none;
  left: 5px;
`;