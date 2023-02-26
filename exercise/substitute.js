// Първата цифра на първото число е в интервала от цифрата K до 8, включително.
// • Втората цифра на първото число е в интервала от 9 до L, включително.
// • Първата цифра на второто число е в интервала от цифрата M до 8, включително.
// • Втората цифра на второто число е в интервала от 9 до N, включително.
// 
function substitute(input) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let isValid = false;

    for(k; k <= 8; k++) {

        for( let i = 9; i <= l; i--) {

            for(m; m <= 8; m++) {
                let buff = ""
    
                for( let j = 9; j <= n; j--) {
                    if(k % 2 === 0 && m % 2 === 0 && l % 2 !== 0 && n % 2 !== 0) {
                        isValid = true;
                        buff = `${k}${l} - ${m}${n}`
                    }      
                }
                if(isValid) {
                    console.log(`${k}${l} - ${m}${n}`)
                }
            }
        }
    }
}

substitute
(["7",
"6",
"8",
"5"])