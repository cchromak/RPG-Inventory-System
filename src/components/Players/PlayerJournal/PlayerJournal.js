import React from "react";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import JournalEntry from "./JournalEntry";
import classes from './PlayerJournal.Module.css';

const PlayerJournal = (props) => {
  const entries = props.journal.map((entry, index) => (
    <JournalEntry date={entry.date} day={index + 1} entry={entry.entry} />
  ));
  return (
    <Modal>
      <div className={classes.scrollable}> 
        {entries}
      </div>
      <Button onClick={props.onHideJournal} title="Exit" className="red" />
    </Modal>
  );
};

export default PlayerJournal;
