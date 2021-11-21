import Header from "./header/Header";
import MessageArea from "./messageArea/MessageArea";
import EntryField from "./entryField/EntryField";

const Chat: React.FC = () => {
  return (
    <>
      <Header />
      <MessageArea />
      <EntryField />
    </>
  );
};

export default Chat;