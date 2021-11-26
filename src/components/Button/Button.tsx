import { ButtonStyled } from './styles';

interface IProps  {
  type?: 'submit';
  content: string;
};

export const Button: React.FC<IProps> = ({ type, content }) => {
  return (
    <ButtonStyled type={type}>{content}</ButtonStyled>
  );
};