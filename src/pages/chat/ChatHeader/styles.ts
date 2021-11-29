import styled from 'styled-components';

export const ChatHeaderContainer = styled.div`
  background-color: #0F0F0F;
  height: 75px;
  position: relative;
  margin-bottom: 35px;
`;

export const UserName = styled.p`
  color: #D9D9D9;
  margin: 0;
  position: absolute;
  top: 20px;
  left: 91px;
  font-weight: 600;
  font-size: 26px;
  @media (max-width: 527px) {
    top: 5px;
  }
`;