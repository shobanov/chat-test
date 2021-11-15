import styles from './MessageField.module.css';
import send from '../../img/send.svg';
import sendFill from '../../img/send-fill.svg';
import TextareaAutosize from 'react-textarea-autosize';
import { ChangeEvent, useState } from 'react';

const MessageField = () => {
  
  const [value, setValue] = useState('');

  const server = new WebSocket('wss://ws.qexsystems.ru')

  const textareaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  
  server.onopen = () => {
    console.log('WebSocket Client Connected');
  };
  server.onmessage = (message) => {
    console.log(message);
  };
  
  return (
    <div className={styles.messageField}>
      {
        value ? <img src={sendFill} alt="send-fill" /> : <img src={send} alt="send" />
      }
      <TextareaAutosize
        placeholder='Enter text message...'
        onChange={textareaOnChangeHandler}
      />
    </div>
  );
};

export default MessageField;