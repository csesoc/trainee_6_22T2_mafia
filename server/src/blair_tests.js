// POLYMORPHISM/ ROLE TESTING
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
                    console.log('The Mafia has abstained from taking action on this night.');
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
                    console.log(`The Doctor has abstained from taking action on this night.`);
                },
            },
        },
        help: 'The Doctor can heal or protect one player at any time.',
    },
};

const players = [];

const createPlayer = (id, username, role) => {
    const newPlayer = {
        id: id,
        name: username,
        alive: true,
        role: role,
        action: '',
        params: {},
    };

    players.push(newPlayer);
}

const doNightAction = (playerID) => {
    for (const player of players) {
        if (player.id === playerID) {
            roles[player.role].actions[player.action].do(player.params);
            return;
        }
    }
}

const endNight = () => {
    for (const player of players) {
        doNightAction(player.id);
    }
}

const promptAction = (player) => {
    console.log(`${player.name}'s turn.`);

    console.log(`${player.name}, choose your action:`);
    Object.keys(roles[player.role].actions).forEach((key, index) => {
        console.log(`${index+1}: ${key}`);
    });

    let userInput = 1;
    player.action = 'abstain';
    Object.keys(roles[player.role].actions).forEach((key, index) => {
        if (index+1 === userInput) {
            player.action = key;
        }
    });
    console.log(`Action: ${player.action}`);
}

const night = () => {
    for (const player of players) {
        if (player.alive) {
            promptAction(player);
        }
    }
}

const oneCycle = () => {
    night();
    endNight();

    // day();
    // endDay();
    // endDay checks if the game is over
}

const test = () => {
    createPlayer(1, 'Nats', 'Mafia');
    createPlayer(2, 'Blaii', 'Doctor');

    // console.log(players);
    players[0].action = 'abstain';
    players[1].action = 'abstain';
    night();
    players[0].params = {playerID: 2};
    players[1].params = {playerID: 2};
    endNight();
}

test();