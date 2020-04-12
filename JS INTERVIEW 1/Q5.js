// Q5. How to call the function display() in the following code such that it logs the given object on the screen

// const obj = {a: 100};
// function display() {
//     console.log(this);
// }
// calling display() should output {a: 100}

Object.prototype.display = function(){
    console.log(this);
}

const obj = {a: 100};
// function display() {
//     console.log(this.global);
// }

for (var propName in this.window){
    console.log(propName);
}

// obj.display();
