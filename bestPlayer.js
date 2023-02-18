function bestPlayer(input){
    let index = 0;
    let command = input[index];
    index++;
    let isHattrick = false;
    let mostGoals = 0;
    let bestPlayer = ""

    while(command !== "END") {
        let currentPlayer = command;
        let goals = Number(input[index]);
        index++;

        if(goals > mostGoals) {
            mostGoals = goals;
            bestPlayer = currentPlayer;
        }

        if(goals >= 3) {
            isHattrick = true;
        }

        if(goals >= 10) {
            break;
        }

        command = input[index];
        index++;

    }

    console.log(`${bestPlayer} is the best player!`);

    if(isHattrick) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }
}

bestPlayer
(["Petrov",
"2",
"Drogba",
"11"])