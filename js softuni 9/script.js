function stopAtStop(input) {
    let inputCycle = 0;
    let str = input[inputCycle];
    inputCycle++;
    while(str !== "Stop") {
        console.log(str)
        str = input[inputCycle]
        inputCycle++;
    }
}

stopAtStop([
"Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"
])