function holiday(input) {
    let index = 0;
    let holidayCost = Number(input[index]);
    index++;

    let savedMoney = Number(input[index]);
    index++;
    let spendOrSave = input[index];
    index++;
    let spendOrSaveCost = Number(input[index]);
    index++;

    while(true) {
        if(spendOrSave === "spend") {
            savedMoney -= spendOrSaveCost
        } else if(spendOrSave === "save") {
            savedMoney += spendOrSaveCost
        }
        console.log(savedMoney);
        spendOrSave = input[index];
        index++;
        spendOrSaveCost = Number(input[index]);
        index++;
    }
    
}


holiday
([
"2000",
"1000",
"spend",
"1200",
"save",
"2000"
])