import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { addMessageAC } from '../redux/chat';
import send from '../assets/images/send.png';
import { ButtonImageType, EntryFieldWrapper, Textarea } from './EntryFieldStyles';

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
    <EntryFieldWrapper>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
      >
        <Form onKeyDown={onPressEnterHandler}>
          <Textarea name="message" as="textarea" placeholder='Enter text message...' />
          <ButtonImageType
            alt="send"
            type="image"
            src={send}
          />
        </Form>
      </Formik>
    </EntryFieldWrapper>  
  );
};

export default EntryField;