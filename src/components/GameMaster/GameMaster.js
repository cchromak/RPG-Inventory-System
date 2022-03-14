import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./GameMaster.Module.css";
import GameResources from "./GameResources/GameResources";
import Notes from "./Notes/Notes";

const GameMaster = (props) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const onShowNotesHandler = () => {
    setShowNotes(true);
  };
  const onHideNotesHandler = () => {
    setShowNotes(false);
  };
  const onShowResourcesHandler = () => {
    setShowResources(true);
  };
  const onHideResourcesHandler = () => {
    setShowResources(false);
  };

  return (
    <section className={classes["game-master"]}>
      <Card>
        <div className={classes["player-title"]}>
          <div>
            <img
              src={require(`../../assets/${props.image}`).default}
              alt={props.image}
            ></img>
          </div>
          <div>
            <div className={classes["button-controls"]}>
              <Button
                className="green"
                title="Notes"
                onClick={onShowNotesHandler}
              />
              <Button className="blue" title="Journal" />
              <Button
                className="purple"
                title="Roll log"
                onClick={props.onViewRollLog}
              />
              <Button
                className="orange"
                title="Resources"
                onClick={onShowResourcesHandler}
              />
              <Button
                onClick={props.onViewPlayer}
                className="light-grey"
                title="Add player"
              />
            </div>
            <div className={classes["player-name-quote"]}>
              <h3>{props.name}</h3>
              <p>{props.quote}</p>
            </div>
          </div>
        </div>
        {showResources && (
          <GameResources
            gameResources={props.resources}
            onHideResources={onHideResourcesHandler}
          />
        )}
        {showNotes && (
          <Notes
            notes={props.notes}
            onHideNotes={onHideNotesHandler}
            onSaveNotes={props.onSaveNotes}
          />
        )}
      </Card>
    </section>
  );
};

export default GameMaster;
