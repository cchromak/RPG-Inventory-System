import React from "react";

import classes from "./StatInput.Module.css";

const StatInput = (props) => {
  return (
    <div className={classes["new-players__control_stat"]}>
      <label>{props.label}</label>
      <div className={classes.input}>
        <input
          type="number"
          id={props.name}
          name={props.name}
          min={1}
          max={9}
          placeholder="Dice"
          value={props.diceValue}
          onChange={props.onDiceChangeHandler}
        />
        <input
          type="number"
          id={props.name}
          name={props.name}
          min={0}
          max={9}
          placeholder="Bonus"
          value={props.bonusValue}
          onChange={props.onBonusChangeHandler}
        />
      </div>
    </div>
  );
};

export default StatInput;
