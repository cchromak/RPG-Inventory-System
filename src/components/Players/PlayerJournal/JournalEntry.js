import React from "react";
import Button from "../../UI/Button";
import classes from "./JournalEntry.Module.css";

const JournalEntry = (props) => {
  return (
    <div className={classes.entry}>
      <div className={classes["day-information"]}>
        <h3>Day: {props.day}</h3>
        <h5>{props.date}</h5>
      </div>
      <p className={classes.text}>{props.entry}</p>
      <Button className="light-grey" title="Edit" onClick={() => props.onEditEntry(props.entry, props.day - 1)} />
      <hr className={classes.line}></hr>
    </div>
  );
};

export default JournalEntry;
