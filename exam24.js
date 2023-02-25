function catFood (input) {
    let catsAmount = Number(input[0]);
    let totalGrams = 0;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    for(let i = 1; i <= catsAmount; i++) {
        let currentGrams = Number(input[i]);
        totalGrams += currentGrams;

        if(currentGrams < 200) {
            group1++;
        } else if(currentGrams < 300) {
            group2++;
        } else if(currentGrams < 400) {
            group3++
        }

    }
    let pricePerDay = (totalGrams / 1000) * 12.45
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${pricePerDay.toFixed(2)} lv.`);
}

catFood(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])