import React, {useState } from "react";
import GameDocument from "./GameDocument";
import EditResource from "./EditResource";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import classes from './GameResources.Module.css';

const GameResources = (props) => {
    const [viewEditResource, setViewEditResource] = useState(false);

    const onViewEditResources = () => {
        setViewEditResource(true);
    }
     const onHideEditResources = () => {
       setViewEditResource(false);
     }

  const documents = props.gameResources.map((document, index) => (
    <GameDocument image={document.image} title={document.title} key={index + document.title} />
  ));
  return (
    <Modal>
        {viewEditResource && <EditResource onHideResources={onHideEditResources}/>}
      <div className={classes.scrollable}>{documents}</div>
      <div className={classes["button-controls"]}>
      <Button title="Exit" className="red" onClick={props.onHideResources} />
      <Button title="Edit" className="green" onClick={onViewEditResources}/>
      </div>
    </Modal>
  );
};

export default GameResources;
