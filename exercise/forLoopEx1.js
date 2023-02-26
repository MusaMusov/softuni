function forLoop2 (input) {
    let num = input[0];
    let totalSum = 0;
    for(let i = 0; i < num.length; i++) {
        let currentNum = Number(num[i]);
        totalSum += currentNum;
    }
    console.log(totalSum);
}

forLoop2(["1234"]);