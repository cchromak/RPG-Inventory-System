import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./AddPlayer.Module.css";
import StatInput from "../UI/StatInput";

const formatStatForDisplay = (diceCount, bonusCount) => {
  let stats = "";
  if (bonusCount > 0) {
    stats = diceCount + "d + " + bonusCount;
  } else {
    stats = diceCount + "d";
  }
  return stats;
};

const AddPlayer = (props) => {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [dexterityDice, setDexterityDice] = useState("");
  const [dexterityBonus, setDexterityBonus] = useState("");
  const [knowledgeDice, setKnowledgeDice] = useState("");
  const [knowledgeBonus, setKnowledgeBonus] = useState("");
  const [mechanicalDice, setMechanicalDice] = useState("");
  const [mechanicalBonus, setMechanicalBonus] = useState("");
  const [perceptionDice, setPerceptionDice] = useState("");
  const [perceptionBonus, setPerceptionBonus] = useState("");
  const [strengthDice, setStrengthDice] = useState("");
  const [strengthBonus, setStrengthBonus] = useState("");
  const [technicalDice, setTechnicalDice] = useState("");
  const [technicalBonus, setTechnicalBonus] = useState("");
  const [error, setError] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const quoteChangeHandler = (event) => {
    setQuote(event.target.value);
  };
  const dexterityDiceChangeHandler = (event) => {
    setDexterityDice(event.target.value);
  };
  const dexterityBonusChangeHandler = (event) => {
    setDexterityBonus(event.target.value);
  };
  const knowledgeDiceChangeHandler = (event) => {
    setKnowledgeDice(event.target.value);
  };
  const knowledgeBonusChangeHandler = (event) => {
    setKnowledgeBonus(event.target.value);
  };
  const mechanicalDiceChangeHandler = (event) => {
    setMechanicalDice(event.target.value);
  };
  const mechanicalBonusChangeHandler = (event) => {
    setMechanicalBonus(event.target.value);
  };
  const perceptionDiceChangeHandler = (event) => {
    setPerceptionDice(event.target.value);
  };
  const perceptionBonusChangeHandler = (event) => {
    setPerceptionBonus(event.target.value);
  };
  const strengthDiceChangeHandler = (event) => {
    setStrengthDice(event.target.value);
  };
  const strengthBonusChangeHandler = (event) => {
    setStrengthBonus(event.target.value);
  };
  const technicalDiceChangeHandler = (event) => {
    setTechnicalDice(event.target.value);
  };
  const technicalBonusChangeHandler = (event) => {
    setTechnicalBonus(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      name.length < 1 ||
      quote.length < 1 ||
      dexterityDice.length < 1 ||
      knowledgeDice.length < 1 ||
      mechanicalDice.length < 1 ||
      perceptionDice.length < 1 ||
      strengthDice.length < 1 ||
      technicalDice.length < 1
    ) {
      setError(true);
      return;
    }

    const stats = {
      Dexterity: formatStatForDisplay(dexterityDice, dexterityBonus),
      Knowledge: formatStatForDisplay(knowledgeDice, knowledgeBonus),
      Mechanical: formatStatForDisplay(mechanicalDice, mechanicalBonus),
      Perception: formatStatForDisplay(perceptionDice, perceptionBonus),
      Strength: formatStatForDisplay(strengthDice, strengthBonus),
      Technical: formatStatForDisplay(technicalDice, technicalBonus),
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
    setDexterityDice("");
    setDexterityBonus("");
    setKnowledgeDice("");
    setKnowledgeBonus("");
    setMechanicalDice("");
    setMechanicalBonus("");
    setPerceptionDice("");
    setPerceptionBonus("");
    setStrengthDice("");
    setStrengthBonus("");
    setTechnicalDice("");
    setTechnicalBonus("");
  };

  return (
    <Modal onHidePlayer={props.onHidePlayer}>
      {error ? <p className={classes.error}>Missing information</p> : ""}
      <form onSubmit={submitHandler}>
        <div className={classes["new-players__control"]}>
          <input
            autoFocus
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
        <StatInput
          name="dexterity"
          label="Dexterity"
          diceValue={dexterityDice}
          bonusValue={dexterityBonus}
          onDiceChangeHandler={dexterityDiceChangeHandler}
          onBonusChangeHandler={dexterityBonusChangeHandler}
        />
        <StatInput
          name="knowledge"
          label="Knowledge"
          diceValue={knowledgeDice}
          bonusValue={knowledgeBonus}
          onDiceChangeHandler={knowledgeDiceChangeHandler}
          onBonusChangeHandler={knowledgeBonusChangeHandler}
        />
        <StatInput
          name="mechanical"
          label="Mechanical"
          diceValue={mechanicalDice}
          bonusValue={mechanicalBonus}
          onDiceChangeHandler={mechanicalDiceChangeHandler}
          onBonusChangeHandler={mechanicalBonusChangeHandler}
        />
        <StatInput
          name="perception"
          label="Perception"
          diceValue={perceptionDice}
          bonusValue={perceptionBonus}
          onDiceChangeHandler={perceptionDiceChangeHandler}
          onBonusChangeHandler={perceptionBonusChangeHandler}
        />
        <StatInput
          name="strength"
          label="Strength"
          diceValue={strengthDice}
          bonusValue={strengthBonus}
          onDiceChangeHandler={strengthDiceChangeHandler}
          onBonusChangeHandler={strengthBonusChangeHandler}
        />
        <StatInput
          name="technical"
          label="Technical"
          diceValue={technicalDice}
          bonusValue={technicalBonus}
          onDiceChangeHandler={technicalDiceChangeHandler}
          onBonusChangeHandler={technicalBonusChangeHandler}
        />
        <div className={classes["new-players__control"]}>
          <Button onClick={props.onHidePlayer} title="Cancel" />
          <Button type="submit" onClick={submitHandler} title="Add" />
        </div>
      </form>
    </Modal>
  );
};

export default AddPlayer;
