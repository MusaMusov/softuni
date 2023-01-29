function histogram(input) {
    let num = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(i = 1; i <= num; i++) {
        let currentNum = Number(input[i])
        if(currentNum <= 199) {
            p1++;
        } else if(currentNum <= 399) {
            p2++;
        } else if(currentNum <= 599) {
            p3++;
        } else if(currentNum <= 799) {
            p4++;
        } else {
            p5++;
        }
    }


    let p1Percent = (p1 / num) * 100
    let p2Percent = (p2 / num) * 100
    let p3Percent = (p3 / num) * 100
    let p4Percent = (p4 / num) * 100
    let p5Percent = (p5 / num) * 100

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
}

histogram
(["3",
"1",
"2",
"999"])