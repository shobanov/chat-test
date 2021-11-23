import styled from 'styled-components';

export const SentMessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 28px 9px 28px;
`;

export const Content = styled.div`
  max-width: 469px;
  width: 469px;
  min-height: 76px;
  padding: 10px;
  margin-left: 17px;
  border-radius: 9px;
  background-color: #464646;
  position: relative;
`;

export const UserName = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ECECEC;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  word-wrap: break-word;
  color: #ECECEC;
`;

export const UserAvatar = styled.img`
  width: 45px;
`;