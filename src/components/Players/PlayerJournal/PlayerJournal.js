import React, { useState } from "react";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import JournalEntry from "./JournalEntry";
import classes from "./PlayerJournal.Module.css";
import EntryModal from "./EntryModal";

const PlayerJournal = (props) => {
  const [viewEntryModal, setViewEntryModal] = useState(false);

  const viewEntryModalHandler = () => {
    setViewEntryModal(true);
  };

  const hideEntryModalHandler = () => {
    setViewEntryModal(false);
  };

  const entries = props.journal.map((entry, index) => (
    <JournalEntry date={entry.date} day={index + 1} entry={entry.entry} />
  ));
  return (
    <Modal>
      <div className={classes.scrollable}>{entries}</div>
      {viewEntryModal && (
        <EntryModal onHideEntryModal={hideEntryModalHandler} id={props.id} onAddEntry={props.onAddEntry}/>
      )}
      <div className={classes["button-controls"]}>
        <Button onClick={props.onHideJournal} title="Exit" className="red" />
        <Button
          onClick={viewEntryModalHandler}
          title="Add Entry"
          className="green"
        />
      </div>
    </Modal>
  );
};

export default PlayerJournal;
