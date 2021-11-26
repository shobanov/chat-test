import styled from "styled-components";

interface IProps {
  size: 'large' | 'small';
};

export const AvatarStyled = styled.img<IProps>`
  width: ${props => props.size === 'small' ?
"45px" : "60px"};
  margin: ${props => props.size === 'small' ?
"15px 0 15px 28px" : "0"};
`;