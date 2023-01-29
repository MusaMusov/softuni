// function numbers1To1000 () {
    // for(i = 7; i <= 1000; i += 10) {
        // console.log(i)
    // }
// }
// 
// numbers1To1000()

function oneTo1000() {
    for(i=1; i <= 1000; i++) {
        if(i % 10 === 7) {
            console.log(i);
        }
    }
}

oneTo1000()