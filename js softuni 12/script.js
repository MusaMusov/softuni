function sumOfEvenAndOdd (input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = "";

    for(let currNum = startNum; currNum <= endNum; currNum++) {
        let currNumAsString = currNum.toString();
        let evenSum = 0;
        let oddSum = 0;
        
        for(let i = 0; i < currNumAsString.length; i++) {
            let position = i + 1;
            let currDigit = Number(currNumAsString[i]);

            if(position % 2 === 0) {
                evenSum += currDigit;
            } else {
                oddSum += currDigit;
            }

        }
        if(oddSum === evenSum) {
            result += currNumAsString + " "   //резултата се изчилслява в тялото на външния цикъл.
        }
        
    }
    console.log(result)        //console.log на края на главния цикъл за да логне само един път.
}

sumOfEvenAndOdd
(["100000",
"100050"])