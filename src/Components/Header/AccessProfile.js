import Button from "../Button/Button";
import styles from "./AccessProfile.module.css";
const AccessProfile = (props) => {
  const logOutClickHandler = () => {
    props.logOut();
  };
  return (
    <ul className={styles["access-list"]}>
      <li>User</li>
      <li>Admin</li>
      <Button onClick={logOutClickHandler}>Log Out</Button>
    </ul>
  );
};
export default AccessProfile;
