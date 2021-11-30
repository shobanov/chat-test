import { Button, Wrapper } from './styles';

import { ReactComponent as Send } from '../../assets/images/send.svg';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'button' | 'submit';
};

export const IconButton: React.FC<IProps> =({ type = 'button', ...props }) => {
  return (
    <Wrapper>
      <Button
        type={type}
        {...props}
      />
      <Send />
    </Wrapper>
  );
};