function division(input) {
    let nums = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for(let i = 1; i <= nums; i++) {
        let currentNum = Number(input[i]);

        if(currentNum % 2 === 0) {
            p1++;
        }
        if(currentNum % 3 === 0) {
            p2++
        }
        if(currentNum % 4 === 0) {
            p3++;
        }
    }

    let p1Percent = p1 / nums * 100
    let p2Percent = p2 / nums * 100
    let p3Percent = p3 / nums * 100

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
}