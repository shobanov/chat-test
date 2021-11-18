import styles from './Message.module.css';
import avatar from '../../img/avatar.png';

type MessagePropsType = {
  message: string;
  date: string;
};

const Message: React.FC<MessagePropsType> = ({ message, date }) => {
  return (
    <div className={styles.message}>
      <img src={avatar} alt="avatar" width='45px'/>
      <div className={styles.content}>
        <span className={styles.name}>Ilon Mask</span>
        <p className={styles.text}>{message}</p>
        <span className={styles.time}>{date}</span>
      </div>
    </div>
  );
};

export default Message;