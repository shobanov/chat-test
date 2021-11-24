import styled from "styled-components";

interface IProps {
  color?: string;
};

export const TimeStyled = styled.span<IProps>`
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 79px;
  color: ${props => props.color ?
props.color : "#14FF72"};
`;