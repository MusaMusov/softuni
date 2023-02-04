function graduation(input){
    let index = 0;
    let gradeSum = 0;
    let name = input[index];
    index++;
    let grade = input[index];
    index++;
    while(grade >= 2) {
        let currentGrade = Number(grade);
        if(grade < 4) {
            console.log(`${name} has been excluded at ${index - 1} grade`)
            return;
        }
        gradeSum += currentGrade;
        grade = input[index];
        index++
    }
    let averageGrade = gradeSum / (input.length - 1);
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
}

graduation
(["Gosho",
"5",
"5.5",
"6", 
"5.43", 
"5.5", 
"6", 
"5.55", 
"5", 
"6", 
"6", 
"5.43", 
"5"]) 