function goldMine(input) {
    let locations = Number(input[0]);
    let index = 1;
    for(let i = 1; i <= locations; i++) {
        let expectedDaily = Number(input[index]);
        index++;
        let days = Number(input[index]);
        index++;
        let totalDugPerLocation = 0;
        
        for(let j = index; j < (index + days); j++) {
            let currentDay = Number(input[j]);
            totalDugPerLocation += currentDay;
        }
        let average = totalDugPerLocation / days;
        if(average >= expectedDaily) {
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedDaily - average).toFixed(2)} gold.`);
        }
       index += (days)
    }
}

goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])