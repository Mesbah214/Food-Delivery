import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import PropTypes from "prop-types";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.array,
};

Modal.propTypes = {
  children: PropTypes.array,
  onClose: PropTypes.func,
};

Backdrop.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
