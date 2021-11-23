import { useSelector } from 'react-redux';

import { Avatar } from '../../../components/Avatar/Avatar';
import { Time } from '../../../components/Time/Time';
import { AppRootStateType } from '../../../redux/store';
import { Content, SentMessageContainer, UserName, Text } from './SentMessageStyles';

type MessagePropsType = {
  message: string;
  time: string;
};

export const SentMessage: React.FC<MessagePropsType> = ({ message, time }) => {
  const userFirstName = useSelector<AppRootStateType, string>(state => state.chat.firstName);
  const userLastName = useSelector<AppRootStateType, string>(state => state.chat.lastName);

  return (
    <SentMessageContainer>
      <Avatar size="60px"/>
      <Content>
        <UserName>
          {userFirstName + ' ' + userLastName}
        </UserName>
        <Text>{message}</Text>
        <Time time={time} />
      </Content>
    </SentMessageContainer>
  );
};