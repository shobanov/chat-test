import { useSelector } from 'react-redux';

import { UserName, ChatHeaderContainer } from './styles';

import { AppRootStateType } from '../../../redux/store';
import { Avatar } from '../../../components';

export const ChatHeader: React.FC = () => {
  const userFirstName = useSelector<AppRootStateType, string>(state => state.chat.firstName);
  const userLastName = useSelector<AppRootStateType, string>(state => state.chat.lastName);

  return (
    <ChatHeaderContainer>
      <Avatar size="small"/>
      <UserName>
        {`${userFirstName} ${userLastName}`}
      </UserName>
    </ChatHeaderContainer>
  );
};