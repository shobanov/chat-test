import styled from "styled-components";

interface IProps {
  size: string;
};

export const AvatarStyled = styled.img<IProps>`
  width: ${props => props.size};
  margin: ${props => props.size === "45px" ?
"15px 0 15px 28px" : "0"};
`;