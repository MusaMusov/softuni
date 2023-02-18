function calc(input) {
    let people = Number(input[0]);
    let season = input[1];

    let totalPrice = 0;

    switch(season) {
        case "spring" :
            if(people <= 5) {
                totalPrice = 50 * people;
            } else {
                totalPrice = 48 * people;
            }
            break;
        case "summer" :
            if(people <= 5) {
                totalPrice = (48.5 * people) * 0.85;
            } else {
                totalPrice = (45 * people) * 0.85;
            }
            break;
        case "autumn" :
            if(people <= 5) {
                totalPrice = 60 * people;
            } else {
                totalPrice = 49.5 * people;
            }
            break;
        case "winter" :
            if(people <= 5) {
                totalPrice = (86 * people) * 1.08;
            } else {
                totalPrice = (85 * people) * 1.08;
            }
            break;

    }

    console.log(`${totalPrice.toFixed(2)} leva.`);
}

calc
(["5",
"spring"])