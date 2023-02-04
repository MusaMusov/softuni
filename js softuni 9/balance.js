function balance(input) {
    let index = 0;
    let totalSum = 0;
    while(input[index] !== "NoMoreMoney") {
        let increase = Number(input[index]);
        if(increase < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${increase.toFixed(2)}`)
        totalSum += increase;
        index++
    } 
    console.log(`Total: ${totalSum.toFixed(2)}`);
}

balance
(["5.51",

"69.42",

"100",

"NoMoreMoney"])