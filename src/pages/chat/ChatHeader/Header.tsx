import { useSelector } from 'react-redux';

import { Avatar } from '../../../components/Avatar/Avatar';
import { AppRootStateType } from '../../../redux/store';
import { UserName, HeaderContainer } from './styles';

export const Header: React.FC = () => {
  const userFirstName = useSelector<AppRootStateType, string>(state => state.chat.firstName);
  const userLastName = useSelector<AppRootStateType, string>(state => state.chat.lastName);

  return (
    <HeaderContainer>
      <Avatar size="small"/>
      <UserName>
        {userFirstName + ' ' + userLastName}
      </UserName>
    </HeaderContainer>
  );
};