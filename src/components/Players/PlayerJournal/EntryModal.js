import React, { useState } from "react";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";

import classes from "./EntryModal.Module.css";

const EntryModal = (props) => {
  const [entry, setEntry] = useState(props.value);

  const onSetEntryHandler = (event) => {
    setEntry(event.target.value);
  };

  const onAddEntryHandler = () => {
    props.onAddEntry(props.id, entry, props.position);
    setEntry("");
    props.onHideEntryModal();
  };

  return (
    <Modal class="lower-top">
      <div className={classes.entry}>
        <textarea
          autoFocus
          onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
          className={classes["text-area"]}
          onChange={onSetEntryHandler}
          value={entry}
        ></textarea>
        <div className={classes["button-controls"]}>
          <Button
            title="Exit"
            className="red"
            onClick={props.onHideEntryModal}
          />
          <Button title="Save" className="green" onClick={onAddEntryHandler} />
        </div>
      </div>
    </Modal>
  );
};

export default EntryModal;
