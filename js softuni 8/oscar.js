function oscars(input) {
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let juryCount = Number(input[2]);
    
    for(i = 3; i < input.length; i += 2) {
        let currentJuryPoints = Number(input[i + 1])
        let currentJuryName = input[i]
        let nameAsNum = currentJuryName.length
        let totalPoints = (nameAsNum * currentJuryPoints) / 2
        startingPoints += totalPoints;
        
    }
    let finalPoints = startingPoints
    if(finalPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${finalPoints.toFixed(1)}!`)
    } else if(finalPoints < 1250.5) {
        let neededPoints = 1250.5 - finalPoints
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
    }
    
}


oscars
(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])


function oscars(input) {
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let juryCount = Number(input[2]);
    let finalPoints = 0;
    
    for(i = 3; i < input.length; i += 2) {
        let currentJuryPoints = Number(input[i + 1])
        let currentJuryName = input[i]
        let nameAsNum = currentJuryName.length
        let totalPoints = (nameAsNum * currentJuryPoints) / 2
        startingPoints += totalPoints;

        finalPoints = startingPoints
    
        if(finalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${finalPoints.toFixed(1)}!`)
            return
        }
    }
    let neededPoints = 1250.5 - finalPoints;
    console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
}


oscars
(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])