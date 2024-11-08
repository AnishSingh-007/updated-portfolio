import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css"; // Assume your CSS for modal is in this file

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const buttoncomponent = (
    <button
      onClick={onClose}
      type="button"
      className={classes.close}
      data-dismiss="modal"
      aria-hidden="true"
      aria-label="Close"
    >
      &times; {/* This is a common representation for a close button */}
    </button>
  );

  return ReactDOM.createPortal(
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <button
          onClick={onClose}
          type="button"
          className={classes.close}
          data-dismiss="modal"
          aria-hidden="true"
          aria-label="Close"
        >
          &times; {/* This is a common representation for a close button */}
        </button>
        <div className={classes.modalContent}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
