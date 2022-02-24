import React from "react";
import Player from "./Player";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./Players.Module.css";

const Players = (props) => {
  const players = props.DUMMY_PLAYERS.map((player) => (
    <Player
      name={player.name}
      key={player.id}
      quote={player.quote}
      stats={player.stats}
      items={player.items}
    />
  ));

  return (
    <section className={classes.players}>
      <Card>
        {players}
        <Button onClick={props.onViewPlayer} title="Add player" />
      </Card>
    </section>
  );
};

export default Players;
