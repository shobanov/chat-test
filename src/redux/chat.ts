const initialState: InitialStateType = {
  yourMessages: [],
  receivedMessages: [],
};

export const chatReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'ADD-YOUR-MESSAGE': 
      return state;
    case 'ADD-RECEIVED-MESSAGE': 
      return state;
    default:
      return state;    
  };
};

// action
export const addYourMessageAC = (payload: string) => ({ type: 'ADD-YOUR-MESSAGE', payload } as const);
export const addReceivedMessageAC = (payload: string) => ({ type: 'ADD-RECEIVED-MESSAGE', payload } as const);

// types
export type InitialStateType = {
  yourMessages: string[],
  receivedMessages: string[],
};

type ActionsType = 
  | ReturnType <typeof addYourMessageAC>
  | ReturnType <typeof addReceivedMessageAC>;
