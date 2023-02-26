function games(input) {
    let index = 0;
    let firstPlayer = input[index];
    index++;

    let secondPlayer = input[index];
    index++;

    let command = input[index];
    index++;

    let firstTotalPoints = 0;
    let secondTotalPoints = 0;

    while(command !== "End of game") {
        let firstPlayerPoints = Number(command);

        let secondPlayerPoints = Number(input[index]);
        index++;

        if(firstPlayerPoints > secondPlayerPoints) {
            firstTotalPoints += (firstPlayerPoints - secondPlayerPoints);
        } else if(firstPlayerPoints < secondPlayerPoints) {
            secondTotalPoints += (secondPlayerPoints - firstPlayerPoints);
        } else {
            console.log("Number wars!")
            firstPlayerPoints = Number(input[index]);
            index++;
            secondPlayerPoints = Number(input[index]);
            index++;

            if(firstPlayerPoints > secondPlayerPoints) {
                console.log(`${firstPlayer} is winner with ${firstTotalPoints} points`);
                return;
            } else if(firstPlayerPoints < secondPlayerPoints) {
                console.log(`${secondPlayer} is winner with ${secondTotalPoints} points`);
                return;
            }
        }

        command = input[index];
        index++;
    }

    if(command === "End of game") {
    console.log(`${firstPlayer} has ${firstTotalPoints} points`)
    console.log(`${secondPlayer} has ${secondTotalPoints} points`)
    }    

}

games
([
"Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"
])