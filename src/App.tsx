import { Route, Redirect, Switch } from 'react-router-dom';

import { Auth } from './pages/auth';
import { Chat } from './pages/chat';
import { Root } from './Root';

export const App: React.FC = () => {
  return (
    <Root>
      <Route path='/'>
        <Redirect to='/auth' />
      </Route>
      <Switch>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
      </Switch>
    </Root>
  );
};