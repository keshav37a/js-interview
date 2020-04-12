// Q2. Implement a function propertyExists(obj, path) that takes in an object and a path (string) as arguments and returns ‘False’ if the property doesn’t exist on that object or is null, else returns the value of the property

// Example:
// const obj = {
// a: 1,
// b: 2,
// c: {
// d: 100,
// e: {
// f: 45
// }
// }
// };
// console.log(propertyExists(obj, ‘c.d’)); // should output 100
// console.log(propertyExists(obj, ‘c.d.g.h’)); // should output false
// console.log(propertyExists(obj, ‘a.b’)); // should output false 
// console.log(propertyExists(obj, ‘c.d.e.f’)); // should output 45


let propertyExists = function(obj, path){
    //  1.added try catch block to catch any errors due to accessing a property of a non existing object
    try{

        //  2.Used eval to evaluate a string as path is passed as a string  
        let ans = eval('obj.'+path);

        //  3.If ans is undefined or null return false
        if(ans==null || ans==undefined){
            return false;
        }

        //  4.Return the value of the evaluated expression
        return ans;
    }
    catch(err){
        if(err){
            return false;
        }
    }   
}

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 100,
        e: {
            f: 45
        }
    }
};
    
//Testing the properyExists function

console.log(propertyExists(obj, 'c.d')); 
console.log(propertyExists(obj, 'c.d.g.h')); 
console.log(propertyExists(obj, 'a.b')); 
console.log(propertyExists(obj, 'c.e.f')); 