function pesenta (input) {
    let num = Number(input[0])
    let numCounter = 0;
    let result = ""
    let bestResult = ""
    for(let a = 1; a <= 9; a++) {
        for(let b = 1; b <= 9; b++) {
            for(let c = 1; c <= 9; c++) {
                for(let d = 1; d <= 9; d++) {
                    if(a < b && c > d) {
                        if(a*b + c*d === num) {
                            numCounter++;
                            
                                result += `${a}${b}${c}${d} `
                            
                            if(numCounter === 4) {
                                bestResult = `${a}${b}${c}${d}`
                            }
                        }
                    }
                }
            }
        }
        
    }
    if(numCounter <= 3) {
        console.log("No!");
    } else {
        console.log(result);
        console.log(`Password: ${bestResult}`);
    }
}

pesenta(["11"])