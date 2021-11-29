import { useField, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';

import { FormContainer } from './styles';
import { Textarea } from '../../../components/Textarea/Textarea';
import { IconButton } from '../../../components/IconButton/IconButton';

export const ChatControls: React.FC = () => {
  const formik = useFormikContext();
  const [field] = useField("message");
  const [hasValue, setHasValue] = useState<boolean>(false);

  const onMessageSendHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formik.submitForm();
    };
  };

  useEffect(() => {
    return field.value ? setHasValue(true) : setHasValue(false);
  },[field.value]);
    
  return (
    <FormContainer onKeyDown={onMessageSendHandler} >
      <Textarea name="message" />
      <IconButton type="submit" hasValue={hasValue} />
    </FormContainer>
  );
};