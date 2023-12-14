import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import PropTypes from "prop-types";

const HeaderCartButton = (props) => (
  <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>

    <span>Your Cart</span>

    <span className={classes.badge}>3</span>
  </button>
);

HeaderCartButton.propTypes = {
  onClick: PropTypes.func,
};

export default HeaderCartButton;
