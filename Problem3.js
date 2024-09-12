function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    
    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        
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