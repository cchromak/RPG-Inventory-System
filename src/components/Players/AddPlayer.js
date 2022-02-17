import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./AddPlayer.Module.css";

const AddPlayer = (props) => {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const quoteChangeHandler = (event) => {
    setQuote(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newPlayer = {
      name: name,
      quote: quote,
      id: Math.random(),
    };

    props.onAddPlayer(newPlayer);
    setName("");
    setQuote("");
  };

  return (
    <Modal onHidePlayer={props.onHidePlayer}>
      <form onSubmit={submitHandler}>
        <div className={classes["new-players__controls"]}>
          <div className={classes["new-players__control"]}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={nameChangeHandler}
            />
          </div>
          <div className={classes["new-players__control"]}>
            <label htmlFor="quote">Quote:</label>
            <input
              type="text"
              id="quote"
              name="quote"
              value={quote}
              onChange={quoteChangeHandler}
            />
          </div>
          <div>
            <Button onClick={props.onHidePlayer} title="Cancel" />
            <Button type="submit" onClick={submitHandler} title="Add" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddPlayer;
