function checkDigitsInName(input) {
    if (typeof input !== 'string') {
        return "Invalid Input";
    }
    
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        if (!isNaN(char) && char !== ' ') {
            return true;
        }
    }
    
    return false;
}

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("R1a2j"));
console.log(checkDigitsInName(123));
console.log(checkDigitsInName([]));