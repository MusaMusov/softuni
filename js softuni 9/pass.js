function pass(input) {
    let index = 0;

    let name = input[index];
    index++;

    let correctPass = input[index];
    index++

    let randomPass = input[index];
    index++
    while(correctPass !== randomPass) {
        randomPass = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`)
}

pass
(["Gosho", "secret", "seasd"])