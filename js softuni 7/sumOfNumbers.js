function sumOfNumbers(input) {
    let numAsString = input[0];
    let sum = 0;

    for(i = 0; i < numAsString.length; i++) {
        let numAsNumber = Number(numAsString[i])
        sum += numAsNumber;
    } 
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["55555555"])



// if you need the length of a number, you take
// the input number as astring and convert it later