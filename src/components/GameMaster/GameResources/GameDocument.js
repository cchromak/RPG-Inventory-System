import React, { useState } from "react";
import ExpandedImage from './ExpandedImage';
import classes from "./GameDocument.Module.css";

const GameDocument = (props) => {
  const [showExpandedImage, setShowExpandedImage] = useState(false);
  
  const onShowExpandedImageHandler = () => {
    setShowExpandedImage(true);
    console.log(props.image);
  };
  const onHideExpandedImageHandler = () => {
    setShowExpandedImage(false);
    console.log(props.image);
  };

  return (
    <div>
      {showExpandedImage && (
        <ExpandedImage
          image={props.image}
          onHideExpandedImage={onHideExpandedImageHandler}
        />
      )}
      <button
        className={classes["resource-button"]}
        onClick={onShowExpandedImageHandler}
      >
        <img
          className={classes["resource-image"]}
          src={require(`../../../assets/${props.image}`).default}
          alt={props.image}
        ></img>
      </button>
      <p>{props.title}</p>
    </div>
  );
};

export default GameDocument;
