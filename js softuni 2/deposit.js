function deposit(input) {
    let depositedSum = Number(input[0]);
    let time = Number(input[1]);
    let yearlyInterest = Number(input[2]);

    let sum = depositedSum + time * ((depositedSum * (yearlyInterest / 100)) / 12);
    console.log(sum);
}
deposit
(["200",
"3",
"5.7"])