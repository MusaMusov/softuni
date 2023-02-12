function magicNum(input) {
    let start = Number(input[0]); 
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let flag = false;
    for(let i = start; i <= end; i++) {
        for(let j = start; j <= end; j++) {
            counter++
            if(i + j === magicNum) {
                flag = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`)
                break;
            }
        }
        if(flag) {
            break;                  //in main loop to end it whenever it end the first cycle of all loops
        }
    }

    if(!flag) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}


magicNum(["1",

"10",

"5"])