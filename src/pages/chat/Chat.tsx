import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { addMessageAC } from '../../redux/chat';

import { Header } from "./ChatHeader/Header";
import { MessageArea } from "./ChatMessageArea/MessageArea";
import { ChatControls } from "./ChatControls/ChatControls";

const INITIAL_VALUES = {
  message: '',
};

export const Chat: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: typeof INITIAL_VALUES, actions: { resetForm: () => void }) => {
    console.log(values);
    dispatch(addMessageAC(values.message));
    actions.resetForm();
  };

  return (
    <>
      <Header />
      <MessageArea />
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
      >
        <ChatControls />
      </Formik>
    </>
  );
};