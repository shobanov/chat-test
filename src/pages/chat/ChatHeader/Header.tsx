import { useSelector } from 'react-redux';

import avatar from '../../../assets/images/avatar.png';
import { AppRootStateType } from '../../../redux/store';
import { UserAvatar, UserName, HeaderContainer } from './styles';

export const Header: React.FC = () => {
  const userFirstName = useSelector<AppRootStateType, string>(state => state.chat.firstName);
  const userLastName = useSelector<AppRootStateType, string>(state => state.chat.lastName);

  return (
    <HeaderContainer>
      <UserAvatar src={avatar} alt="avatar"/>
      <UserName>
        {userFirstName + ' ' + userLastName}
      </UserName>
    </HeaderContainer>
  );
};