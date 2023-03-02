
//ES2015 Arrow Functions Shorthand        
const double = arr => arr.map(val => val * 2);

//Replace ALL functions with arrow functions:
    const squareAndFindEvens = numbers => numbers.map( num => num ** 2 )
                                                     .filter(square => square % 2 === 0 );