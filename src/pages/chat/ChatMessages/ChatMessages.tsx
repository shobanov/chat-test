import { useDispatch, useSelector } from 'react-redux';

import { MessagesContainer } from './styles';
import { ChatMessage } from './ChatMessage';
import { AppRootStateType } from '../../../redux/store';
import { addReseivedMessageAC, MessageType } from '../../../redux/chat';
import { ws } from '../../../api/websocket';

export const ChatMessages: React.FC = () => {
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
            <ChatMessage
              key={index}
              { ...item }
            />
          )
        })
      }
    </MessagesContainer>
  );
};