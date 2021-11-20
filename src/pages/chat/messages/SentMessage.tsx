import { useSelector } from 'react-redux';

import avatar from '../../../assets/images/avatar.png';
import { AppRootStateType } from '../../../redux/store';
import { Content, SentMessageWrapper, UserName, Text, Time } from './SentMessageStyles';

type MessagePropsType = {
  message: string;
  date: string;
};

const Message: React.FC<MessagePropsType> = ({ message, date }) => {
  const yourFirstName = useSelector<AppRootStateType, string>(state => state.chat.firstName);
  const yourLastName = useSelector<AppRootStateType, string>(state => state.chat.lastName);
  
  return (
    <SentMessageWrapper>
      <img src={avatar} alt="avatar" width="45px"/>
      <Content>
        <UserName>
          {yourFirstName + ' ' + yourLastName}
        </UserName>
        <Text>
          {message}
        </Text>
        <Time>
          {date}
        </Time>
      </Content>
    </SentMessageWrapper>
  );
};

export default Message;