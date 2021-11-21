import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { addMessageAC } from '../../../redux/chat';
import send from '../../../assets/images/send.png';
import { ImageButton, Textarea, FormContainer } from './EntryFieldStyles';

type InitialStateType = {
  message: string;
};

const INITIAL_VALUES = {
  message: '',
};

const EntryField: React.FC = () => {
  const dispatch = useDispatch();

  const onPressEnterHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
    };
  };

  const handleSubmit = (values: InitialStateType, actions: { resetForm: () => void }) => {
    dispatch(addMessageAC(values.message));
    actions.resetForm();
  };
  
  return (
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
      >
        <FormContainer onKeyDown={onPressEnterHandler}>
          <Textarea name="message" as="textarea" placeholder='Enter text message...' />
          <ImageButton
            alt="send"
            type="image"
            src={send}
          />
        </FormContainer>
      </Formik>
  );
};

export default EntryField;