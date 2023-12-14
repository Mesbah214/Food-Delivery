import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import PropTypes from "prop-types";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Table of foods" />
      </div>
    </>
  );
};

Header.propTypes = {
  onCartShow: PropTypes.func,
};

export default Header;
