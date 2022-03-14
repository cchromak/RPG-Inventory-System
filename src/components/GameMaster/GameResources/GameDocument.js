import React, { useState } from "react";
import ExpandedImage from "./ExpandedImage";
import classes from "./GameDocument.Module.css";

const GameDocument = (props) => {
  const [showExpandedImage, setShowExpandedImage] = useState(false);

  const onShowExpandedImageHandler = () => {
    setShowExpandedImage(true);
  };
  const onHideExpandedImageHandler = () => {
    setShowExpandedImage(false);
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
        <h4 className={classes["resource-title"]}>{props.title}</h4>
        <img
          className={classes["resource-image"]}
          src={require(`../../../assets/${props.image}`).default}
          alt={props.image}
        ></img>
      </button>
    </div>
  );
};

export default GameDocument;
