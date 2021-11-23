import { useDispatch, useSelector } from 'react-redux';
import { addMessageAC, MessageType } from '../../../redux/chat';
import { AppRootStateType } from '../../../redux/store';
import { ws } from '../../../api/websocket';
import SentMessage from '../ChatMessages/SentMessage';
import ReceivedMessage from '../ChatMessages/ReceivedMessage';
import { MessageAreaContainer } from './Styles';

export const MessageArea: React.FC = () => {
  const allMessages = useSelector<AppRootStateType, Array<MessageType>>(state => state.chat.messages);
  const userFirstName = useSelector<AppRootStateType>(state => state.chat.firstName);
  const dispatch = useDispatch();

  // ws.onmessage = (e) => {
  //   dispatch(addMessageAC(e.data));
  // };
  
  return (
    <MessageAreaContainer>
      {
        allMessages.map((item, index) => {
          return (
            item.firstName === userFirstName ? 
            <SentMessage
              key={index}
              message={item.message}
              date={item.date}
            />
            :
            <ReceivedMessage
              key={index}
              message={item.message}
              date={item.date}
            />
          )
        })
      }
    </MessageAreaContainer>
  );
};