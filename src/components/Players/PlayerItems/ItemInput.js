import React from "react";
import classes from "./ItemInput.Module.css";

const ItemInput = (props) => {
  return (
    <div className={classes["new-players__control_stat"]}>
      <input
        type="string"
        placeholder="Item Name"
        value={props.itemNameValue}
        onChange={props.onItemNameChangeHandler}
      ></input>
      <input
        className={classes.number}
        type="number"
        placeholder="Count"
        min={1}
        value={props.itemCountValue}
        onChange={props.onItemCountChangeHandler}
      ></input>
    </div>
  );
};

export default ItemInput;
