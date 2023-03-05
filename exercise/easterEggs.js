function easterEggs (input) {
    let paintedEggs = Number(input[0]);

    let redAmount = 0;
    let orangeAmount = 0;
    let blueAmount = 0;
    let greenAmount = 0;
    let maxAmount = 0;
    let maxColor = "";

    for(let i = 1; i <= paintedEggs; i++) {
        let currentEgg = input[i];

        if(currentEgg === "red") {
            redAmount++
        } else if(currentEgg === "orange") {
            orangeAmount++
        } else if(currentEgg === "blue") {
            blueAmount++
        } else if(currentEgg === "green") {
            greenAmount++
        } 

        if(redAmount > maxAmount) {
            maxAmount = redAmount;
            maxColor = currentEgg;
        } else if(orangeAmount > maxAmount) {
            maxAmount = orangeAmount;
            maxColor = currentEgg;
        } else if(blueAmount > maxAmount) {
            maxAmount = blueAmount;
            maxColor = currentEgg;
        } else if(greenAmount > maxAmount) {
            maxAmount = greenAmount;
            maxColor = currentEgg;
        }
    }

    console.log(`Red eggs: ${redAmount}`);
    console.log(`Orange eggs: ${orangeAmount}`);
    console.log(`Blue eggs: ${blueAmount}`);
    console.log(`Green eggs: ${greenAmount}`);
    console.log(`Max eggs: ${maxAmount} -> ${maxColor}`);
}

easterEggs(["7",
"orange",
"blue",
"green",
"green",
"blue",
"red",
"green"])