function magicNum(input) {
    let start = Number(input[0]); 
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let flag = false;
    for(let i = start; i < end; i++) {
        for(let j = start; j < end; j++) {
            if(i + j === magicNum) {
                flag = true;
                counter++
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`)
                break;
            }
        }
        if(flag) {
            break;                  //in main loop to end it whenever it end the first cycle of all loops
        }
    }
}

magicNum(["1",

"10",

"5"])