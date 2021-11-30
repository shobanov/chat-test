import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../../../redux/store';
import { Avatar } from '../../../../components/Avatar';
import { Content, MessageContainer, UserName, Text, Time } from './styles';

interface IProps {
  firstName: string;
  lastName: string;
  message: string;
  time: string;
};

export const ChatMessage: React.FC<IProps> = ({
  firstName,
  lastName,
  message,
  time,
}) => {
  const ownerFirstName = useSelector<AppRootStateType>(state => state.chat.firstName);
  const ownerLastName = useSelector<AppRootStateType>(state => state.chat.lastName);
  const isOwner = ownerFirstName === firstName && ownerLastName === lastName;

  return (
    <MessageContainer isOwner={isOwner}>
      { isOwner && <Avatar size="large" /> }
      <Content isOwner={isOwner}>
        {
          isOwner &&
          <UserName>{`${firstName} ${lastName}`}</UserName>
        }
        <Text isOwner={isOwner}>{message}</Text>
        <Time isOwner={isOwner}>{time}</Time>
      </Content>
    </MessageContainer>
  );
};