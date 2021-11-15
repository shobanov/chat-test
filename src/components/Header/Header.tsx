import avatar from '../../img/avatar.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={avatar} alt="avatar"/>
        <span>
          Ilon Mask
        </span>
    </div>
  );
};

export default Header;