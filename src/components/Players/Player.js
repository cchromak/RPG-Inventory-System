import React from "react";
import classes from "./Player.Module.css";
import belmont from "../../assets/belmont.jpg";
import PlayerStats from "./Stats/PlayerStats";
import Button from "../UI/Button";

const Player = (props) => {
  return (
    <section className={classes.player}>
      <div className={classes["player-title"]}>
        <div>
          <img src={belmont} alt={props.image}></img>
        </div>
        <div>
          <Button className={classes.button} title="Items"/>
          <h3>{props.name}</h3>
          <p>{props.quote}</p>
        </div>
      </div>
      <div>
        <PlayerStats stats={props.stats} />
      </div>
    </section>
  );
};

export default Player;
