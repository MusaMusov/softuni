function sub2(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let isValid1 = false;
    let isValid2 = false;


    for(k; k <= 8; k++) {
        isValid1 = false;
        isValid2 = false;
        let buff = "";
        let num1 = "";
        let num2 = "";
        for(let l2 = 9; l2 >= l; l2--) {
            if(k % 2 === 0 && l2 % 2 !== 0) {
               isValid1 = true
                buff += `${k}${l2} - `
                num1 = `${k}${l2}`
            }
            for(m; m <= 8; m++) {
                buff = ""
                for(let n2 = 9; n2 >= n; n2--) {
                    if(m % 2 === 0 && n2 % 2 !== 0) {
                        isValid2 = true;
                        num2 = `${m}${n2}`
                        buff += num2
                    }
                    if(num1 === num2) {
                        console.log("Cannot change the same player.");
                    } 
                    if(k % 2 === 0 && m % 2 === 0 && l2 % 2 !== 0 && n2 % 2 !== 0 && num1 !== num2) {
                        console.log(`${k}${l2} - ${m}${n2}`);
                    }
                }
            }
        }
    }
}

sub2
(["7",
"6",
"8",
"5"])