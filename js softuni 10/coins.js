function vendingMachine(input) {
    let index = 0;
    let coins = input[index];
    index++;
    let coinsAmount = 0;
    let cents = coins * 100;
    let lev = cents[0];
    if(cents[1] === 1 || cents[1] === 2 || cents[1] === 5) {
        coinsAmount++;
    } else if(cents[1] === 3 || cents[1] === 4 || cents[1] === 1 ||cents[1] === 6 || cents[1] === 7) {
        coinsAmount += 2;
    } else if(cents[1] === 8 || cents[1] === 9) {
        coinsAmount += 3;
    }

    if(cents[2] === 1 || cents[2] === 2 || cents[2] === 5) {
        coinsAmount++;
    } else if(cents[2] === 3 || cents[2] === 4 || cents[2] === 1 ||cents[2] === 6 || cents[2] === 7) {
        coinsAmount += 2;
    } else if(cents[2] === 8 || cents[2] === 9) {
        coinsAmount += 3;
    }
console.log(coinsAmount + lev);

}

vendingMachine(["1.23"])