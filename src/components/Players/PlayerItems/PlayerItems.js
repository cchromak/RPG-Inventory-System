import React, { useState } from "react";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import Item from "./Item";
import ItemInput from "./ItemInput";
import classes from "./PlayerItems.Module.css";

const PlayerItems = (props) => {
  const items = props.items;
  const playerItems = Object.keys(items).map((itemName, i) => (
    <ul key={i}>
      <Item
        id={props.id}
        name={itemName}
        count={items[itemName]}
        lowerItemCount={props.lowerItemCount}
        raiseItemCount={props.raiseItemCount}
      />
    </ul>
  ));

  const [itemName, setItemName] = useState("");
  const [itemCount, setItemCount] = useState("");

  const itemNameChangeHandler = (event) => {
    setItemName(event.target.value);
  };

  const itemCountChangeHandler = (event) => {
    setItemCount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let newItem = { name: itemName, count: itemCount };
    props.addNewItem(props.id, newItem);
    setItemName("");
    setItemCount("");
  };

  return (
    <Modal>
      <div onSubmit={submitHandler} className={classes.items}>
        {playerItems}
        <ItemInput
          onItemNameChangeHandler={itemNameChangeHandler}
          onItemCountChangeHandler={itemCountChangeHandler}
          itemNameValue={itemName}
          itemCountValue={itemCount}
        />
        <div className={classes.button}>
          <Button onClick={props.onHideItems} title="Exit" className="red" />
          <Button
            type="submit"
            onClick={submitHandler}
            title="+ Add"
            className="green"
          />
        </div>
      </div>
    </Modal>
  );
};

export default PlayerItems;
