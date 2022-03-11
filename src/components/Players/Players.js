import React, { useState } from "react";
import Player from "./Player";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./Players.Module.css";

const Players = (props) => {
  const [rollLog, setRollLog] = useState([]);
  const [viewRollLog, setViewRollLog] = useState(false);

  const onViewRollLog = () => {
    setViewRollLog(true);
  };
  const onHideRollLog = () => {
    setViewRollLog(false);
  };

  const postRollLogHandler = (value, name, date, playerName) => {
    let newRollLog = {
      date: date,
      name: name,
      value: value,
      playerName: playerName,
    };
    setRollLog((prevRollLog) => {
      prevRollLog.push(newRollLog);
      return prevRollLog;
    });
  };

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
      postRollLog={postRollLogHandler}
      rollLog={rollLog}
      onHideRollLog={onHideRollLog}
      viewRollLog={viewRollLog}
      journal={player.journal}
      onAddEntry={props.onAddEntry}
    />
  ));
  return (
    <section className={classes.players}>
      <Card>
        {players}
        <div className={classes["button-controls"]}>
          
          <Button className="blue" title="Roll log" onClick={onViewRollLog} />
        </div>
      </Card>
    </section>
  );
};

export default Players;
