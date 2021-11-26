import { InputButton } from './styles';

interface IProps {
  type?: 'submit'; 
};

export const IconButton: React.FC<IProps> = (props) => {
  return (
    <InputButton alt="send" { ...props }/>
  );
};