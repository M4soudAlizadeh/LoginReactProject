import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import Card from "../Card/Card";

const Login = (props) => {
  const [changeEmailLength, setChangeEmailLength] = useState(0);
  const [changePassLength, setChangePassLength] = useState(0);
  const enterdEmail = useRef();
  const enterdPassword = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const saveEmail = enterdEmail.current.value;
    const savePassword = enterdPassword.current.value;
    if (saveEmail.length === 0 && savePassword.length === 0) {
      props.errorInput("WE dont Have this User & Password! Please Sign Up");
    } else if (saveEmail.length === 0) {
      props.errorInput("Please Type Your Email");
    } else if (savePassword.length < 7) {
      props.errorInput("Please Type Your Password with 7 character Correctly!");
    }
    const authen = { email: saveEmail, pass: savePassword };
    props.authen(authen);
  };
  const changeEmailInputHandler = (e) => {
    setChangeEmailLength(e.target.value);
  };

  const changePassInputHandler = (e) => {
    setChangePassLength(e.target.value);
  };

  const changeEmail = changeEmailLength.length > 0 ? "" : styles.activ;
  const changePass = changePassLength.length > 7 ? "" : styles.activ;
  return (
    <Card className={styles["login-form"]}>
      <form onSubmit={submitHandler}>
        <div>
          <label>E-Mail</label>
          <input
            type="email"
            className={styles.inputs + " " + changeEmail}
            onChange={changeEmailInputHandler}
            ref={enterdEmail}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className={styles.inputs + " " + changePass}
            onChange={changePassInputHandler}
            ref={enterdPassword}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;
