function calculateTax(income,expense) {
    if(income>=0 && expense>=0){
        const diff = income - expense;
        const tax = diff * .20;
        return tax;
    }
    else{
        return "Invalid Input";
    }
}

const calculatedTax = calculateTax(60000, 7000);

console.log("Calculated Tax:", calculatedTax);