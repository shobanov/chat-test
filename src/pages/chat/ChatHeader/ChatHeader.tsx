import { useSelector } from 'react-redux';

import { Avatar } from '../../../components/Avatar';
import { AppRootStateType } from '../../../redux/store';
import { UserName, ChatHeaderContainer } from './styles';

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