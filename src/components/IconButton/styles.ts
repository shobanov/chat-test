import styled from "styled-components";
import send from '../../assets/images/send.png';

export const InputButton = styled.input`
  position: absolute;
  color: transparent;
  cursor: pointer;
  right: 20px;
  bottom: 15px;
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  background-image: url(${send});
`;