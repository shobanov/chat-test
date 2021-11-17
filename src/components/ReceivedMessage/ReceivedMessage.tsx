import styles from './ReceivedMessage.module.css';

type ReceivedMessagePropsType = {
  message: string;
  date: string;
};

const ReceivedMessage: React.FC<ReceivedMessagePropsType> = ({ message, date }) => {
  return (
    <div className={styles.sentMessage}>
      <div className={styles.content}>
        <p className={styles.text}>{message}</p>
        <span className={styles.time}>{date}</span>
      </div>
    </div>
  );
};

export default ReceivedMessage;