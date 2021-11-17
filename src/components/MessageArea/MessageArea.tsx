import Message from '../Message/Message';
import styles from './MessageArea.module.css';

const MessageArea = () => {
  return (
    <div className={styles.messageArea}>
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default MessageArea;