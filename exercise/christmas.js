function christmas (input) {
    let days = Number(input[0]);
    let index = 1;
    let totalMoney = 0;
    let totalWinsCounter = 0;
    let totalLoseCounter = 0;
    let isWin = false;
    
    for(let i = 1; i <= days; i++) {
        let command = input[index];
        index++;
        let winCounter = 0;
        let loseCounter = 0;
        let dailyMoney = 0;

        while(command !== "Finish") {
            let sportType = command;
            let winLose = input[index];
            index++;
        
            if(winLose === "win") {
                winCounter++;
                totalWinsCounter++;
                dailyMoney += 20;
            } else {
                loseCounter++;
                totalLoseCounter++;
            }

            command = input[index];
            index++;
        }
        if(winCounter > loseCounter) {
            dailyMoney *= 1.1;
        }
        totalMoney += dailyMoney
    }


    if(totalWinsCounter > totalLoseCounter) {
        totalMoney *= 1.2;
        isWin = true;
    }
    if(isWin) {
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}

christmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])