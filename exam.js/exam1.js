function solve(input) {
    let match1 = input[0];
    let match1Team1 = Number(match1[0]);
    let match1Team2 = Number(match1[2]);

    let match2 = input[1];
    let match2Team1 = Number(match2[0]);
    let match2Team2 = Number(match2[2]);

    let match3 = input[2];
    let match3Team1 = Number(match3[0]);
    let match3Team2 = Number(match3[2]);
    
    let gamesWon = 0;
    let gamesLost = 0;
    let draws = 0;

    if(match1Team1 > match1Team2) {
        gamesWon++;
    } else if(match1Team1 < match1Team2) {
        gamesLost++;
    } else {
        draws++;
    }

    if(match2Team1 > match2Team2) {
        gamesWon++;
    } else if(match2Team1 < match2Team2) {
        gamesLost++;
    } else {
        draws++;
    }

    if(match3Team1 > match3Team2) {
        gamesWon++;
    } else if(match3Team1 < match3Team2) {
        gamesLost++;
    } else {
        draws++;
    }

    console.log(`Team won ${gamesWon} games.`)
    console.log(`Team lost ${gamesLost} games.`)
    console.log(`Drawn games: ${draws}`)
}

solve(["4:2",
"0:3",
"1:0"])