function combo(input){
    let num = Number(input[0]);
    let counter = 0;
    let lastCount = 0;
    for(let x1 = 0; x1 <= num; x1++) {
        for (x2 = 0; x2 <= num; x2++) {
            for (x3 = 0; x3 <= num; x3++) {
                if(x1 + x2 + x3 === num) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}

combo(["25"])