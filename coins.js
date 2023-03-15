function coins (input) {
    let coins1 = Number(input[0]);
    let coins2 = Number(input[1]);
    let coins5 = Number(input[2]);
    
    let sum = Number(input[3]);
    let isDone = false
    for(let i = 1; i <= coins1; i++) {
        let coins1Counter = 0;
        let coins2Counter = 0;
        let coins5Counter = 0;
        for(coins5; coins5 >= 0; coins5--) {
            if(sum >= 5) {
                sum -= 5
                coins5--;
                coins5Counter++;
            } else if(sum >= 2) {
                sum -= 2;
                coins2--;
                coins2Counter++;
            } else if(sum >= 1) {
                sum -= 1;
                coins1--;
                coins1Counter++;
            }
            console.log(coins5Counter, coins2Counter, coins1Counter);

            if(sum <= 0) {
                break;
            }
        }
    }
}

coins(["3", "2", "3", "10"])