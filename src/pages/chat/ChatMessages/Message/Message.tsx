import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../../../redux/store';
import { Avatar } from '../../../../components/Avatar/Avatar';
import { Content, MessageContainer, UserName, Text, Time } from './styles';

interface IProps {
  firstName: string;
  lastName: string;
  message: string;
  time: string;
};

export const Message: React.FC<IProps> = ({
  firstName,
  lastName,
  message,
  time,
}) => {

const userFirstName = useSelector<AppRootStateType>(state => state.chat.firstName);
const userLastName = useSelector<AppRootStateType>(state => state.chat.lastName);
const isOwner = userFirstName === firstName && userLastName === lastName;

  return (
    <MessageContainer isOwner={isOwner}>
      { isOwner && <Avatar size="large" /> }
      <Content isOwner={isOwner}>
        {
          isOwner &&
          <UserName>{firstName + ' ' + lastName}</UserName>
        }
        <Text isOwner={isOwner}>{message}</Text>
        <Time isOwner={isOwner}>{time}</Time>
      </Content>
    </MessageContainer>
  );
};