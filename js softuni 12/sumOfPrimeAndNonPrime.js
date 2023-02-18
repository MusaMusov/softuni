function sumOfPrimeAndNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let primeSum = 0;
    let nonPrimeSum = 0;
    
    while(command !== "stop") {
        let currNum = Number(command);
        if(currNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;    
            continue;
        }

        let isPrime = false;
        for(let j = 2; j < currNum; j++) {
            if(currNum % j === 0) {
                isPrime = true;
            } 
        }

        if(isPrime) {
            nonPrimeSum += currNum
        } else {
            primeSum += currNum
        }

        command = input[index];
        index++;
        
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

sumOfPrimeAndNonPrime
(["3",
"9",
"0",
"7",
"19",
"4",
"stop"
])