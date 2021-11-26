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
  min-height: 76px;
  margin-left: 17px;
  border-radius: 9px;
  background-color: ${props => props.isOwner ?
"#464646" : "#14FF72"};
  position: relative;
`;

export const UserName = styled.p`
  color: #ECECEC;
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;
  margin: 10px 10px 5px 16px;
`;

export const Text = styled.p<IProps>`
  color: ${props => props.isOwner ?
"#ECECEC" : "#FFFFFF"};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: 0 28px 11px 16px;
  word-wrap: break-word;
`;

export const Time = styled.span<IProps>`
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 79px;
  font-size: 17px;
  font-weight: 300;
  color: ${props => props.isOwner ?
"#14FF72" : "#DFDFDF"};
`;