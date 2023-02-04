function smallestNum(input) {
    let index = 0;
    let smallestNum = Number.MAX_SAFE_INTEGER;
    let command = input[index];
    index++


    while(command !== "Stop") {
        let myCurrentNum = Number(command);

        if(myCurrentNum < smallestNum) {
            smallestNum = myCurrentNum
        }

        command = input[index];
        index++;
        
    }
    console.log(smallestNum)
}

smallestNum
(["45", "-20", "7", "99", "Stop"])