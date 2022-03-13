import React from "react";
import GameDocument from "./GameDocument";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import classes from './GameResources.Module.css';

const GameResources = (props) => {
  const documents = props.gameResources.map((document) => (
    <GameDocument image={document.image} title={document.title} />
  ));
  return (
    <Modal>
      <div className={classes.scrollable}>{documents}</div>
      <Button title="Exit" className="red" onClick={props.onHideResources} />
    </Modal>
  );
};

export default GameResources;
