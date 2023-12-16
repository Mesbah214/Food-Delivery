import { forwardRef } from "react";

import classes from "./Input.module.css";
import PropTypes from "prop-types";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});


Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
};

Input.displayName = "Input";
export default Input;
