import React from "react";
import classes from './Item.Module.css';

const Item = (props) => {
  return (
    <li className={classes.item}>
      <span>{props.name}</span>
      <span>{props.count}</span>
    </li>
  );
};

export default Item;
