import React, { useContext } from "react";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Modal.module.css";
import AuthContext from "../Store/auth-context";
const PortalModal = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <div className={styles.overlay} onClick={ctx.closeModal} />
      <Card className={styles.modal}>
        <header>Error Message</header>
        <p>{ctx.errMessage}</p>
        <Button onClick={ctx.closeModal}>Okay</Button>
      </Card>
    </>
  );
};
const Modal = () => {
  return ReactDom.createPortal(
    <PortalModal />,
    document.querySelector("#modal")
  );
};
export default Modal;
