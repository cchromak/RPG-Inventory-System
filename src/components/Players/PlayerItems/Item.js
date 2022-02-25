import React, { useState } from "react";
import classes from "./Item.Module.css";

const Item = (props) => {
  const [itemFlair, setItemFlair] = useState("");
  const onLowerItemCount = () => {
    props.lowerItemCount(props.id, props.name);
    setItemFlair("lower");
    setTimeout(() => {
        setItemFlair("")
    }, 1000)
  };
  const onRaiseItemCount = () => {
    props.raiseItemCount(props.id, props.name);
    setItemFlair("higher");
    setTimeout(() => {
        setItemFlair("")
    }, 1000)
  };

  return (
    <li className={classes.item}>
      <span>{props.name}</span>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onLowerItemCount}>
          −
        </button>
        <span className={classes[itemFlair]}>{props.count}</span>
        <button className={classes.button} onClick={onRaiseItemCount}>
          +
        </button>
      </div>
    </li>
  );
};

export default Item;
