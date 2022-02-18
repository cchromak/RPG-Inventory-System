import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "./components/Layout/Header";
import AddPlayer from "./components/Players/AddPlayer";
import Players from "./components/Players/Players";

function App() {
  const DUMMY_PLAYERS = [
    {
      id: "p1",
      name: "Belmont Kin",
      items: [{ name: "oh", count: 5 }],
      image: "belmont.jpg",
      stats: {
        Dexterity: "2d + 1",
        Knowledge: "2d + 1",
        Mechanical: "2d",
        Perception: "2d + 1",
        Strength: "3d",
        Technical: "2d",
      },
      quote: "where there is one of us, there is at least one of us.",
    },
    {
      id: "p2",
      name: "Belmont Kin",
      items: [{ name: "oh", count: 5 }],
      image: "belmont.jpg",
      stats: {
        Dexterity: "9d + 1",
        Knowledge: "2d + 1",
        Mechanical: "2d",
        Perception: "2d + 1",
        Strength: "3d",
        Technical: "2d",
      },
      quote: "how do you turn this recorder on? its on?",
    },
  ];

  const [viewAddPlayer, setViewAddPlayer] = useState(false);
  const [players, setPlayers] = useState(DUMMY_PLAYERS);

  const viewAddPlayerHandler = () => {
    setViewAddPlayer(true);
  };

  const hideAddPlayerHandler = () => {
    setViewAddPlayer(false);
  };

  const addPlayerHandler = (player) => {
    setViewAddPlayer(false);
    setPlayers((prevPlayers) => {
      return [...prevPlayers, player];
    });
  };

  return (
    <Fragment>
      {viewAddPlayer && (
        <AddPlayer
          onHidePlayer={hideAddPlayerHandler}
          onAddPlayer={addPlayerHandler}
        />
      )}
      <Header />
      <main>
        <Players DUMMY_PLAYERS={players} onViewPlayer={viewAddPlayerHandler} />
      </main>
    </Fragment>
  );
}

export default App;
