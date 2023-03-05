function whileEx8 (input) {
    let index = 0;
    let studentName = input[index];
    index++;

    let command = Number(input[index]);
    index++;
    let average = 0;
    let total = 0;
    let isExcluded = false;

    let classCount = 0;

    while(command >= 2) {
        let grade = Number(command);
        
        classCount++;
        total += grade;
        if(grade < 4) {
            isExcluded = true;
            break;
        } 
        command = input[index];
        index++;
    }

    average = total / classCount;
    if(isExcluded) {
        console.log(`${studentName} has been excluded at ${classCount} grade`);
    } else {
        console.log(`${studentName} graduated. Average grade: ${average.toFixed(2)}`);
    }

    
}

whileEx8(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])