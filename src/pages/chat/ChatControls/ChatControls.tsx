import { useFormikContext } from 'formik';

import { FormContainer } from './styles';

import { Textarea, IconButton } from '../../../components';

export const ChatControls: React.FC = () => {
  const { submitForm, dirty } = useFormikContext();

  const onMessageSendHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitForm();
    };
  };

  return (
    <FormContainer onKeyDown={onMessageSendHandler} >
      <Textarea name="message" />
      <IconButton type="submit" disabled={!dirty}></IconButton>
    </FormContainer>
  );
};