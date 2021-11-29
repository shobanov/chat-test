import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { ws } from '../../api/websocket';
import { ChatHeader } from './ChatHeader/ChatHeader';
import { Messages } from './ChatMessages/ChatMessages';
import { ChatControls } from './ChatControls/ChatControls';
import { addOwnerMessageAC } from '../../redux/chat';
import { AppRootStateType } from '../../redux/store';

const INITIAL_VALUES = {
  message: '',
};

export const Chat: React.FC = () => {
  const userFirstName = useSelector<AppRootStateType>(state => state.chat.firstName);
  const userLastName = useSelector<AppRootStateType>(state => state.chat.lastName);
  const dispatch = useDispatch();

  const handleSubmit = (values: typeof INITIAL_VALUES, actions: { resetForm: () => void }) => {
    if (values.message) {
      dispatch(addOwnerMessageAC(values.message));
      ws.send(JSON.stringify({
        message: values.message,
        firstName: userFirstName,
        lastName: userLastName,
      }));
      actions.resetForm();
    } else actions.resetForm();
  };

  return (
    <>
      <ChatHeader />
      <Messages />
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
      >
        <ChatControls />
      </Formik>
    </>
  );
};