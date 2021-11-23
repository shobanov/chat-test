import { AvatarStyled } from './styled';
import avatar from '../../assets/images/avatar.png';

type AvatarPropsType = {
  size: string;
};

export const Avatar: React.FC<AvatarPropsType> = ({ size }) => {
  return (
    <>
      <AvatarStyled src={avatar} alt="avatar" sizes={size}/>
    </>
  );
};