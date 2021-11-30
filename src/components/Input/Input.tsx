import { useField } from 'formik';

import { ErrorMessage, InputStyled } from './styles';

interface IProps  {
  type: 'text' | 'password';
  name: string;
  placeholder: string;
};

export const Input: React.FC<IProps> = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <>  
      <InputStyled
        { ...field }
        { ...props }
      />
      {
        meta.error && meta.touched && (
          <ErrorMessage>{meta.error}</ErrorMessage>
        )
      }
    </>
  );
};