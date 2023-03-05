function balls(input) {
    let balls = Number(input[0]);
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let otherColours = 0;
    let totalPoints = 0;

    for(let i = 1; i <= balls; i++) {
        let currentBall = input[i];

        if(currentBall === "red") {
            red++;
            totalPoints += 5;
        } else if(currentBall === "orange") {
            orange++;
            totalPoints += 10;
        } else if(currentBall === "yellow") {
            yellow++
            totalPoints += 15
        } else if(currentBall === "black") {
            black++
            totalPoints /= 2;
        } else if(currentBall === "white"){
            white++
            totalPoints += 20
        } else {
            otherColours++
        }
    }
    
    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${otherColours}`);
    console.log(`Divides from black balls: ${black}`);
}

balls
(["10",
"white",
"white",
"ee",
"red",
"orange",
"red",
"black",
"black",
"black",
"black"])