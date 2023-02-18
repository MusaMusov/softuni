function tenisRanklist(input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let tournamentPoints = 0;
    let tournamentsWon = 0;

    for(let i = 2; i < input.length; i++) {
        let result = input[i];
        switch(result) {
            case "W" :
                tournamentPoints += 2000;
                tournamentsWon++;
                break;
            case "F" :
                tournamentPoints += 1200;
                break;
            case "SF" :
                tournamentPoints += 720;
                break;
        }

    }
    let totalPoints = startingPoints + tournamentPoints;
    let averagePoints = tournamentPoints / tournaments;
    let wonPercent = (tournamentsWon / tournaments) * 100;
    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${wonPercent.toFixed(2)}%`)
        
}