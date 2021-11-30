import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

const initialState: InitialStateType = {
  messages: [],
  firstName: '',
  lastName: '',
};

const getCurrentTime = () => {
  return format(new Date(), "HH':'mm a", { locale: enUS });
};

export const chatReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'ADD-OWNER-MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages, 
          {
            firstName: state.firstName,
            lastName: state.lastName,
            ...action.payload
          }
        ]
      };
      case 'ADD-RESEIVED-MESSAGE':
        return {
          ...state,
          messages: [
            ...state.messages, 
            action.payload
          ]
        };  
    case 'SAVE-NAME':
      return {
        ...state,
        ...action.payload
      }; 
    default:
      return state;    
  };
};

// action
export const addOwnerMessageAC = (message: string) => ({
  type: 'ADD-OWNER-MESSAGE',
  payload: { message, time: getCurrentTime() },
} as const);

export const addReseivedMessageAC = (payload: MessageType) => ({
  type: 'ADD-RESEIVED-MESSAGE',
  payload: { ...payload, time: getCurrentTime() },
} as const);

export const saveNameAC = (payload: NameType) => ({
  type: 'SAVE-NAME',
  payload,
} as const);

// types
export type InitialStateType = {
  messages: MessageType[],
  firstName: string;
  lastName: string;
};

export type MessageType = {
  firstName: string;
  lastName: string;
  message: string;
  time: string;
};

export type NameType = {
  firstName: string;
  lastName: string;
};

type ActionsType = 
 | ReturnType <typeof addOwnerMessageAC>
 | ReturnType <typeof saveNameAC>
 | ReturnType <typeof addReseivedMessageAC>;