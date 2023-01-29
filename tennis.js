function tennis (input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let wonTournaments = 0;
    let finalPoints = 0;
    for(i = 2; i < input.length; i++) {
        let currentFinal = input[i];
        switch(currentFinal) {
            case "W" :
                finalPoints += 2000;
                wonTournaments++
                break;
            case "F" :
                finalPoints += 1200;
                break;
            case "SF" :
                finalPoints += 720;
                break;
        }
    }
        let absolutePoints = finalPoints + startingPoints;
        let averagePoints = finalPoints / tournaments;
        let wonTournamentsPercent = (wonTournaments / tournaments) * 100;
        console.log(`Final points: ${absolutePoints}`);
        console.log(`Average points: ${Math.floor(averagePoints)}`);
        console.log(`${wonTournamentsPercent.toFixed(2)}%`);
}

tennis
([
    "5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"
])