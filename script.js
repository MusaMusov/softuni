// function timeTask (input) {
    // let firstTime = Number(input[0]);
    // let secondTime = Number(input[1]);
    // let thirdTime = Number(input[2]);
// 
    // let totalTime = firstTime + secondTime + thirdTime;
    // let minutes = Math.floor(totalTime / 60);
    // let seconds = totalTime % 60;
// 
    // if (seconds < 10) {
        // console.log(`${minutes}:0${seconds}`)
    // }
    // else {
        // console.log(`${minutes}:${seconds}`)
    // }
// }
// 
// timeTask(["35","45","44"])


// function bonusTask(input) {
    // let points = Number(input[0]);
    // let bonus = 0
    // if(points <= 100) {
        // bonus = 5
    // }
    // else if(points <= 1000) {
        // bonus = points * 0.2;
    // }
    // else {
        // bonus = points * 0.1;
    // }
// 
    // if (points % 2 === 0) {
        // bonus = bonus + 1;
    // }
    // else if(points % 10 === 5) {
        // bonus = bonus + 2;
    // }
    // let sum = points + bonus
    // console.log(bonus)
    // console.log(sum)
// }
// 
// bonusTask(["20"])


// function fifteenMinuteTask(input) {
    // let hours = Number(input[0]);
    // let minutes = Number(input[1]);
    // bonus = 15;
// 
    // let totalMins = hours * 60 + minutes + 15;
    // let minutesLeft = totalMins % 60;
    // let finalHours = Math.floor(totalMins / 60);
    // 
    // if (finalHours === 24) {
    // finalHours = 0;
    // }
    // 
    // if (minutesLeft < 10) {
        // console.log(`${finalHours}:0${minutesLeft}`)
    // }
    // else {
        // console.log(`${finalHours}:${minutesLeft}`)
    // }
// }
// 
// fifteenMinuteTask(["1","66"])


// function toyStore (input) {
    // let holiday = Number(input[0]);
    // let puzzleOrder = Number(input[1]);
    // let dollOrder = Number(input[2]);
    // let teddyOrder = Number(input[3]);
    // let minionOrder = Number(input[4]);
    // let truckOrder = Number(input[5]);
    // let totalToys = dollOrder + teddyOrder + truckOrder + minionOrder + puzzleOrder;  //if over 50 toys 25% discount
    // let totalSell = 2.6 * puzzleOrder + 3 * dollOrder + 4.1 * teddyOrder + 8.2 * minionOrder + 2 * truckOrder;
// 
    // if (totalToys >= 50) {
        // totalSell = totalSell * 3/4;
    // }
    // let profit = totalSell;
    // profit = 9/10 * profit;
    // 
    // if (profit >= holiday) {
        // moneyLeft = profit - holiday;
        // console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    // }
    // else {
        // let moneyNeeded = holiday - profit;
        // console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    // }
// }
// 
// toyStore(["40.8","20","25","30","50","10"]) 


// function GodzillaVsKong(input) {
    // let budget = Number(input[0]);
    // let stats = Number(input[1]);
    // let outfit = Number(input[2]);
    // let decor = 1/10 * budget;
    // let outfitPrice = outfit * stats;
// 
    // if (stats > 150) {
        // outfitPrice = 9/10 * outfitPrice
    // }
    // let discountedOutfits = outfitPrice;
// 
    // let sum = discountedOutfits + decor;
    // let sumLeft = budget - sum;
    // if (sum <= budget) {
        // console.log("Action!")
        // console.log(`Wingard starts filming with ${sumLeft.toFixed(2)} leva left.`)
    // }
    // else {
        // let sumNeeded = sum - budget
        // console.log("Not enough money!")
        // console.log(`Wingard needs ${sumNeeded.toFixed(2)} leva more.`)
    // }
// }
// 
// GodzillaVsKong(["20000","120","55.5"]) 

// function swimmingRecord(input) {
    // let recordTime = Number(input[0]);
    // let distance = Number(input[1]);
    // let secondsPerMeter = Number(input[2]);
// 
    // let swimmingTime = distance * secondsPerMeter;
    // let delayCount = Math.floor(distance / 15);
    // let delayTime = delayCount * 12.5;
    // let totalTime = swimmingTime + delayTime;
// 
    // if (totalTime < recordTime) {
        // console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    // }
    // else {
        // let insufficientSeconds = totalTime - recordTime
        // console.log(`No, he failed! He was ${insufficientSeconds.toFixed(2)} seconds slower.`)
    // }
// }
// 
// swimmingRecord(["55555.67",
// 
// "3017", "20"])


// function shopping (input) {
    // Видеокарта – 250 лв./бр.
    // Процесор – 35% от цената на закупените видеокарти/бр.
    // Рам памет – 10% от цената на закупените видеокарти/бр. 
    // Ако броя на видеокартите е по-голям от този на процесорите
    // получава 15% отстъпка от крайната сметка
    // let budget = Number(input[0]);
    // let gpuCount = Number(input[1]);
    // let cpuCount = Number(input[2]);
    // let ramCount = Number(input[3]);
// 
    // let gpuSum = gpuCount * 250;
    // let cpuSum = (35/100 * gpuSum) * cpuCount;
    // let ramSum = (1/10 * gpuSum) * ramCount;
    // let totalSum = cpuSum + gpuSum + ramSum;
    // if (gpuCount > cpuCount) {
        // totalSum = totalSum * 85/100
    // }
    // let finalPrice = totalSum;
// 
    // if (finalPrice <= budget) {
        // let moneyLeft = budget - finalPrice;
        // console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    // }
    // else {
        // let moneyNeeded = finalPrice - budget;
        // console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    // }
// }
// 
// shopping(["920.45",
// 
// "3",
// 
// "1",
// 
// "1"])  


function lunchBreak(input) {
    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = 1/8 * breakLength;
    let restTime = 1/4 * breakLength;
    let breakTimeLeft = breakLength - (lunchTime + restTime)

    if (breakTimeLeft >= episodeLength) {
        let timeLeft = Math.ceil(breakTimeLeft - episodeLength);
        console.log(`You have enough time to watch ${seriesName} and left with ${timeLeft} minutes free time.`)
    }
    else {
        timeNeeded = Math.ceil(episodeLength - breakTimeLeft);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeNeeded} more minutes.`)
    }
}

lunchBreak(["Teen Wolf","48","60"]) 