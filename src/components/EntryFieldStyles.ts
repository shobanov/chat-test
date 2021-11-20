import { Field } from 'formik';
import styled from 'styled-components';

export const EntryFieldWrapper = styled.div`
flex: 0 0 auto;
min-height: 69px;
max-width: 1440px;
position: relative;
`;

export const Input = styled.input``;
 
export const ButtonImageType = styled.input`
border: none;
outline: none;
background: transparent;
position: absolute;
right: 20px;
bottom: 20px;
width: 35px;
`;

export const Textarea = styled(Field)`
background-color: #3A3A3A;
width: 100%;
border: none;
outline: none;
overflow: hidden;
resize: none;
color: #D1D1D1;
font-style: normal;
font-weight: 300;
font-size: 26px;
line-height: 32px;
padding: 20px 60px 17px 27px;
`;