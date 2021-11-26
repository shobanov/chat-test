import { useField } from 'formik';
import { ErrorMessage, InputStyled } from './styles';

interface IProps  {
  type: 'text';
  name: string;
  placeholder: string;
};

export const Input: React.FC<IProps> = ({ type, name, placeholder }) => {
  const [field, meta] = useField(name);

  return (
    <>  
      <InputStyled
        { ...field }
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {
        meta.error && meta.touched ? (
          <ErrorMessage>{meta.error}</ErrorMessage>
        ) : null
      }
    </>
  );
};