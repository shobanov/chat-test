import avatar from '../../img/avatar.svg';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
        <img src={avatar} alt='avatar' height='45px' width='45px'/>
        <span>
          Ilon Mask
        </span>
    </div>
  );
};

export default Header;