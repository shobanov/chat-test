import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const initialState: InitialStateType = {
  messages: [],
};

const date = (format(new Date(), "HH':'mm a", { locale: enUS }));

export const chatReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages, 
          {
            message: action.payload,
            date: action.date,
          }
        ]
      };
    default:
      return state;    
  };
};

// action
export const addMessageAC = (payload: string) => ({ type: 'ADD-MESSAGE', payload, date } as const);

// types
export type InitialStateType = {
  messages: MessageType[],
};

export type MessageType = {
  message: string;
  date: string;
};

type ActionsType = ReturnType <typeof addMessageAC>