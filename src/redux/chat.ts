const initialState: InitialStateType = {
  messages: [],
};

const createDate = () => {
  const date = new Date();

  

  const formatter = new Intl.DateTimeFormat("en-US",{
    hour: "numeric",
    minute: "numeric",
  });

  return formatter.format(date);
};

export const chatReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages, 
          {
            message: action.payload,
            date: createDate()
          }
        ]
      };
    default:
      return state;    
  };
};

// action
export const addMessageAC = (payload: string) => ({ type: 'ADD-MESSAGE', payload } as const);

// types
export type InitialStateType = {
  messages: MessageType[],
};

export type MessageType = {
  message: string;
  date: string;
};

type ActionsType = ReturnType <typeof addMessageAC>