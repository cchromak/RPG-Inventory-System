import React from "react";
import classes from "./JournalEntry.Module.css";

const JournalEntry = (props) => {
  return (
    <div className={classes.entry}>
      <div className={classes["day-information"]}>
        <h3>Day: {props.day}</h3>
        <h5>{props.date}</h5>
      </div>
      <p className={classes.text}>{props.entry}</p>
      <hr className={classes.line}></hr>
    </div>
  );
};

export default JournalEntry;
