function calculateFinalScore(input) {

    const { name, testScore, schoolGrade, isFFamily } = input;

    if (typeof input !== 'object' ||
        input === null ||
        typeof name !== 'string' || 
        typeof testScore !== 'number' || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade > 30 ||
        typeof isFFamily !== 'boolean') {

            return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;
    
    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;

}


console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));