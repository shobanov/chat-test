import { useSelector } from 'react-redux';

import avatar from '../assets/images/avatar.png';
import { AppRootStateType } from '../redux/store';
import { UserAvatar, UserNameTitle, HeaderContainer } from './HeaderStyles';

const Header: React.FC = () => {
  const userFirstName = useSelector<AppRootStateType, string>(state => state.chat.firstName);
  const userLastName = useSelector<AppRootStateType, string>(state => state.chat.lastName);

  return (
    <HeaderContainer>
      <UserAvatar src={avatar} alt="avatar"/>
      <UserNameTitle>
        {userFirstName + ' ' + userLastName}
      </UserNameTitle>
    </HeaderContainer>
  );
};

export default Header;
