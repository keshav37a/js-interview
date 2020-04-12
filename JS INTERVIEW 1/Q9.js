// Q9. Why do we need let and const in JS. Compare it with the problems in ES5


// let

// let declares a variable and allows to assign any value to it. It means the variable will be declared, existed and limited to use only inside block ({}), statement or expression.

/*
function test(){
    while(true){
       let x = 2;
       break;
    }
    console.log(x); //ReferenceError: x is not defined
 }
 */

// This ensures the locality of the variable, and we can rest assured that we won’t change by mistake any variable with same name declared somewhere before.

// Variable hoisting doesn’t apply to let, which means during compile phase, let declaration will stay where it is and will not move to the top of context like var. 

// And unlike var, re-declaring a let variable will throw SyntaxError.


//const

// const — same as let allows to declare and initialize a local block-scoped variable. Thus, it has all the restrictions of let. Also Declared variable has to be initialized with a value. Declared variable can ONLY be assigned with a value ONCE. No re-assignment — as expected for a constant value.

// So let and const - 
// Avoid polluting our global object with unnecessary properties.
// Avoid mistakes — such as modifying a constant value by mistake, updating wrong variables which are in different scope block but declared with same name.
// Avoid unnecessary hoisting.
// Add more restrictions to force our code more reliable, organized and easier to read 
