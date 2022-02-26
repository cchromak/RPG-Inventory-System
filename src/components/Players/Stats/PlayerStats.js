import React, { useState } from "react";

import classes from "./PlayerStats.Module.css";

const PlayerStats = (props) => {
  const [currRoll, setCurrRoll] = useState("");

  const timeOutForCurrentRoll = (diceRoll) => {
    setCurrRoll(<div className={classes.roll}>{diceRoll}</div>)
    setTimeout(() => {
      setCurrRoll("");
    }, 2000);
  };

  const onDiceRollHandler = (stats, statName) => {
    let diceCount = +stats.charAt(0);
    let bonusValue;
    if (isNaN(stats.charAt(stats.length - 1))) {
      bonusValue = 0;
    } else {
      bonusValue = +stats.charAt(stats.length - 1);
    }
    let totalDiceValue = 0;
    while (diceCount-- > 0) {
      totalDiceValue += Math.floor(Math.random() * 6) + 1;
    }
    const diceRoll = bonusValue + totalDiceValue;
    const time = new Date().toLocaleTimeString();
    props.postRollLog(diceRoll, statName, time, props.name);
    timeOutForCurrentRoll(diceRoll);
  };

  const stats = props.stats;
  const playerStatistics = Object.keys(stats).map((statName, i) => (
    <tr key={i}>
      <td>
        <button
          className={classes.button}
          onClick={() => onDiceRollHandler(stats[statName], statName)}
        >
          {statName}
        </button>
      </td>
      <td>{stats[statName]}</td>
    </tr>
  ));

  return (
    <div className={classes["roll-dash"]}>
      {currRoll}
      <table className={classes.table}>
        <tbody>{playerStatistics}</tbody>
      </table>
    </div>
  );
};

export default PlayerStats;
