import styled from 'styled-components';

export const TextareaStyled = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 69px;
  background-color: #3A3A3A;
  overflow: hidden;
  outline: none;
  border: none;
  resize: none;
  color: #FFFFFF;
  flex: 0 0 auto;
  font-weight: 400;
  font-size: 26px;
  padding: 20px 60px 15px 20px;
  &::placeholder {
    color: #D1D1D1;
    font-weight: 300;
  }
`;