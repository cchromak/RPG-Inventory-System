import React from "react";
import classes from './ItemInput.Module.css';

const ItemInput = (props) => {
  return (
    <div className={classes["new-players__control_stat"]}>
      <input type="string" placeholder="Item Name"></input>
      <input className={classes.number} type="number" placeholder="Count"></input>
    </div>
  );
};

export default ItemInput;
