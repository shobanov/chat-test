import styles from './App.module.css';
import Auth from "./components/Auth";
import Chat from "./components/Chat";
import { Route, Redirect, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.app}>
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
    </div>
  );
};

export default App;