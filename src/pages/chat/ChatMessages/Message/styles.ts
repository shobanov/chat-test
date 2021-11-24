import styled from 'styled-components';

interface IProps {
  isOwner: boolean;
};

export const MessageContainer = styled.div<IProps>`
  display: flex;
  ${props => props.isOwner ?
"align-items: flex-end;" :
"justify-content: end;"};
  margin: 0 28px 9px 28px;
`;

export const Content = styled.div<IProps>`
  max-width: 449px;
  width: 449px;
  min-height: 56px;
  padding: 10px;
  margin-left: 17px;
  border-radius: 9px;
  background-color: ${props => props.isOwner ?
"#464646" : "#14FF72"};
  position: relative;
`;

export const UserName = styled.span`
  color: #ECECEC;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 10px;
`;

export const Text = styled.p<IProps>`
  color: ${props => props.isOwner ?
"#ECECEC" : "#FFFFFF"};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  word-wrap: break-word;
`;