import { InputButton } from './styles';

interface IProps {
  type?: 'button' | 'submit';
  isValid: boolean;
};

export const IconButton: React.FC<IProps> =({ type = 'button', isValid }) => {
  return (
    <InputButton
      type={type}
      disabled={!isValid}
    />
  );
};