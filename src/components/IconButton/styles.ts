import styled from "styled-components";
import send from '../../assets/images/send.png';
import sendFill from '../../assets/images/sendFill.png';

interface IProps {
  hasValue: boolean;
};

export const InputButton = styled.input<IProps>`
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
  background-image: url(${props => props.hasValue ? sendFill : send});
`;