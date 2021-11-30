import { useFormikContext } from 'formik';

import { FormContainer } from './styles';

import { Textarea } from '../../../components';
import { IconButton } from '../../../components';

export const ChatControls: React.FC = () => {
  const { submitForm, isValid } = useFormikContext();

  const onMessageSendHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitForm();
    };
  };

  console.log(isValid);
  

  return (
    <FormContainer onKeyDown={onMessageSendHandler} >
      <Textarea name="message" />
      <IconButton type="submit" isValid={isValid}></IconButton>
    </FormContainer>
  );
};