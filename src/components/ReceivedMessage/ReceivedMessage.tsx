import styles from './ReceivedMessage.module.css';

type ReceivedMessagePropsType = {
  message: string;
};

const ReceivedMessage: React.FC<ReceivedMessagePropsType> = ({ message }) => {
  return (
    <div className={styles.sentMessage}>
      <div className={styles.content}>
        <p className={styles.text}>{message}</p>
        <span className={styles.time}>21:30 PM</span>
      </div>
    </div>
  );
};

export default ReceivedMessage;