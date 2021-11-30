import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { ValidationSchema } from './chatValidation';

import { ChatHeader, ChatMessages, ChatControls } from '../chat';
import { addOwnerMessageAC } from '../../redux/chat';
import { AppRootStateType } from '../../redux/store';
import { ws } from '../../api/websocket';

const INITIAL_VALUES = {
  message: '',
};

export const Chat: React.FC = () => {
  const firstName = useSelector<AppRootStateType>(state => state.chat.firstName);
  const lastName = useSelector<AppRootStateType>(state => state.chat.lastName);
  const dispatch = useDispatch();

  const handleSubmit = ({ message }: typeof INITIAL_VALUES, actions: { resetForm: () => void }) => {
    dispatch(addOwnerMessageAC(message));
    ws.send(JSON.stringify({
      message,
      firstName,
      lastName,
    }));
    actions.resetForm();
  };

  return (
    <>
      <ChatHeader />
      <ChatMessages />
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        <ChatControls />
      </Formik>
    </>
  );
};