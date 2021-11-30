import { InputButton } from './styles';

interface IProps {
  type?: 'button' | 'submit';
  disabled: boolean;
};

export const IconButton: React.FC<IProps> =({ type = 'button', disabled }) => {
  return (
    <InputButton
      type={type}
      disabled={disabled}
    />
  );
};