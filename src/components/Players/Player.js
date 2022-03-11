import React, { useState } from "react";
import classes from "./Player.Module.css";
import PlayerStats from "./Stats/PlayerStats";
import Button from "../UI/Button";
import PlayerItems from "./PlayerItems/PlayerItems";
import RollLog from "./Stats/RollLog";
import PlayerJournal from "./PlayerJournal/PlayerJournal";

const Player = (props) => {
  const [viewItems, setViewItems] = useState(false);
  const [viewJournal, setViewJournal] = useState(false);

  const onViewItems = () => {
    setViewItems(true);
  };
  const onHideItems = () => {
    setViewItems(false);
  };

  const onViewJournal = () => {
    setViewJournal(true);
  };
  const onHideJournal = () => {
    setViewJournal(false);
  };

  return (
    <React.Fragment>
      <section className={classes.player}>
        <div className={classes["player-title"]}>
          <div>
            <img src={require(`../../assets/${props.image}`).default} alt={props.image}></img>
          </div>
          <div>
            <div className={classes["button-controls"]}>
              <Button className="green" title="Items" onClick={onViewItems} />
              <Button
                className="blue"
                title="Journal"
                onClick={onViewJournal}
              />
            </div>
            <div className={classes["player-name-quote"]}>
              <h3>{props.name}</h3>
              <p>{props.quote}</p>
            </div>
          </div>
        </div>
        <div>
          <PlayerStats
            stats={props.stats}
            postRollLog={props.postRollLog}
            name={props.name}
          />
        </div>
      </section>
      {props.viewRollLog && (
        <RollLog
          onHideRollLog={props.onHideRollLog}
          rollLog={props.rollLog}
          playerName={props.name}
        />
      )}
      {viewJournal && (
        <PlayerJournal
          id={props.id}
          journal={props.journal}
          onHideJournal={onHideJournal}
          onAddEntry={props.onAddEntry}
        />
      )}
      {viewItems && (
        <PlayerItems
          id={props.id}
          items={props.items}
          onHideItems={onHideItems}
          addNewItem={props.addNewItem}
          lowerItemCount={props.lowerItemCount}
          raiseItemCount={props.raiseItemCount}
        />
      )}
    </React.Fragment>
  );
};

export default Player;
