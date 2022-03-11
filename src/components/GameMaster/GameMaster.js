import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";


import classes from "./GameMaster.Module.css";

const GameMaster = (props) => {
  return (
    <section className={classes["game-master"]}>
      <Card>
        <div className={classes["player-title"]}>
          <div>
        <img src={require(`../../assets/${props.image}`).default} alt={props.image}></img>
          </div>
          <div>
            <div className={classes["button-controls"]}>
              <Button title="Notes" />
              <Button className="blue" title="Journal" />
            </div>
            <div className={classes["player-name-quote"]}>
              <h3>{props.name}</h3>
              <p>{props.quote}</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default GameMaster;
