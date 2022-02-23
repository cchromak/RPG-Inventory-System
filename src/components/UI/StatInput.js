import React from "react";

import classes from "./StatInput.Module.css";

const StatInput = (props) => {
  return (
    <div className={classes["new-players__control_stat"]}>
      <label>{props.label}</label>
      <div>
        <input
          type="number"
          id={props.name}
          name={props.name}
          placeholder="Dice"
          value={props.diceValue}
          onChange={props.onDiceChangeHandler}
        />
        <input
          type="number"
          id={props.name}
          name={props.name}
          placeholder="Bonus"
          value={props.bonusValue}
          onChange={props.onBonusChangeHandler}
        />
      </div>
    </div>
  );
};

export default StatInput;
