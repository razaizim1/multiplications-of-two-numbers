// // multiplication of two numbers
// // way 1

function doMultiplication(numOne, numTwo) {
    var result = numOne * numTwo;
    console.log(result)
}

doMultiplication(10, 3);
doMultiplication(20, 50);
doMultiplication(20, 10);

// way 2
function doMultiplication(numOne, numTwo) {
    var result = numOne * numTwo;
    return result;
}

console.log(doMultiplication(10, 3));
console.log(doMultiplication(40, 3));
console.log(doMultiplication(60, 3));

// way 3

function doMultiplication(numOne, numTwo) {
    return numOne * numTwo;
}

console.log(doMultiplication(10, 3));
console.log(doMultiplication(20, 3));
console.log(doMultiplication(50, 3));