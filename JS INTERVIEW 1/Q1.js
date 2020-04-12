// Q1. Implement customMap() function for JS arrays. The functionality should be exactly the same as that of JS native .map() function. Function customMap() should return a new array and not change the array on which we are mapping


//  1.Using prototype to add a function to the default arrays object in javascript

//  2.Passing the function body as a parameter in the customMap 
Array.prototype.customMap = function(passedFunction) {

//  3.Creating a new array to store the results 
    let newArr = [];

//  4.Iterating through the array using this(current object)
    for (i = 0; i < this.length; i++) {

//  5.Calling the passed Function and passing the parameters as value and index and storing the returned value in the new array
        newArr.push(passedFunction(this[i], i));
    }

//  7.Returning the new Array
    return newArr;
};

//  8.Testing the customMap function

let arr = [11,22,33,44,55];

let result1 = arr.customMap((item)=>{
    return {'item': item};
});

let result2 = arr.customMap((item, index)=>{
    return {'index': item, 'item': item};
});

let result3 = arr.customMap((item, index)=>{
    return item*item;
});

console.log(result1);
console.log(result2);
console.log(result3);
