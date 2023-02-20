function demo (input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let price = 0;
    if (fishers <= 6){
        switch (season){
            case "Spring":
                price = 3000 * 0.9;
             break;
            case "Autumn":
            case "Summer":
                price = 4200 * 0.9;
            break;
           case "Winter":
                price = 2600 * 0.9;
            break;
        }
    } else if (fishers <= 11){
        switch (season){
            case "Spring":
                price = 3000 * 0.85;
             break;
             case "Autumn":
            case "Summer":
                price = 4200 * 0.85;
            break;
           case "Winter":
                price = 2600 * 0.85;
            break;
        }
    } else {
        switch (season){
            case "Autumn":
                price = 3000 * 0.75;
             break;
             case "Autumn":
            case "Summer":
                price = 4200 * 0.75;
            break;
           case "Winter":
                price = 2600 * 0.75;
                break;
        }
    } 

    if (fishers % 2 === 0 && season !== "Autumn"){
        price *= 0.95
    }
    let difference = Math.abs(budget - price);
    if (budget >= price){
        console.log(`Yes! You have ${(difference).toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money! You need ${(difference).toFixed(2)} leva.`);
    }
}

demo
(["1000",
"Summer",
"6"]) 