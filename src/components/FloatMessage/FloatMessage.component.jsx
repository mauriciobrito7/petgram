import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ContainerMessage } from "./FloatMessage.styles";

export const FloatMessage = ({ children, type, time = 2000 }) => {
  const message = children;
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, time);

  if (!show) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <ContainerMessage type={type}>{message}</ContainerMessage>,
        document.getElementById("message")
      )}
    </>
  );
};
