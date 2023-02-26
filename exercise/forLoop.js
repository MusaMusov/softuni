function forLoopLearn(input) {
    let aCounter = 0;
    let eCounter = 0;
    let iCounter = 0;
    let oCounter = 0;
    let uCounter = 0;
    let text = input[0];
    for(let i = 0; i < text.length; i++) {
        let currentLetter = text[i];
        switch(currentLetter) {
            case "a" :
                aCounter++;
                break;
            case "e" :
                eCounter++;
                break;
            case "o" :
                oCounter++;
                break;
            case "u" :
                uCounter++;
                break;
            case "i" :
                iCounter++;
                break;  
        }
    }

    let a = 1;
    let e = 2;
    let i = 3;
    let o = 4;
    let u = 5;

    let sum = aCounter * a + eCounter * e + iCounter * i + oCounter * o + uCounter * u;
    console.log(sum);


}

forLoopLearn(["aaa"]);