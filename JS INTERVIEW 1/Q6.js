// Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6

/*
    Every JavaScript function has a prototype property (this property is empty by default), and you attach properties and methods on this prototype property when you want to implement inheritance.

    JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.

    An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

    
    the class keyword in ES6 is equivalent to a constructor function definition that conforms to prototype-based inheritance.

    Before ES6, if we had to create a class for creating many objects of the same type, we’d use a constructor function like this:

    function Animal (name, fierce) {
        Object.defineProperty(this, 'name', {
        get: function() { return name; }
        });
    
        Object.defineProperty(this, 'fierce', {
        get: function() { return fierce; }
        });
    }
    
    Animal.prototype.toString = function() {
        return 'A' + ' ' + ( this.fierce ? 'fierce' : 'tame' ) + ' ' + this.name;
    }


    We can rewrite the code using the ES6 class for a concise version:

    class Animal {

        constructor(name, fierce){
            this._name = name;
            this._fierce = fierce;
        }
    
        get name() {
        return this._name;
        }
    
        get fierce() {
        return ` This animal is ${ this._fierce ? 'fierce' : 'tame' }`;
        }
    
        toString() {
        return `This is a ${ this._fierce ? 'fierce' : 'tame' } ${this._name}`;
        }
    
    }

    ES6 prototype methods can be inherited by children classes to simulate an object oriented behaviour in JavaScript but under the hood, the inheritance feature is simply a function of the existing prototype chain

*/