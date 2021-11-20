import Header from "./components/Header/Header";
import MessageField from "./components/MessageField/MessageField";
import styles from './App.module.css';
import MessageArea from "./components/MessageArea/MessageArea";
import Auth from "./components/Auth";



const App = () => {
  return (
    // <div className={styles.app}>
    //   <Header />
    //   <MessageArea />
    //   <MessageField />
    // </div>
      <Auth />
  );
};

export default App;