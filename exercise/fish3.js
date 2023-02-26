function fishingboat (input){
    let groupBudget = Number(input[0]);
    let season = input[1];
    let fisherNumbers = Number(input[2]);
    let price = 0;

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


 if (price <= groupBudget){
    let difference = groupBudget - price;
    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
 } else{
    let difference1 = groupBudget - price;
    console.log(`Not enough money! You need ${(difference1 * -1).toFixed(2)} leva.`);
 }
 

}


fishingboat
(["3600",
"Autumn",
"6"]);