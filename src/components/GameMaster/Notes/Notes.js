import React, { useState } from "react";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import classes from "./Notes.Module.css";

const Notes = (props) => {
  const [notes, setNotes] = useState(props.notes);

  const onChangeHandler = (event) => {
    setNotes(event.target.value);
  };

  const onSaveNotesHandler = () => {
    props.onSaveNotes(notes);
    props.onHideNotes();
  };

  return (
    <Modal>
      <div className={classes.notes}>
        <textarea
          className={classes["text-area"]}
          autoFocus
          onFocus={(e) =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length
            )
          }
          onChange={onChangeHandler}
          value={notes}
        ></textarea>
        <div className={classes["button-controls"]}>
          <Button
            className="red"
            title="Cancel"
            onClick={props.onHideNotes}
          ></Button>
          <Button
            className="green"
            title="Save"
            onClick={onSaveNotesHandler}
          ></Button>
        </div>
      </div>
    </Modal>
  );
};

export default Notes;
