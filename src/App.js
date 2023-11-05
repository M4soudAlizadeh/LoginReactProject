import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Modal from "./Components/Modal/Modal";
import AuthContext from "./Components/Store/auth-context";
import Welcome from "./Components/Welcome/Welcome";

const DUMMY = { email: "test@test.com", pass: "1920287870" };
const App = () => {
  const cheakLogInUser = localStorage.getItem("isLogin");
  const [activeModal, setActiveModal] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [validAuth, setValidAuth] = useState(false);
  const errorInputHandler = (errorMessage) => {
    setActiveModal(true);
    if (cheakLogInUser === "1") {
    }
    setErrMessage(errorMessage);
  };
  const closeModal = () => {
    setActiveModal(false);
  };
  const athenHandler = (e) => {
    if (e.email === DUMMY.email && e.pass === DUMMY.pass) {
      localStorage.setItem("isLogin", "1");
      setValidAuth(true);
    } else {
      setActiveModal(true);
    }
  };
  const logOutHandler = () => {
    setValidAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        errMessage: errMessage,
        closeModal: closeModal,
      }}
    >
      <Header valid={validAuth} logOut={logOutHandler} />
      {validAuth ? (
        <Welcome />
      ) : (
        <Login errorInput={errorInputHandler} authen={athenHandler} />
      )}

      <p>Email: test@test.com and password: 1920287870</p>
      {activeModal && <Modal errorMessage={errMessage} onClick={closeModal} />}
    </AuthContext.Provider>
  );
};

export default App;
