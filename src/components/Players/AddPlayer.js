import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./AddPlayer.Module.css";

const AddPlayer = (props) => {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [mechanical, setMechanical] = useState("");
  const [perception, setPerception] = useState("");
  const [strength, setStrength] = useState("");
  const [technical, setTechnical] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const quoteChangeHandler = (event) => {
    setQuote(event.target.value);
  };

  const dexterityChangeHandler = (event) => {
      setDexterity(event.target.value);
  }
  const knowledgeChangeHandler = (event) => {
      setKnowledge(event.target.value);
  }
  const mechanicalChangeHandler = (event) => {
      setMechanical(event.target.value);
  }
  const perceptionChangeHandler = (event) => {
      setPerception(event.target.value);
  }
  const strengthChangeHandler = (event) => {
      setStrength(event.target.value);
  }
  const technicalChangeHandler = (event) => {
      setTechnical(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const stats = {
      Dexterity: dexterity,
      Knowledge: knowledge,
      Mechanical: mechanical,
      Perception: perception,
      Strength: strength,
      Technical: technical,
    };

    const newPlayer = {
      name: name,
      quote: quote,
      id: Math.random(),
      stats: stats,
    };

    props.onAddPlayer(newPlayer);
    setName("");
    setQuote("");
    setDexterity("");
    setKnowledge("");
    setMechanical("");
    setPerception("");
    setStrength("");
    setTechnical("");
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
          <div className={classes["new-players__control"]}>
            <label htmlFor="dexterity">Dexterity:</label>
            <input
              type="text"
              id="dexterity"
              name="dexterity"
              value={dexterity}
              onChange={dexterityChangeHandler}
            />
          </div>
          <div className={classes["new-players__control"]}>
            <label htmlFor="knowledge">Knowledge:</label>
            <input
              type="text"
              id="knowledge"
              name="knowledge"
              value={knowledge}
              onChange={knowledgeChangeHandler}
            />
          </div>
          <div className={classes["new-players__control"]}>
            <label htmlFor="mechanical">Mechanical:</label>
            <input
              type="text"
              id="mechanical"
              name="mechanical"
              value={mechanical}
              onChange={mechanicalChangeHandler}
            />
          </div>
          <div className={classes["new-players__control"]}>
            <label htmlFor="perception">Perception:</label>
            <input
              type="text"
              id="perception"
              name="perception"
              value={perception}
              onChange={perceptionChangeHandler}
            />
          </div>
          <div className={classes["new-players__control"]}>
            <label htmlFor="strength">Strength:</label>
            <input
              type="text"
              id="strength"
              name="strength"
              value={strength}
              onChange={strengthChangeHandler}
            />
          </div>
          <div className={classes["new-players__control"]}>
            <label htmlFor="technical">Technical:</label>
            <input
              type="text"
              id="technical"
              name="technical"
              value={technical}
              onChange={technicalChangeHandler}
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
