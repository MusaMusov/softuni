function workout(input) {
    let days = Number(input[0]);
    let kilometerRan = Number(input[1]);
    let firstDayKm = kilometerRan;

    let totalKmRan = 0;

    for(let i = 2; i <= (days + 1); i++) {
        let currentDayPercent = input[i];
        kilometerRan = kilometerRan + kilometerRan * (currentDayPercent / 100);
        totalKmRan += kilometerRan;
    }
    totalKmRan += firstDayKm
    if(totalKmRan >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKmRan - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKmRan)} more kilometers`);
    }

}

workout
(["5",
"30",
"10",
"15",
"20",
"5",
"12"])