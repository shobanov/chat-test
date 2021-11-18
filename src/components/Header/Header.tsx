import styled from 'styled-components';

import avatar from '../../img/avatar.png';

const HeaderWrapper = styled.div`
  background-color: #0F0F0F;
  height: 75px;
  margin-bottom: 35px;
  position: relative;
`;

const HeaderAvatar = styled.img`
  margin: 15px 0 15px 28px;
  width: 45px;
  height: 45px;
`;

const HeaderNickname = styled.span`
  color: #D9D9D9;
  width: 50%;
  position: absolute;
  top: 20px;
  left: 91px;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderAvatar src={avatar} alt="avatar" width='45px'/>
      <HeaderNickname>
        Ilon Mask
      </HeaderNickname>
    </HeaderWrapper>
  );
};

export default Header;
