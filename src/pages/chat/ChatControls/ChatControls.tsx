import { useFormikContext } from 'formik';

import { FormContainer } from './styles';
import { Textarea } from '../../../components/Textarea';
import { IconButton } from '../../../components/IconButton';

export const ChatControls: React.FC = () => {
  const formik = useFormikContext();
  const { isValid } = formik;

  const onMessageSendHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formik.submitForm();
    };
  };

  return (
    <FormContainer onKeyDown={onMessageSendHandler} >
      <Textarea name="message" />
      <IconButton type="submit" disabled={!isValid}></IconButton>
    </FormContainer>
  );
};