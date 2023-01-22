function fishBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let boatRent = 0;
    switch(season) {
        case "Spring" :
            boatRent = 3000;
            break;
        case "Summer" :
        case "Autumn" :
            boatRent = 4200;
            break;
        case "Winter" :
            boatRent = 2600;
            break;
    } 

    if(fishermen <= 6) {
        boatRent *= 0.9;
    } else if(fishermen <= 11) {
        boatRent *= 0.85;
    } else {
        boatRent *= 0.75;
    }

    if(season !== "Autumn" && fishermen % 2 === 0) {
        boatRent *= 0.95;
    }

    if(boatRent <= budget) {
        let moneyLeft = budget - boatRent
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = boatRent - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

fishBoat(["3600",
"Autumn",
"6"]) 