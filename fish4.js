function fishingboat (input){
    let groupBudget = Number(input[0]);
    let season = input[1];
    let fisherNumbers = Number(input[2]);
    let price = 0;
    let difference = 0;
 
    switch(season){
        case "Spring": 
            price = 3000;
            break;
        case "Summer":
        case "Autumn": 
            price = 4200; 
            break;
        case "Winter":
            price = 2600; 
            break;
    } 
    
    if (fisherNumbers <= 6) {
        price = price * 0.9;
    }
    else if (fisherNumbers <= 11){
        price = price * 0.85
    } else {
        price = price * 0.75;
    } 
        

    if (fisherNumbers % 2 === 0){
        if (season !== 'Autumn'){
            price = price * 0.95
        }
    }


    difference = Math.abs(groupBudget - price);
 if (price <= groupBudget){
    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
 } else{
    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
 }
}

fishingboat
(["3600",
"Autumn",
"6"]);