import Header from "./Header/Header";
import MessageArea from "./MessageArea/MessageArea";
import MessageField from "./MessageField/MessageField";

const Chat: React.FC = () => {
  return (
    <>
      <Header />
      <MessageArea />
      <MessageField />
    </>
  );
};

export default Chat;