function examPrep(input) {
    let index = 0;
    let badGradesNeeded = Number(input[index]);
    index++;

    let taskName = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let totalScore = 0;
    let taskNumber = 0;
    let lastTask = "";
    let badGrades = 0;
    while(taskName !== "Enough"){
        if(grade <= 4){
            badGrades++
        }
        if(badGradesNeeded === badGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            return;
        }

        totalScore += grade;
        taskNumber++;
        lastTask = taskName;
        taskName = input[index];
        index++;
        grade = Number(input[index]);
        index++;
    }
    
    let averageGrade = totalScore / taskNumber;
    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${taskNumber}`);
    console.log(`Last problem: ${lastTask}`);
    
}

examPrep
(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"
])