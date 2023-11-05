import Card from "../Card/Card";
import styles from "./Welcome.module.css";
const Welcome = () => {
  return (
    <Card className={styles.welcome}>
      <h1>Welcome Back!</h1>
    </Card>
  );
};
export default Welcome;
