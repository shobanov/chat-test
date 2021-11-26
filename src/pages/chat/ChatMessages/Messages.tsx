import { useDispatch, useSelector } from 'react-redux';
import { ws } from '../../../api/websocket';

import { MessagesContainer } from './styles';
import { Message } from './Message/Message';
import { AppRootStateType } from '../../../redux/store';
import { addReseivedMessageAC, MessageType } from '../../../redux/chat';

export const Messages: React.FC = () => {
  const allMessages = useSelector<AppRootStateType, Array<MessageType>>(state => state.chat.messages);
  const dispatch = useDispatch();

  ws.onmessage = (e) => {
    dispatch(addReseivedMessageAC(JSON.parse(e.data)));
  };
  
  return (
    <MessagesContainer>
      {
        allMessages.map((item, index) => {
          return (
            <Message
              key={index}
              firstName={item.firstName}
              lastName={item.lastName}
              message={item.message}
              time={item.time}
            />
          )
        })
      }
    </MessagesContainer>
  );
};