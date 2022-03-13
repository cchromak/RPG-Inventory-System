import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import GameMaster from "./components/GameMaster/GameMaster";
import Header from "./components/Layout/Header";
import AddPlayer from "./components/Players/AddPlayer";
import Players from "./components/Players/Players";

function App() {
  const GAME_MASTER = {
    name: "GM Tom",
    quote: "A very funny quote.",
    image: "transformer.jpg",
    notes: ""
  };

  const DUMMY_PLAYERS = [
    {
      id: "p1",
      name: "Belmont Kin",
      items: { Ketchup: 3, Pencils: 2 },
      image: "belmont.jpg",
      stats: {
        Dexterity: "2d + 1",
        Knowledge: "3d + 1",
        Mechanical: "2d",
        Perception: "2d + 1",
        Strength: "3d",
        Technical: "2d",
      },
      quote: "Where there is one of us, there is at least one of us.",
      journal: [{ date: "1/22/2022", entry: "I feel pretty badass today." }],
    },
    {
      id: "p2",
      name: "Melba Montilet",
      items: { Bread: 8, "Space juice": 5 },
      image: "melba.jpg",
      stats: {
        Dexterity: "2d + 1",
        Knowledge: "4d",
        Mechanical: "3d",
        Perception: "2d",
        Strength: "3d",
        Technical: "3d + 1",
      },
      quote: "How do you turn this recorder on? its on?",
      journal: [
        { date: "1/22/2022", entry: "I feel pretty cool today" },
        { date: "1/22/2022", entry: "I feel pretty cool today" },
      ],
    },
    {
      id: "p3",
      name: "Renlock",
      items: { Bread: 8, "Space juice": 5 },
      image: "renlock.jpg",
      stats: {
        Dexterity: "2d + 2",
        Knowledge: "3d",
        Mechanical: "3d + 2",
        Perception: "3d + 1",
        Strength: "2d + 1",
        Technical: "3d",
      },
      quote: "Time? No, I don't have the time to tell you the time.",
      journal: [
        { date: "1/22/2022", entry: "I feel pretty cool today" },
        { date: "1/22/2022", entry: "I feel pretty cool today" },
      ],
    },
    {
      id: "p4",
      name: "Rye Mat-Za",
      items: { Bread: 8, "Space juice": 5 },
      image: "rye.jpg",
      stats: {
        Dexterity: "3d",
        Knowledge: "2d",
        Mechanical: "4d",
        Perception: "3d",
        Strength: "3d",
        Technical: "3d",
      },
      quote:
        "Best ska waves listed in order: 3rd, 1st, tie between 7th and 6th, 2nd, 5th, and we don't talk about the 4th. Freeking furries.",
      journal: [
        { date: "1/22/2022", entry: "I feel pretty cool today" },
        { date: "1/22/2022", entry: "I feel pretty cool today" },
      ],
    },
    {
      id: "p5",
      name: "Totes Rando",
      items: { Bread: 8, "Space juice": 5 },
      image: "belmont.jpg",
      stats: {
        Dexterity: "2d + 1",
        Knowledge: "4d",
        Mechanical: "2d + 2",
        Perception: "2d + 1",
        Strength: "2d + 2",
        Technical: "4d",
      },
      quote:
        "I make my own toothpaste. What do yo do with your discarded orange peals?",
      journal: [
        { date: "1/22/2022", entry: "I feel pretty cool today" },
        { date: "1/22/2022", entry: "I feel pretty cool today" },
      ],
    },
  ];

  const [viewAddPlayer, setViewAddPlayer] = useState(false);
  const [players, setPlayers] = useState(DUMMY_PLAYERS);
  const [gameMaster, setGameMaster] = useState(GAME_MASTER);
  const [rollLog, setRollLog] = useState([]);
  const [viewRollLog, setViewRollLog] = useState(false);

  const viewAddPlayerHandler = () => {
    setViewAddPlayer(true);
  };

  const hideAddPlayerHandler = () => {
    setViewAddPlayer(false);
  };

  const onViewRollLog = () => {
    setViewRollLog(true);
  };
  const onHideRollLog = () => {
    setViewRollLog(false);
  };

  const onSaveNotesHandler = (notes) => {
    setGameMaster(prevMaster => {
      let newMaster = { ...prevMaster };
      newMaster.notes = notes;
      return newMaster;
    })
   
  }

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

  const raiseItemCountHandler = (id, itemName) => {
    const prevPlayers = [...players];
    const currPlayer = prevPlayers.filter((player) => player.id === id);
    currPlayer[0].items[itemName]++;
    setPlayers(prevPlayers);
  };

  const addEntryHandler = (id, entry, position) => {
    const prevPlayers = [...players];
    const currPlayer = prevPlayers.filter((player) => player.id === id);
    if (position == null) {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formattedDate = month + "/" + day + "/" + year;
      const newEntry = { date: formattedDate, entry: entry };
      currPlayer[0].journal.push(newEntry);
    } else {
      if (entry.trim().length === 0) {
        let updatedJournal = currPlayer[0].journal.filter(
          (value, index) => index !== position
        );
        currPlayer[0].journal = updatedJournal;
      } else {
        currPlayer[0].journal[position].entry = entry;
      }
    }
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
      }, 1000);
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
        <GameMaster
          name={gameMaster.name}
          quote={gameMaster.quote}
          image={gameMaster.image}
          notes={gameMaster.notes}
          onViewPlayer={viewAddPlayerHandler}
          onViewRollLog={onViewRollLog}
          onSaveNotes={onSaveNotesHandler}
        ></GameMaster>
        <Players
          DUMMY_PLAYERS={players}
          addNewItem={onAddNewItem}
          lowerItemCount={lowerItemCountHandler}
          raiseItemCount={raiseItemCountHandler}
          onAddEntry={addEntryHandler}
          postRollLogHandler={postRollLogHandler}
          rollLog={rollLog}
          onHideRollLog={onHideRollLog}
          viewRollLog={viewRollLog}
        />
      </main>
    </Fragment>
  );
}

export default App;
