function christmasTournir(input) {
    let index = 0
    let daysNum = Number(input[index]);
    index++;
    let totalWinCounter = 0;
    let totalLoseCounter = 0;
    let allMoney = 0;
    for (let i = 1; i <= daysNum; i++) {
 
 
        let command = input[index];
        index++;
 
        let winCount = 0;
        let loseCount = 0;
        let money = 0;
 
        while (command !== "Finish") {
            let sportType = command;
            let result = input[index];
            index++;
            if(result === "win"){
                winCount++;
                totalWinCounter++;
                money+=20;
            }else{
                loseCount++;
                totalLoseCounter++;
            }
            command = input[index];
            index++;
        }
        if(winCount > loseCount) {
            money *= 1.1;
        }
        allMoney += money
    }
    if (totalWinCounter > totalLoseCounter) {
        allMoney *= 1.2;
    }
    console.log(allMoney);    
}
christmasTournir(["2","volleyball","win","football","lose","basketball","win","Finish","golf","win","tennis","win","badminton","win", "Finish"])