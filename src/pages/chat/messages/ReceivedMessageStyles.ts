import styled from 'styled-components';

export const ReceivedMessageContainer = styled.div`
  margin: 0 28px 9px 28px;
  display: flex;
  justify-content: end;
`;

export const Content = styled.div`
  max-width: 469px;
  width: 469px;
  min-height: 76px;
  padding: 10px;
  margin-left: 17px;
  border-radius: 9px;
  background-color: #14FF72;
  position: relative;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  word-wrap: break-word;
  color: #FFFFFF;
`;

export const Time = styled.span`
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 79px;
  color: #DFDFDF;
`;