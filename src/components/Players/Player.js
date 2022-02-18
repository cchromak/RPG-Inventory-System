import React from "react";
import classes from "./Player.Module.css";
import belmont from "../../assets/belmont.jpg";
import PlayerStats from "./Stats/PlayerStats";

const Player = (props) => {
  return (
    <section className={classes.player}>
      <div>
        <img src={belmont} alt={props.image}></img>
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.quote}</p>
      </div>
      <div>
          <PlayerStats stats={props.stats}/>
      </div>
    </section>
  );
};

export default Player;
