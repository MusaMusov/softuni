function barcode(input) {
    let firstNum = input[0];
    let firstNum1 = Number(firstNum[0])
    let firstNum2 = Number(firstNum[1])
    let firstNum3 = Number(firstNum[2])
    let firstNum4 = Number(firstNum[3])
    let secondNum = input[1];
    let secondNum1 = Number(secondNum[0])
    let secondNum2 = Number(secondNum[1])
    let secondNum3 = Number(secondNum[2])
    let secondNum4 = Number(secondNum[3])

    let buff = " "

    for(let i = firstNum1; i <= secondNum1; i++) {
        let num = "";
        if(i % 2 === 0) {
            continue;
        } else {
            for(let j = firstNum2; j <= secondNum2; j++) {
                if(j % 2 === 0) {
                    continue;
                } else {
                    for(let m = firstNum3; m <= secondNum3; m++) {
                        if(m % 2 === 0) {
                            continue;
                        } else {
                            
                            for(let n = firstNum4; n <= secondNum4; n++) {
                                if(n % 2 === 0) {
                                    continue;
                                } else {
                                    num += n.toString();
                                    buff = num + " ";
                                }
                            }
                            num += m.toString();
                        }
                    }
                    num += j.toString();
                }
            }   
            num += i.toString();      
        }
    }

    console.log(buff);
}

barcode(["2345", "6789"])

