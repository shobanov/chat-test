import Header from "./components/Header/Header";
import MessageField from "./components/MessageField/MessageField";
import styles from './App.module.css';
import MessageArea from "./components/MessageArea/MessageArea";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        <MessageArea />
        <MessageField />
      </div>
    </div>
  );
};

export default App;