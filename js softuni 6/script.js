// function cinema(input) {
    // let projection = input[0];
    // let rows = Number(input[1]);
    // let columns = Number(input[2]);
    // let totalPlaces = rows * columns;
    // let totalPrice = 0;
    // switch(projection) {
        // case "Premiere" :
            // totalPrice = totalPlaces * 12.00;
            // console.log(`${totalPrice.toFixed(2)}`)
            // break;
        // case "Normal" : 
            // totalPrice = totalPlaces * 7.50;
            // console.log(`${totalPrice.toFixed(2)}`)
            // break;
        // default : 
            // totalPrice = totalPlaces * 5.00;
            // console.log(`${totalPrice.toFixed(2)}`)
            // break;
    // }
// }
// 
// cinema(["Premiere","10","12"]) 

// function outfit(input) {
    // let temp = Number(input[0]);
    // let time = input[1];
    // let top = "";
    // let shoes = "";
// 
    // switch(time){
        // case "Morning" :
            // if(temp <= 18) {
                // top = "Sweatshirt";
                // shoes = "Sneakers";
            // } else if(temp <= 24) {
                // top = "Shirt";
                // shoes = "Moccasins";
            // } else {
                // top = "T-Shirt";
                // shoes = "Sandals";
            // } break;
        // case "Afternoon" :
            // if(temp <= 18) {
                // top = "Shirt";
                // shoes = "Moccasins";
            // } else if(temp <= 24) {
                // top = "T-Shirt";
                // shoes = "Sandals";
            // } else {
                // top = "Swim Suit";
                // shoes = "Barefoot";
            // } break;
            // 
        // default : 
            // top = "Shirt";
            // shoes = "Moccasins"
            // break;
// 
                        // 
    // } console.log(`It's ${temp} degrees, get your ${top} and ${shoes}.`)
// }
// 
// outfit(["22",
// 
// "Afternoon"]) 
// 

function flowers(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    totalPrice = 0;
    switch(flowerType) {
        case "Roses" :
            totalPrice = flowerCount * 5
            break;
        case "Dahlias" :
            totalPrice = flowerCount * 3.80
            break;
        case "Tulips" :
            totalPrice = flowerCount * 2.80
            break;
        case "Narcissus" :
            totalPrice = flowerCount * 3
            break;
        default : 
            totalPrice = flowerCount * 2.50
            break;
    }

    if(flowerType === "Roses" && flowerCount > 80) {
        totalPrice *= 0.9;
    } else if(flowerType === "Dahlias" && flowerCount > 90) {
        totalPrice *= 0.85;
    } else if(flowerType === "Tulips" && flowerCount > 80) {
        totalPrice *= 0.85;
    } else if(flowerType === "Narcissus" && flowerCount > 120) {
        totalPrice *= 1.15
    } else if(flowerType === "Gladiolus" && flowerCount > 80) {
        totalPrice *= 1.20
    }

    if(budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}
flowers(["Roses","55","250"])


