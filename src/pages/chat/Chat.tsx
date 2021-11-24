import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { Header } from "./ChatHeader/Header";
import { addMessageAC } from '../../redux/chat';
import { Messages } from "./ChatMessages/Messages";
import { ChatControls } from "./ChatControls/ChatControls";

const INITIAL_VALUES = {
  message: '',
};

export const Chat: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: typeof INITIAL_VALUES, actions: { resetForm: () => void }) => {
    dispatch(addMessageAC(values.message));
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