import { useDispatch, useSelector } from 'react-redux';

import { MessagesContainer } from './styles';
import { Message } from './ChatMessage/ChatMessage';
import { AppRootStateType } from '../../../redux/store';
import { addReseivedMessageAC, MessageType } from '../../../redux/chat';
import { ws } from '../../../api/websocket';

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
              { ...item }
            />
          )
        })
      }
    </MessagesContainer>
  );
};