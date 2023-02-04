function biggestNum(input) {
    let index = 0;
    let smallestNum = Number.MIN_SAFE_INTEGER;
    let command = input[index];
    index++


    while(command !== "Stop") {
        let myCurrentNum = Number(command);

        if(myCurrentNum > smallestNum) {
            smallestNum = myCurrentNum
        }

        command = input[index];
        index++;
        
    }
    console.log(smallestNum)
}

biggestNum
(["100","-20", "7", "99", "Stop"])