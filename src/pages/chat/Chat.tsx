import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { ws } from '../../api/websocket';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatControls } from './ChatControls';
import { addOwnerMessageAC } from '../../redux/chat';
import { AppRootStateType } from '../../redux/store';
import { ValidationSchema } from './chatValidation';

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