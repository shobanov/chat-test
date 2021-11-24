import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from './ChatHeader/Header';
import { addOwnerMessageAC } from '../../redux/chat';
import { Messages } from './ChatMessages/Messages';
import { ChatControls } from './ChatControls/ChatControls';
import { ws } from '../../api/websocket';
import { AppRootStateType } from '../../redux/store';

const INITIAL_VALUES = {
  message: '',
};

export const Chat: React.FC = () => {
  const userFirstName = useSelector<AppRootStateType>(state => state.chat.firstName);
  const userLastName = useSelector<AppRootStateType>(state => state.chat.lastName);
  const dispatch = useDispatch();

  const handleSubmit = (values: typeof INITIAL_VALUES, actions: { resetForm: () => void }) => {
    dispatch(addOwnerMessageAC(values.message));
    ws.send(JSON.stringify({
      message: values.message,
      firstName: userFirstName,
      lastName: userLastName,
    }));
    actions.resetForm();
  };

  return (
    <>
      <Header />
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