function spaceship (input) {
    let shipWidth = Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHeight = Number(input[2]);
    let astronautsHeight = Number(input[3]);

    let shipVolume = shipHeight * shipWidth * shipLength;

    let roomVolume = 2 * 2 * (astronautsHeight + 0.4)

    let astronautsNumber = shipVolume / roomVolume;
    if(astronautsNumber < 3) {
        console.log(`The spacecraft is too small.`);
    } else if(astronautsNumber < 10) {
        console.log(`The spacecraft holds ${Math.floor(astronautsNumber)} astronauts.`);
    } else {
        console.log("The spacecraft is too big.");
    }
}

spaceship(["3.5",
"4",
"5",
"1.70"])