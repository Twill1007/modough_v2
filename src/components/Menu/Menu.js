import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "../Menu/menu.module.css";

function Menu(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={classes.container}>
      {showMenu && (
        <div>
          <h2>Chocolate Chip Cookies</h2>
          <h2>Snickerdoodles</h2>
        </div>
      )}
      <div className={classes.button}>
        <Button onClick={toggleMenu} showMenu={showMenu}></Button>
      </div>
    </div>
  );
}

export default Menu;
