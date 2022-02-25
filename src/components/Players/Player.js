import React, { useState } from "react";
import classes from "./Player.Module.css";
import belmont from "../../assets/belmont.jpg";
import PlayerStats from "./Stats/PlayerStats";
import Button from "../UI/Button";
import PlayerItems from "./PlayerItems/PlayerItems";

const Player = (props) => {
  const [viewItems, setViewItems] = useState(false);

  const onViewItems = () => {
    setViewItems(true);
  };
  const onHideItems = () => {
    setViewItems(false);
  };

  return (
    <React.Fragment>
      <section className={classes.player}>
        <div className={classes["player-title"]}>
          <div>
            <img src={belmont} alt={props.image}></img>
          </div>
          <div>
            <Button
              className={classes.button}
              title="Items"
              onClick={onViewItems}
            />
            <h3>{props.name}</h3>
            <p>{props.quote}</p>
          </div>
        </div>
        <div>
          <PlayerStats
            stats={props.stats}
          />
        </div>
      </section>
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
