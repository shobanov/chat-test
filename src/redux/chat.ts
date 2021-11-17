// import { v4 as uuidv4 } from 'uuid';

const initialState: InitialStateType = {
  yourMessages: [],
  receivedMessages: [],
};

const createDate = () => {
  const date = new Date();

  const formatter = new Intl.DateTimeFormat("en-US",{
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formatter.format(date);
};

export const chatReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'ADD-YOUR-MESSAGE':
      return {
        ...state,
        yourMessages: [
          ...state.yourMessages, 
          { message: action.payload }
        ]
      };
    case 'ADD-RECEIVED-MESSAGE': 
      return {
        ...state,
        receivedMessages: [
          ...state.receivedMessages, 
          { message: action.payload }
        ]
      };
    default:
      return state;    
  };
};

// action
export const addYourMessageAC = (payload: string) => ({ type: 'ADD-YOUR-MESSAGE', payload } as const);
export const addReceivedMessageAC = (payload: string) => ({ type: 'ADD-RECEIVED-MESSAGE', payload } as const);

// types
export type InitialStateType = {
  yourMessages: MessageType[],
  receivedMessages: MessageType[],
};

export type MessageType = {
  message: string;
};

type ActionsType = 
  | ReturnType <typeof addYourMessageAC>
  | ReturnType <typeof addReceivedMessageAC>;
