import styles from './Message.module.css';
import avatar from '../../img/avatar.svg';

const Message = () => {
  return (
    <div className={styles.message}>
      <img src={avatar} alt="avatar"/>
      <div className={styles.content}>
        <div className={styles.name}>Ilon Mask</div>
        <div className={styles.text}>Hi John, what do you think about corporate messengers</div>
        <div className={styles.time}>21:30 PM</div>
      </div>
    </div>
  );
};

export default Message;