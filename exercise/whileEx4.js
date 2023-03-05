function whileEx4 (input) {
    let index = 0;
    let number = Number(input[index]);
    index++;
    
    let command = 1;

    while(command <= number) {
        console.log(command);
        command = command * 2 + 1;
    }
}

whileEx4(["31"])