function whileEx (input) {
    let index = 0;
    let command = input[index];
    index++;

    while(command !== "Stop") {
        let currentText = command;
        console.log(currentText);

        command = input[index];
        index++;
    }
}

whileEx(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"])