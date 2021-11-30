import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { ChatHeader } from '../chat';
import { ChatMessages } from '../chat';
import { ChatControls } from '../chat';
import { ws } from '../../api/websocket';
import { ValidationSchema } from './chatValidation';
import { addOwnerMessageAC } from '../../redux/chat';
import { AppRootStateType } from '../../redux/store';

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
        validateOnMount
        onSubmit={handleSubmit}
      >
        <ChatControls />
      </Formik>
    </>
  );
};