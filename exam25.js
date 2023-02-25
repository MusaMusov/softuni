function puppies(input) {
    let index = 0;
    let boughtFood = Number(input[index]);
    index++;
    
    let command = input[index];
    index++;

    let totalFoodEaten = 0;
    let boughtFoodGrams = boughtFood * 1000;

    while(command !== "Adopted") {
        let currentGrams = Number(command);
        totalFoodEaten += currentGrams;

        command = input[index];
        index++;
    }

    if(totalFoodEaten <= boughtFoodGrams) {
        console.log(`Food is enough! Leftovers: ${boughtFoodGrams - totalFoodEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(boughtFoodGrams - totalFoodEaten)} grams more.`);
    }
}

puppies(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])