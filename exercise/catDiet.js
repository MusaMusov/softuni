function catDiet(input) {
    let fatPercent = Number(input[0])
    let proteinPercent = Number(input[1])
    let carbsPercent = Number(input[2])
    let calories = Number(input[3])
    let waterPercent = Number(input[4])


    let fatCal = (fatPercent / 100) * calories;
    let proteinCal = (proteinPercent / 100) * calories;
    let carbsCal = (carbsPercent / 100) * calories;

    let fatGrams = fatCal / 9;
    let proteinGrams = proteinCal / 4;
    let carbsGrams = carbsCal / 4;

    let totalGrams = fatGrams + carbsGrams + proteinGrams;
    let calsPerGram = calories / totalGrams; 
    calsPerGram *= (100 - waterPercent) / 100

    console.log(calsPerGram.toFixed(4));
}

catDiet
(["60",
"25",
"15",
"2500",
"60"])