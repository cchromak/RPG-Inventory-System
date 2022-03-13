import React from "react";
import ReactDom from "react-dom";
import Button from "../../UI/Button";
import classes from './ExpandedImage.Module.css';

const portalElement = document.getElementById("expanded-image");

const ExpandedImage = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <div className={classes["expanded-image"]}>
          <img
            src={require(`../../../assets/${props.image}`).default}
            alt={props.image}
          ></img>
          <Button
            title="Exit"
            className="red"
            onClick={props.onHideExpandedImage}
          ></Button>
        </div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default ExpandedImage;
