import { InputButton } from './styles';

interface IProps {
  type?: 'button' | 'submit';
  hasValue: boolean;
};

export const IconButton: React.FC<IProps> = ({ type = 'button', hasValue }) => {
  return (
    <InputButton type={type} hasValue={hasValue} />
  );
};