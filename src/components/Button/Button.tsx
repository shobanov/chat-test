import { ButtonStyled } from './styles';

interface IProps  {
  type?: 'submit';
};

export const Button: React.FC<IProps> = ({ type, children }) => {
  return (
    <ButtonStyled type={type}>{children}</ButtonStyled>
  );
};