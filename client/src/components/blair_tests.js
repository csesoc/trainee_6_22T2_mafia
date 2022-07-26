// POLYMORPHISM/ ROLE TESTING
// BACKEND
const roles = {
  Mafia: {
    nameString: 'Mafia',
    actions: {
      kill: {
        nameStr: 'kill',
        choosePlayers: true,
        do: (params) => {
          for (const player of players) {
            if (player.id === params.playerID) {
              player.alive = false;
              console.log(`The Mafia has murdered ${player.name}!`);
              return;
            }
          }
        },
      },
      abstain: {
        nameStr: 'abstain',
        choosePlayers: false,
        do: () => {
          console.log(
            'The Mafia has abstained from taking action on this night.'
          );
        },
      },
    },
    help: 'The Mafia can kill one player every night.',
  },
  Doctor: {
    nameStr: 'Doctor',
    actions: {
      heal: {
        nameStr: 'heal',
        choosePlayers: true,
        do: (params) => {
          for (const player of players) {
            if (player.id === params.playerID) {
              player.alive = true;
              console.log(`The Doctor has healed ${player.name}!`);
              return;
            }
          }
        },
      },
      abstain: {
        nameStr: 'abstain',
        choosePlayers: false,
        do: (params) => {
          console.log(
            `The Doctor has abstained from taking action on this night.`
          );
        },
      },
    },
    help: 'The Doctor can heal or protect one player at any time.',
  },
};

// BACKEND NOT API
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

// BACKEND
const assignRoles = (players, roleNumbers) => {
  const playerRoles = [];

  // Create an array with the right amount of entries
  Object.entries(roleNumbers).forEach(([key, value]) => {
    for (let i = 0; i < value; i++) {
      playerRoles.push(key);
    }
  });

  // Shuffle array
  // Fisher-Yates algorithm
  console.log(playerRoles);
  for (let i = 0; i < 5; i++) {
    shuffleArray(playerRoles);
    console.log(playerRoles);
  }
};

// FRONTEND
const players = [];

// FRONTEND
const createPlayer = (id, username, role) => {
  // id should be generated within the function
  const newPlayer = {
    id: id,
    name: username,
    alive: true,
    role: role,
    action: '',
    params: {},
  };

  players.push(newPlayer);
};

// FRONTEND??
const doNightAction = (playerID) => {
  for (const player of players) {
    if (player.id === playerID) {
      roles[player.role].actions[player.action].do(player.params);
      return;
    }
  }
};

// FRONTEND??
const endNight = () => {
  for (const player of players) {
    doNightAction(player.id);
  }
};

// FRONTEND
const promptAction = (player) => {
  console.log(`${player.name}'s turn.`);

  console.log(`${player.name}, choose your action:`);
  Object.keys(roles[player.role].actions).forEach((key, index) => {
    console.log(`${index + 1}: ${key}`);
  });

  let userInput = 1;
  player.action = 'abstain';
  Object.keys(roles[player.role].actions).forEach((key, index) => {
    if (index + 1 === userInput) {
      player.action = key;
    }
  });
  console.log(`Action: ${player.action}`);
};

// FRONTEND
const night = () => {
  for (const player of players) {
    if (player.alive) {
      promptAction(player);
    }
  }
};

// FRONTEND
const oneCycle = () => {
  night();
  endNight();

  // day();
  // endDay();
  // endDay checks if the game is over
};

// TESTING
const test = () => {
  assignRoles(
    {},
    {
      Mafia: 2,
      Doctor: 2,
      Detective: 1,
      Civilian: 2,
    }
  );
  return;
  createPlayer(1, 'Nats', 'Mafia');
  createPlayer(2, 'Blaii', 'Doctor');

  // console.log(players);
  players[0].action = 'abstain';
  players[1].action = 'abstain';
  night();
  players[0].params = { playerID: 2 };
  players[1].params = { playerID: 2 };
  endNight();
};

test();
