import { useSelector } from 'react-redux';

import { Time } from '../../../../components/Time/Time';
import { AppRootStateType } from '../../../../redux/store';
import { Avatar } from '../../../../components/Avatar/Avatar';
import { Content, MessageContainer, UserName, Text } from './styles';

type MessagePropsType = {
  firstName: string;
  lastName: string;
  message: string;
  time: string;
};

export const Message: React.FC<MessagePropsType> = ({
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
      { isOwner && <Avatar size="60px"/> }
      <Content isOwner={isOwner}>
        {
          isOwner &&
          <UserName>
            {firstName + ' ' + lastName}
          </UserName>
        }
        <Text isOwner={isOwner}>{message}</Text>
        <Time time={time} color="#DFDFDF" />
      </Content>
    </MessageContainer>
  );
};