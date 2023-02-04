function lily (input) {
    // За нечетните рождени дни (1, 3, 5...n) получава играчки.
    // За четните рождени дни (2, 4, 6...n) получава пари. 
    // Възрастта на Лили - цяло число в интервала [1...77]
    // Цената на пералнята - число в интервала [1.00...10 000.00]
    // Единична цена на играчка - цяло число в интервала [0...40]

    let age = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let evenYears = 0;
    let oddYears = 0;
    let toyMoney = 0;
    let birthdayMoneyWon = 0;
    let yearlyMoney = 9;

    for(i = 1; i <= age; i++) {
        let currentAge = i;
        if(currentAge % 2 === 0) {
            birthdayMoneyWon += yearlyMoney;
            yearlyMoney += 10;
        } else {
            toyMoney += toyPrice
        }
    }

    let absoluteMoney = toyMoney + birthdayMoneyWon;
    if(absoluteMoney >= machinePrice) {
        let moneyLeft = absoluteMoney - machinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    } else {
        let moneyNeeded = machinePrice - absoluteMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
    
}

lily(["10",
"170.00",
"6"]) 