import AccessProfile from "./AccessProfile";
import styles from "./Header.module.css";
const Header = (props) => {
  const logOutHandler = () => {
    props.logOut();
  };
  return (
    <header className={styles.head}>
      <div>A Typical Page</div>
      {props.valid && <AccessProfile logOut={logOutHandler} />}
    </header>
  );
};
export default Header;
