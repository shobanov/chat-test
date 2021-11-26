import { AvatarStyled } from './styles';
import avatar from '../../assets/images/avatar.png';

interface IProps  {
  size: 'large' | 'small';
};

export const Avatar: React.FC<IProps> = (props) => {
  return (
    <AvatarStyled src={avatar} alt="avatar" { ...props } />
  );
};