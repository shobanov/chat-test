import Header from "./components/Header/Header";
import MessageField from "./components/MessageField/MessageField";
import styles from './App.module.css';
import MessageArea from "./components/MessageArea/MessageArea";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <MessageArea />
      <MessageField />
    </div>
  );
};

export default App;