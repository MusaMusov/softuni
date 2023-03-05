function whileEx6 (input) {
    let index = 0;
    let command = input[index];
    index++;
    let maxNumber = Number.MAX_SAFE_INTEGER

    while(command !== "Stop") {
        let number = Number(command);
        
        if(number < maxNumber) {
            maxNumber = number;
        }

        command = input[index];
        index++;
    }
    console.log(maxNumber);
}

whileEx6(["Stop", "-1", "-140", "-170", "1"]);