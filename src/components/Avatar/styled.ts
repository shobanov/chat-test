import styled from "styled-components";

export const AvatarStyled = styled.img`
  width: ${props => props.sizes};
  margin: ${props => props.sizes === "45px" ? "15px 0 15px 28px"
: "0"};
`;