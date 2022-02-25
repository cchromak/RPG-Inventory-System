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
      items: { Kethcup: 3, Pencils: 2 },
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
      items: { Bread: 8, "Space juice": 5 },
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

  const raiseItemCountHandler = (id, itemName) => {
    const prevPlayers = [...players];
    const currPlayer = prevPlayers.filter((player) => player.id === id);
    currPlayer[0].items[itemName]++;
    setPlayers(prevPlayers);
  };

  const lowerItemCountHandler = (id, itemName) => {
    const prevPlayers = [...players];
    const currPlayer = prevPlayers.filter((player) => player.id === id);
    if (currPlayer[0].items[itemName] > 1) {
      currPlayer[0].items[itemName]--;
      setPlayers(prevPlayers);
    } else {
      currPlayer[0].items[itemName]--;
      setPlayers(prevPlayers);
      const newPrevPlayers = [...players];
    const newCurrPlayer = newPrevPlayers.filter((player) => player.id === id);
      setTimeout(() => {
        delete newCurrPlayer[0].items[itemName];
        setPlayers(newPrevPlayers);
      }, 1000);;
    }
  };

  const onAddNewItem = (id, newItem) => {
    const prevPlayers = [...players];
    const currPlayer = prevPlayers.filter((player) => player.id === id);
    currPlayer[0].items[newItem.name] = newItem.count;
    setPlayers(prevPlayers);
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
        <Players
          DUMMY_PLAYERS={players}
          addNewItem={onAddNewItem}
          onViewPlayer={viewAddPlayerHandler}
          lowerItemCount={lowerItemCountHandler}
          raiseItemCount={raiseItemCountHandler}
        />
      </main>
    </Fragment>
  );
}

export default App;
