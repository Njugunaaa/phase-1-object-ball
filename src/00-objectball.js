function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        }
      }
    }
  };
}

function numPointsScored(playerName) {
  const game = gameObject();
  for (const team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
}

function shoeSize(playerName) {
  const game = gameObject();
  for (const team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
}

function teamColors(teamName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  const jerseyNumbers = [];
  for (const team in game) {
    if (game[team].teamName === teamName) {
      const players = game[team].players;
      for (const player in players) {
        jerseyNumbers.push(players[player].number);
      }
    }
  }
  return jerseyNumbers;
}

function playerStats(playerName) {
  const game = gameObject();
  for (const team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoeSize = 0;
  let rebounds = 0;

  for (const team in game) {
    const players = game[team].players;

    for (const player in players) {
      const playerData = players[player];

      debugger;

      if (playerData.shoe > biggestShoeSize) {
        biggestShoeSize = playerData.shoe;
        rebounds = playerData.rebounds;
      }
    }
  }

  return rebounds;
}

console.log(numPointsScored("Ben Gordon"));
console.log(shoeSize("Brook Lopez"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerStats("Reggie Evans"));
console.log(bigShoeRebounds());
