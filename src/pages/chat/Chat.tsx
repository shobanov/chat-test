import Header from "../../components/Header";
import MessageArea from "../../components/MessageArea";
import EntryField from "../../components/EntryField";

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