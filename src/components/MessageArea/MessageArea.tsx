import { useDispatch, useSelector } from 'react-redux';
import { addMessageAC, MessageType } from '../../redux/chat';
import { AppRootStateType } from '../../redux/store';
import { ws } from '../../websocket';
import Message from '../Message/Message';
import ReceivedMessage from '../ReceivedMessage/ReceivedMessage';
import styles from './MessageArea.module.css';

const MessageArea: React.FC = () => {
  const allMessages = useSelector<AppRootStateType, Array<MessageType>>(state => state.chat.messages);
  const yourName = useSelector<AppRootStateType>(state => state.chat.firstName);
  const dispatch = useDispatch();

  ws.onmessage = (e) => {
    dispatch(addMessageAC(e.data));
    console.log(e.data);
  };
  

  return (
    <div className={styles.messageArea}>
      {
        allMessages.map((item, index) => {
          return (
            item.firstName === yourName ? 
            <div key={index}>
              <Message message={item.message} date={item.date}/>
            </div>
            :
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