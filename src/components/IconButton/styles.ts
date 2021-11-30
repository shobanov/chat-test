import styled from 'styled-components';

export const Button = styled.input`
  visibility: hidden;
  display: none;
  & ~ svg {
    fill: #14FF72;
  }
  &:disabled {
    & ~ svg {
      fill: #9B9B9B;
    }
  }
`;

export const Wrapper = styled.label`
  position: absolute;
  cursor: pointer;
  right: 20px;
  bottom: 15px;
  width: 35px;
  height: 35px;
  padding: 0;
`;
