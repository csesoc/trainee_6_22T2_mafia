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
  currentPage: 'main',
  setCurrPage: () => {},
  currentVoter: 0,
  setCurrentVoter: () => {},
});

const GameContextProvider = ({ children }) => {
  /* player fields: 
    - name (string)
    - alive (bool)
    - role (string) options:
      - barista
      - mafia
      - mafioso??
      - doctor??
      - detective??
      - sheriff??
      - ??
    - id (int) (index in array for easy retrieval)
    */
  const [players, setPlayers] = useState([
    {
      name: 'James',
      alive: true,
      role: 'barista',
      id: 0,
      hasVoted: false,
    },
    {
      name: 'MJ',
      alive: false,
      role: 'mafia',
      id: 1,
      hasVoted: true,
    },
    {
      name: 'Nyah',
      alive: true,
      role: 'doctor',
      id: 2,
      hasVoted: true,
    },
    {
      name: 'Ahnaf',
      alive: true,
      role: 'detective',
      id: 3,
      hasVoted: true,
    },
    {
      name: 'Suri',
      alive: true,
      role: 'mafia',
      id: 4,
      hasVoted: true,
    },
    {
      name: 'Linda',
      alive: true,
      role: 'barista',
      id: 5,
      hasVoted: true,
    },
    {
      name: 'Blair',
      alive: true,
      role: 'barista',
      id: 6,
      hasVoted: true,
    },
  ]);
  const [votes, setVotes] = useState({
    //arrays indexed by by player id
    kill: [0, 1, 1, 1, 1, 0, 0],
    save: [0, 0, 0, 0, 0, 0, 0],
  });

  const [numMafia, setNumMafia] = useState(0);
  const [numTownspeople, setNumTownspeople] = useState(0);
  const [votingTime, setVotingTime] = useState(10);
  const [dayNum, setDayNum] = useState(0);
  const [isDay, setIsDay] = useState(true);
  const [currentPage, setCurrPage] = useState('DayVoting'); //options: 'MainMenu', 'DayVoting', 'NightVoting', 'DeathMessage', 'SelectVoter', 'NightMessage', 'Discussion'
  const [currentVoter, setCurrentVoter] = useState(players[0]);

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
    currentVoter,
    setCurrentVoter,
    votes,
    setVotes,
    isDay,
    setIsDay,
  };

  return (
    <GameContext.Provider value={initialContext}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
