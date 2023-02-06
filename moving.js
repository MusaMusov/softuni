function moving(input) {
    let index = 0;
    let width = input[index];
    index++;
    let length = input[index];
    index++;
    let height = input[index];
    index++;

    let boxes = input[index];
    index++;
    let houseVolume = width * length * height;
    
    while(boxes !== "Done") {
        houseVolume -= boxes;
        if(houseVolume <= 0) {
            console.log(`No more free space! You need ${houseVolume * -1} Cubic meters more.`);
            break;
        }
        boxes = input[index];
        index++;
    }

    if(boxes === "Done") {
        console.log(`${houseVolume} Cubic meters left.`);
    }
}

moving
(["10",
"1",
"2",
"4",
"6",
"Done"])
