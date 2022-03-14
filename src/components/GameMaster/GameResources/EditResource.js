import React from "react";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";

import classes from './EditResource.Module.css';

const EditResource = (props) => {
  return (
    <Modal>
      <p>Finish this.</p>
      <div className={classes["button-controls"]}>
      <Button title="Exit" className="red" onClick={props.onHideResources} />
      <Button title="Save" className="green" />
      </div>
    </Modal>
  );
};

export default EditResource;
