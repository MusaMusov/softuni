function whileEx2 (input) {
    let index = 0;
    let username = input[index];
    index++;
    let correctPass = input[index];
    index++;
    let command = input[index];
    index++;


    while(command !== correctPass) {
        let currentPass = command;
        command = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

whileEx2([
    "Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"
    ])