import { useDispatch } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { addYourMessageAC } from '../../redux/chat';
import sendFill from '../../img/send-fill.svg';
import send from '../../img/send.svg';
import styles from './MessageField.module.css';

const MessageField = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const textareaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const sendButtonHandler = () => {
    if (value.trim() !== '') {
      dispatch(addYourMessageAC(value.trim()));
      setValue('');
    };
  };

  const onPressEnterHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendButtonHandler();
    };
  };
  
  return (
    <div className={styles.messageField}>
      {
        value ?
        <button>
          <img src={sendFill} alt="send-fill" onClick={sendButtonHandler} />
        </button> :
        <button>
          <img src={send} alt="send" />
        </button>
      }
      <TextareaAutosize
        value={value}
        placeholder='Enter text message...'
        onKeyPress={onPressEnterHandler}
        onChange={textareaOnChangeHandler}
      />
    </div>
  );
};

export default MessageField;
