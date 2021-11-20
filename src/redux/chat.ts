import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const initialState: InitialStateType = {
  messages: [],
  firstName: '',
  lastName: '',
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
            firstName: state.firstName,
          }
        ]
      };
    case 'SAVE-NAME':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      }; 
    default:
      return state;    
  };
};

// action
export const addMessageAC = (payload: string) => ({ type: 'ADD-MESSAGE', payload, date } as const);
export const saveNameAC = (payload: NameType) => ({ type: 'SAVE-NAME', payload} as const);

// types
export type InitialStateType = {
  messages: MessageType[],
  firstName: string;
  lastName: string;
};

export type MessageType = {
  message: string;
  firstName: string;
  date: string;
};

export type NameType = {
  firstName: string;
  lastName: string;
};

type ActionsType = 
 | ReturnType <typeof addMessageAC>
 | ReturnType <typeof saveNameAC>;