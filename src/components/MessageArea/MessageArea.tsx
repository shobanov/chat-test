import { useDispatch, useSelector } from 'react-redux';
import { addReceivedMessageAC, MessageType } from '../../redux/chat';
import { AppRootStateType } from '../../redux/store';
import { ws } from '../../websocket';
import Message from '../Message/Message';
import ReceivedMessage from '../ReceivedMessage/ReceivedMessage';
import styles from './MessageArea.module.css';

const MessageArea: React.FC = () => {
  const yourMessages = useSelector<AppRootStateType, Array<MessageType>>(state => state.chat.yourMessages);
  const receivedMessages = useSelector<AppRootStateType, Array<MessageType>>(state => state.chat.receivedMessages);
  const dispatch = useDispatch();

  ws.onmessage = (e) => {
    dispatch(addReceivedMessageAC(e.data));
    console.log(e.data);
  };

  console.log('get' ,receivedMessages);

  return (
    <div className={styles.messageArea}>
      {
        yourMessages.map((item, index) => {
          return (
            <div key={index}>
              <Message message={item.message} date={item.date}/>
            </div>
          )
        })
      }
      {
        receivedMessages.map((item, index) => {
          return (
            <div key={index}>
              <ReceivedMessage message={item.message} date={item.date} />
            </div>
          )
        })
      }
    </div>
  );
};

export default MessageArea;