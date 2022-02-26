import React from "react";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";

import classes from "./RollLog.Module.css";

const RollLog = (props) => {
  const rollLog = props.rollLog.map((roll) => (
    <div className={classes["roll-log"]} key={roll.date + "_" + roll.value}>
      <div className={classes["roll-item"]}>{roll.date}</div>
      <div className={classes["roll-item"]}>{roll.playerName}</div>
      <div className={classes["roll-item"]}>{roll.name}</div>
      <div className={classes["roll-item"]}>{roll.value}</div>
    </div>
  ));
  return (
    <Modal>
      <div className={classes.scrollable}>
        <div>{rollLog}</div>
      </div>
      <Button onClick={props.onHideRollLog} title="Exit" className="red" />
    </Modal>
  );
};

export default RollLog;
