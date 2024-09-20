function calculator(a, b, c, operator) {
    let result;

    if (operator === '+') { // addition
        result = a + b + c;
    } 
    else if (operator === '-') { // subtraction
        result = a - b - c;
    } 
    else if (operator === '*') { // multiplication
        result = a * b * c;
    } 
    else if (operator === '/') { // division
        result = a / b / c;
    } 
    else if (operator === '%') { // modulus
        result = a % b % c;
    } 
    else {
        result = 'Invalid operator';
    }

    console.log(result);
}

calculator(5, 15, 25, '+');  

calculator(30, 10, 5, '-'); 

calculator(2, 3, 4, '*'); 

calculator(100, 20, 5, '/'); 

calculator(10, 3, 2, '%');