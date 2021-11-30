import { useField } from 'formik';
import { useEffect, useRef } from 'react';

import { TextareaStyled } from './styles';

interface IProps {
  name: string;
  placeholder?: string;
};

const TEXTAREA_HEIGHT = '69px';

export const Textarea: React.FC<IProps> = ({ name, placeholder = 'Enter text message...' }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [field] = useField(name);
   
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = TEXTAREA_HEIGHT;
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [textareaRef.current?.textLength]);
  
  return (
    <TextareaStyled
      ref={textareaRef}
      { ...field }
      name={name}
      placeholder={placeholder}
    />
  );
};