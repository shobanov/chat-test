import React from 'react';
import { useFormikContext } from 'formik';

import { FormContainer } from './styles';
import { Textarea } from '../../../components/Textarea/Textarea';
import { IconButton } from '../../../components/IconButton/ImageButton';

export const ChatControls: React.FC = () => {
  const formik = useFormikContext();

  const onPressEnterHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formik.submitForm();
    };
  };

  return (
    <FormContainer onKeyDown={onPressEnterHandler}>
      <Textarea name="message" />
      <IconButton type="submit" />
    </FormContainer>
  );
};