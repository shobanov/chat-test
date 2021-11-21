import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  width: 100%;
  height: 69px;
  position: fixed;
  bottom: 0;
`;

export const Textarea = styled(Field)`
  box-sizing: border-box;
  height: 69px;
  width: 100%;
  background-color: #3A3A3A;
  outline: none;
  border: none;
  resize: none;
  color: #D1D1D1;
  font-weight: 300;
  font-size: 26px;
  padding: 18px 60px 20px 20px;
  position: relative;
`;

export const ImageButton = styled.input`
  position: absolute;
  right: 20px;
  bottom: 15px;
  width: 35px;
`;

export const Input = styled.input``;