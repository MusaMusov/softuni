function cake(input){
    let index = 0;
    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let size = width * length;

    let pieces = input[index];
    index++;

    while(pieces !== "STOP") {
        pieces = Number(pieces);
        size -= pieces;

        if(size <= 0) { 
            console.log(`No more cake left! You need ${size * -1} pieces more.`);
            break;
        }

        pieces = input[index];
        index++;
    }
    if(pieces === "STOP") {
        console.log(`${size} pieces are left.`)
    }
}

cake
(["10",
"2",
"2",
"4",
"6",
"STOP"])

