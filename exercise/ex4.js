function ex4(input){
    let age = Number(input[0]);
    let washPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
 
    let savings = 0;
    let giftedMoney = 10;
 
 
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savings = savings + (giftedMoney - 1);
            giftedMoney = giftedMoney + 10;
        }else{
            savings += toyPrice
        }
    }
    let difference = Math.abs(savings - washPrice);
        if (savings >= washPrice) {
            console.log(`Yes! ${difference.toFixed(2)}`);
        } else {
            console.log(`No! ${difference.toFixed(2)}`);
        }
    }
ex4(["21","1570.98","3"]);