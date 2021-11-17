import { combineReducers, createStore } from 'redux';

import { chatReducer } from './chat';

const rootReducer = combineReducers({
  chat: chatReducer,
});

export const store = createStore(
  rootReducer,
);

export type AppRootStateType = ReturnType<typeof rootReducer>;