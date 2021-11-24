import { useField } from 'formik';

import { TextareaStyled } from './styles';

interface IProps {
  name: string;
};

export const Textarea: React.FC<IProps> = ({ name }) => {
  const [field] = useField(name);
   
  const onChangeHandler = (e: any) => {
    const textareaHeight = 69;
    const lineHeight = 35;
    const linesCount = e.target.value.split("\n").length;
    e.target.style.height = textareaHeight + lineHeight * (linesCount - 1) + "px";
  };

  return (
    <>
      <TextareaStyled
        {...field}
        name={name}
        onKeyUp={onChangeHandler}
        placeholder='Enter text message...'
      />
    </>
  );
};