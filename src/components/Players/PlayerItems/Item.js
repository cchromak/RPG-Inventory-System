import React, { useState } from "react";
import classes from "./Item.Module.css";

const Item = (props) => {
  const [itemFlair, setItemFlair] = useState("");
  const [entireItemFlair, setEntireItemFlair] = useState("");

  const onLowerItemCount = () => {
    props.lowerItemCount(props.id, props.name);
    if (props.count === 1) {
      setEntireItemFlair("remove");
      return;
    } else {
      setItemFlair("lower");
    }
    setTimeout(() => {
      setItemFlair("");
    }, 1000);
  };
  const onRaiseItemCount = () => {
    props.raiseItemCount(props.id, props.name);
    setItemFlair("higher");
    setTimeout(() => {
      setItemFlair("");
    }, 1000);
  };

  const classRemove = classes.item + " " + classes[entireItemFlair];
  const classRemoveButton = classes.button + " " + classes[entireItemFlair];

  return (
    <li className={classRemove}>
      <span>{props.name}</span>
      <div className={classes.actions}>
        <button className={classRemoveButton} onClick={onLowerItemCount}>
          −
        </button>
        <span className={classes[itemFlair]}>{props.count}</span>
        <button className={classRemoveButton} onClick={onRaiseItemCount}>
          +
        </button>
      </div>
    </li>
  );
};

export default Item;
