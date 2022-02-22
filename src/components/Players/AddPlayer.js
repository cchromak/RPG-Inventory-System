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
  const [error, setError] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const quoteChangeHandler = (event) => {
    setQuote(event.target.value);
  };
  const dexterityChangeHandler = (event) => {
    setDexterity(event.target.value);
  };
  const knowledgeChangeHandler = (event) => {
    setKnowledge(event.target.value);
  };
  const mechanicalChangeHandler = (event) => {
    setMechanical(event.target.value);
  };
  const perceptionChangeHandler = (event) => {
    setPerception(event.target.value);
  };
  const strengthChangeHandler = (event) => {
    setStrength(event.target.value);
  };
  const technicalChangeHandler = (event) => {
    setTechnical(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      name.length < 1 ||
      quote.length < 1 ||
      dexterity.length < 1 ||
      knowledge.length < 1 ||
      mechanical.length < 1 ||
      perception.length < 1 ||
      strength.length < 1 ||
      technical.length < 1
    ) {
      setError(true);
      return;
    }
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
      {error ? (
        <p className={classes.error}>Please fill out entire form.</p>
      ) : (
        ""
      )}
      <form onSubmit={submitHandler}>
        <div className={classes["new-players__control"]}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={classes["new-players__control"]}>
          <input
            type="text"
            id="quote"
            name="quote"
            placeholder="Quote"
            value={quote}
            onChange={quoteChangeHandler}
          />
        </div>
        <div className={classes["new-players__control"]}>
          <input
            type="text"
            id="dexterity"
            name="dexterity"
            placeholder="Dexterity"
            value={dexterity}
            onChange={dexterityChangeHandler}
          />
        </div>
        <div className={classes["new-players__control"]}>
          <input
            type="text"
            id="knowledge"
            name="knowledge"
            placeholder="Knowledge"
            value={knowledge}
            onChange={knowledgeChangeHandler}
          />
        </div>
        <div className={classes["new-players__control"]}>
          <input
            type="text"
            id="mechanical"
            name="mechanical"
            placeholder="Mechanical"
            value={mechanical}
            onChange={mechanicalChangeHandler}
          />
        </div>
        <div className={classes["new-players__control"]}>
          <input
            type="text"
            id="perception"
            name="perception"
            placeholder="Percetion"
            value={perception}
            onChange={perceptionChangeHandler}
          />
        </div>
        <div className={classes["new-players__control"]}>
          <input
            type="text"
            id="strength"
            name="strength"
            placeholder="Strength"
            value={strength}
            onChange={strengthChangeHandler}
          />
        </div>
        <div className={classes["new-players__control"]}>
          <input
            type="text"
            id="technical"
            name="technical"
            placeholder="Technical"
            value={technical}
            onChange={technicalChangeHandler}
          />
        </div>
        <div className={classes["new-players__control"]}>
          <Button onClick={props.onHidePlayer} title="Cancel" />
          <Button type="submit" onClick={submitHandler} title="Add" />
        </div>
      </form>
    </Modal>
  );
};

export default AddPlayer;
