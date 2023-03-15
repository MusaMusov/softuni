function barcode (input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let buff = ""

    for(let i = startNum; i <= endNum; i++) {
        let currentNum = Number(i);
        let currentNumAsString = currentNum.toString();
        let digitCounter = 0;
        for(let j = 0; j < currentNumAsString.length; j++) {
            let currentDigit = Number(currentNumAsString[j]);
            if(currentDigit % 2 !== 0) {
                digitCounter++;
                if(digitCounter >= 3) {
                    if(currentDigit === 1 || currentDigit === 3) {
                        break;
                    }
                }
                if(digitCounter === 4) {
                    buff += currentNum + " ";
                    
                }
            } else {
                continue;
            }
        }
    }
    console.log(buff);
}

barcode(["1365", "5877"])