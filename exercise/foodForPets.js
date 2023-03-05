function food (input) {
    let days = Number(input[0]);
    let foodTotal = Number(input[1]);
    let totalEaten = 0;
    let catEaten = 0;
    let dogEaten = 0;
    let biscuits = 0;
    let totalBiscuits = 0;
    let dayCounter = 0;

    for(let i = 2; i < input.length; i+=2) {
        let currentDogDay = Number(input[i]);
        let currentCatDay = Number(input[i + 1]);
        catEaten += currentCatDay;
        dogEaten += currentDogDay;
        totalEaten += currentCatDay + currentDogDay;
        dayCounter++;
        if(dayCounter >= 3){
            biscuits = (currentCatDay + currentDogDay) * 0.1;
            totalBiscuits += biscuits;
            dayCounter = 0;
        }
        
    }

    let percentFoodEaten = (totalEaten / foodTotal) * 100;
    let percentCatEaten = (catEaten / totalEaten) * 100;
    let percentDogEaten = (dogEaten / totalEaten) * 100;

    console.log(`Total eaten biscuits: ${Math.ceil(totalBiscuits)}gr.`);
    console.log(`${percentFoodEaten.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogEaten.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatEaten.toFixed(2)}% eaten from the cat.`);
}

food
(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])