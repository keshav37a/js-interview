// Q4. Implement a function sum() in the following way such that it gives the sum of two numbers

// console.log(sum(1)(2)); // should output 3
// console.log(sum(10)(2)); // should output 12




let sum = function(x){
    //  1.Calling and returning a function inside another function
    //  2.Currying translates a function f(a,b) to f(a)(b)
    return function (y){
        return x+y;
    }
}

// Testing the sum function
console.log(sum(3)(4));
console.log(sum(10)(44));