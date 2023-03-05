function repsys(input) {
    let index = 0;
 
    let sumAll = 0;
    let sumAllCash = 0;
    let sumAllCard = 0;
    let cashCounter = 0;
    let cardCounter = 0;
 
    let sum = Number(input[index]);
    index++;
 
    let command = input[index];
    index++;
 
    while (command !== "End") {
        let currentCashSum = Number(command);
 
        let currentCardSum = Number(input[index]);
        index++;
 
        if (currentCashSum > 100) {
            console.log("Error in transaction!");
        } else {
            cashCounter++;
            sumAllCash += currentCashSum;
            sumAll += currentCashSum;
            console.log("Product sold!");
        }
 
        if (currentCardSum < 10) {
            console.log("Error in transaction!");
        } else {
            cardCounter++;
            sumAllCard += currentCardSum;
            sumAll += currentCardSum;
            console.log("Product sold!");
        }
 
        if (sumAll >= sum) {
            console.log(`Average CS: ${(sumAllCash / cashCounter).toFixed(2)}`);
            console.log(`Average CC: ${(sumAllCard / cardCounter).toFixed(2)}`);
            break;
        }
 
        command = input[index];
        index++;
    }
 
    if (command === "End") {
        console.log("Failed to collect required money for charity.");
        //console.log(`The collected money are ${sumAll}`);
    }
    
}
repsys(["500", "120", "8", "63", "256", "78", "317"])
 