import React from "react";
import ReactDom from "react-dom";

import classes from "./Modal.Module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHidePlayer}/>;
};

const ModalOverlay = (props) => {
  const classProps = classes[props.class] + " " + classes.modal;
  return (
    <div className={classProps}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onHidePlayer={props.onHidePlayer} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay class={props.class}  >{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
