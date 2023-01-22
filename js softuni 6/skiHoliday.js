function skiHoliday(input) {
    let days = Number(input[0]);
    let type = input[1];
    let review = input[2];
    let nights = days - 1;
    let price = 0;

    if(type === "room for one person") {
        price = nights * 18;
    } else if(type === "apartment") {
        price = nights * 25
        if(nights < 10) {
            price *= 0.70;
        } else if(nights < 15) {
            price *= 0.65;
        } else {
            price *= 0.5;
        }
    } else {
        price = nights * 35
        if(nights < 10) {
            price *= 0.9;
        } else if(nights < 15) {
            price *= 0.85;
        } else {
            price *= 0.8;
        }
    }


    if(review === "positive") {
        price *= 1.25;
    } else {
        price *= 0.9;
    }
    console.log(price.toFixed(2))
}

skiHoliday(["14",

"apartment",

"positive"]) 