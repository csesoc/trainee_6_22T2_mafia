import React, { createContext, useState } from 'react';

export const GameContext = createContext({
  players: [],
  setPlayers: () => {},
  numMafia: 0,
  setNumMafia: () => {},
  numTownspeople: 0,
  setNumTownspeople: () => {},
  votingTime: 10,
  setVotingTime: () => {},
  dayNum: 0,
  setDayNum: () => {},
  currentPage: 'voting',
  setCurrPage: () => {},
});

const GameContextProvider = ({ children }) => {
  /* player fields: 
    - hasVoted: whether the player has voted in the current phase of the game, needs to be reset after/before each new phase
    - currentVotes: how many votes there are against this player in the current phase of the game, needs to be reset after/before each new phase

    */
  const [players, setPlayers] = useState([
    {
      name: 'James',
      alive: true,
      role: 'barista',
      id: 0,
      hasVoted: false,
      currentVotes: 0,
    },
    {
      name: 'MJ',
      alive: false,
      role: 'mafia',
      id: 1,
      hasVoted: false,
      currentVotes: 1,
    },
    {
      name: 'Nyah',
      alive: false,
      role: 'doctor',
      id: 2,
      hasVoted: false,
      currentVotes: 0,
    },
    {
      name: 'Ahnaf',
      alive: true,
      role: 'detective',
      id: 3,
      hasVoted: true,
      currentVotes: 0,
    },
    {
      name: 'Suri',
      alive: true,
      role: 'mafia',
      id: 4,
      hasVoted: true,
      currentVotes: 0,
    },
    {
      name: 'Linda',
      alive: true,
      role: 'barista',
      id: 5,
      hasVoted: false,
      currentVotes: 0,
    },
    {
      name: 'Blair',
      alive: true,
      role: 'barista',
      id: 6,
      hasVoted: false,
      currentVotes: 0,
    },
  ]);
  const [numMafia, setNumMafia] = useState(0);
  const [numTownspeople, setNumTownspeople] = useState(0);
  const [votingTime, setVotingTime] = useState(10);
  const [dayNum, setDayNum] = useState(0);
  const [currentPage, setCurrPage] = useState('voting');

  const initialContext = {
    players,
    setPlayers,
    numMafia,
    setNumMafia,
    numTownspeople,
    setNumTownspeople,
    votingTime,
    setVotingTime,
    dayNum,
    setDayNum,
    currentPage,
    setCurrPage,
  };

  return (
    <GameContext.Provider value={initialContext}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
