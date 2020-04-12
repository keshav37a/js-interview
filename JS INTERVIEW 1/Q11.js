// Implement LinkedList class in JS.


//Creating a linked list class
class Stack{

    constructor(){
        this.arr = [];
        this.front = 0;
        this.size = 0;
        this.top = -1;
    }

    //method to add a new element in a list
    push(num){
        this.arr.unshift(num);
        this.size +=1;
        this.top = num;
    }

    //method to display elements in a list
    displayStackElements(){
        let str = ""
        this.arr.forEach(element =>{
            str += element+" ";
        })
        console.log(str);
    }

    //method to remove from the top of the stack
    pop(){
        if(this.size>0){
            let remItem = this.arr.shift();
            this.size-=1;
            if(remItem.size>0)
                this.top = this.arr[0];
            else
                this.top = -1;

            return remItem;
        }
        else{
            console.log('Stack already empty');
            return -1;
        }
    }

    getTop(){
        if(this.size>0)
            return this.top;
        else
            return -1;
    }

}

//Instantiating our Stack class
stack = new Stack();

//Testing our Stack class
stack.push(1);
console.log(stack.getTop());
stack.push(2);
console.log(stack.getTop());
stack.push(3);
stack.push(4);
stack.displayStackElements();
console.log(stack.pop());
console.log(stack.pop());
stack.displayStackElements();
console.log(stack.pop());
console.log(stack.pop());
stack.displayStackElements();

