import React from "react";
import Player from "./Player";
import Card from "../UI/Card";


import classes from "./Players.Module.css";

const Players = (props) => {

  const players = props.DUMMY_PLAYERS.map((player) => (
    <Player
      name={player.name}
      key={player.id}
      id={player.id}
      image={player.image}
      quote={player.quote}
      stats={player.stats}
      items={player.items}
      addNewItem={props.addNewItem}
      lowerItemCount={props.lowerItemCount}
      raiseItemCount={props.raiseItemCount}
      postRollLog={props.postRollLogHandler}
      rollLog={props.rollLog}
      onHideRollLog={props.onHideRollLog}
      viewRollLog={props.viewRollLog}
      journal={player.journal}
      onAddEntry={props.onAddEntry}
    />
  ));
  return (
    <section className={classes.players}>
      <Card>
        {players}
      </Card>
    </section>
  );
};

export default Players;
