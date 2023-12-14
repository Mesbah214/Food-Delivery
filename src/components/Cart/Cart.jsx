import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import PropTypes from "prop-types";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCartClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>34.32</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onCartClose: PropTypes.func
};

export default Cart;
