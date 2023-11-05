import React from "react";

const AuthContext = React.createContext({
  errMessage: "",
  closeModal: () => {},
});

export default AuthContext;
