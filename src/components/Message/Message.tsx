import styles from './Message.module.css';
import avatar from '../../img/avatar.svg';

type MessagePropsType = {
  message: string;
};

const Message: React.FC<MessagePropsType> = ({ message }) => {
  return (
    <div className={styles.message}>
      <img src={avatar} alt="avatar" height='45px' width='45px'/>
      <div className={styles.content}>
        <span className={styles.name}>Ilon Mask</span>
        <p className={styles.text}>{message}</p>
        <span className={styles.time}>21:30 PM</span>
      </div>
    </div>
  );
};

export default Message;