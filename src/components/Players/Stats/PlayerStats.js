import React from "react";
import classes from "./PlayerStats.Module.css";

const PlayerStats = (props) => {
  const stats = props.stats;
  const playerStatistics = Object.keys(stats).map((statName, i) => (
    <tr key={i}>
      <td>{statName}</td>
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
