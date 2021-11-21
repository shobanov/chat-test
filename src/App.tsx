import { Route, Redirect, Switch } from "react-router-dom";

import Auth from "./pages/auth/Auth";
import Chat from "./pages/chat/Chat";
import { AppContainer } from './AppStyles';

const App: React.FC = () => {
  return (
    <AppContainer>
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
    </AppContainer>
  );
};

export default App;