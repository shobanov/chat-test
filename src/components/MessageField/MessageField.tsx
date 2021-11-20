import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

// import { ws } from '../../websocket';
import { addMessageAC } from '../../redux/chat';
// import sendFill from '../../img/send-fill.png';
import send from '../../img/send.png';
import styles from './MessageField.module.css';

type InitialStateType = {
  message: string;
};

const MessageField: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues = { 
    message: '',
  };

  const onPressEnterHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
    };
  };

  const handleSubmit = (values: InitialStateType, actions: { resetForm: () => void; }) => {
    dispatch(addMessageAC(values.message));
    actions.resetForm();
  };
  
  return (
    <Formik className={styles.messageField} initialValues={initialValues} onSubmit={handleSubmit}>
      <Form onKeyDown={onPressEnterHandler}>
        <Field className={styles.textarea} name="message" as="textarea">
          <input
            type="text"
            placeholder='Enter text message...'
          />
        </Field>
        <input className={styles.img} alt="img" type="image" src={send} width="35px"/>
      </Form>
    </Formik>
  );
};

export default MessageField;