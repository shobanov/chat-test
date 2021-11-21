import { useSelector } from 'react-redux';

import avatar from '../../../assets/images/avatar.png';
import { AppRootStateType } from '../../../redux/store';
import { Content, SentMessageContainer, UserName, Text, Time, UserAvatar } from './SentMessageStyles';

type MessagePropsType = {
  message: string;
  date: string;
};

const Message: React.FC<MessagePropsType> = ({ message, date }) => {
  const userFirstName = useSelector<AppRootStateType, string>(state => state.chat.firstName);
  const userLastName = useSelector<AppRootStateType, string>(state => state.chat.lastName);

  return (
    <SentMessageContainer>
      <UserAvatar src={avatar} alt="avatar"/>
      <Content>
        <UserName>
          {userFirstName + ' ' + userLastName}
        </UserName>
        <Text>
          {message}
        </Text>
        <Time>
          {date}
        </Time>
      </Content>
    </SentMessageContainer>
  );
};

export default Message;