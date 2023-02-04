function sumOfNumbers(input) {
    let index = 0;
    let totalSum = 0;
    let num = input[index];
    index++;

    while(totalSum < num) {
        let inputNum = Number(input[index])
        index++;
        totalSum += inputNum;
    }
    console.log(totalSum)
    
}

sumOfNumbers
(["100", "10", "20", "30", "40"]) 