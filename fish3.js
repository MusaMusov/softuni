function demo(input) {
    let buget = Number(input[0]);
    let season = input[1];
    let fishMasnCount = Number(input[2]);
    let shipCharter = 0;
 
    switch (season) {
        case "Spring":
            shipCharter = 3000;
            break;
        case "Summer":
            shipCharter = 4200;
            break;
        case "Autumn":
            shipCharter = 4200;
            break;
        case "Winter":
            shipCharter = 2600;
            break;
 
    }
 if (fishMasnCount <= 6) {
    shipCharter *= 0.90;
} else if ( fishMasnCount <= 11) {
    shipCharter *= 0.85;
}else if (fishMasnCount >= 12) {
        shipCharter *= 0.75;
}
    if (fishMasnCount % 2 === 0 && season !== `Autumn`) {
            shipCharter *= 0.95;
    }
    
    let finalSum = shipCharter;

    if(finalSum <= buget ){
        console.log(`Yes! You have ${Math.abs(buget - finalSum).toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money! You need ${Math.abs(buget - finalSum).toFixed(2)} leva.`);
    }
}

demo
(["3000",
"Summer",
"11"]);