import React from "react";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import Item from "./Item";
import ItemInput from "./ItemInput";
import classes from "./PlayerItems.Module.css";

const PlayerItems = (props) => {
  const items = props.items;
  const playerItems = Object.keys(items).map((itemName, i) => (
    <ul key={i}>
      <Item name={itemName} count={items[itemName]} />
    </ul>
  ));

  return (
    <Modal>
      <div className={classes.items}>
        <ul>{playerItems}</ul>
        <ItemInput />
        <div className={classes.button}>
          <Button onClick={props.onHideItems} title="Exit" />
          <Button onClick={props.onHideItems} title="Update" className="blue"/>
          <Button onClick={props.onHideItems} title="+ Add" className="green" />
        </div>
      </div>
    </Modal>
  );
};

export default PlayerItems;
