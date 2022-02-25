import React from "react";
import classes from "./PlayerStats.Module.css";

const PlayerStats = (props) => {
  
  const onDiceRollHandler = (stats) => {
    let diceCount = +stats.charAt(0);
    let bonusValue;
    if (isNaN(stats.charAt(stats.length - 1))) {
      bonusValue = 0;
    } else {
      bonusValue = +stats.charAt(stats.length - 1);
    }
    let totalDiceValue = 0;
    while (diceCount-- > 0) {
      totalDiceValue += (Math.floor(Math.random() * 6) + 1)
    }
    const diceRoll = bonusValue + totalDiceValue;
    console.log(diceRoll);
  };


  const stats = props.stats;
  const playerStatistics = Object.keys(stats).map((statName, i) => 
  // onDiceRollHandler(statName)
  (
    <tr key={i}>
      <td>
        <button className={classes.button} onClick={() => onDiceRollHandler(stats[statName])}>
          {statName}
        </button>
      </td>
      <td>{stats[statName]}</td>
    </tr>
  ));

  return (
    <table className={classes.table}>
      <tbody>{playerStatistics}</tbody>
    </table>
  );
};

export default PlayerStats;
