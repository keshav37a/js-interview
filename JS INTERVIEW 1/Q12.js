// Q12. Implement Queue class in JS.

//Creating a Queue class
class Queue{

    constructor(){
        this.arr = [];
        this.front = 0;
        this.size = 0;
    }

    //method to add a new element in a Queue
    append(num){
        if(this.size==0){
            this.front = num;
        }
        this.arr.push(num);
        this.size +=1;
    }

    //method to display elements in a Queue
    displayQueueElements(){
        let str = ""
        this.arr.forEach(element =>{
            str += element+" ";
        })
        console.log(str);
    }

    //method to remove from the front of the Queue
    remove(){
        if(this.size>0){
            let remItem = this.arr.shift();
            this.size-=1;
            if(this.arr.size>0)
                this.front = this.arr[0];
            else
                this.front = -1;

            return remItem;
        }
        else{
            console.log('Queue already empty');
            return -1;
        }
    }

    //get the front element in the queue
    getFront(){
        if(this.size>0)
            return this.front;
        else
            return -1;
    }

}

//Instantiating our Queue class
queue = new Queue();

//Testing our Queue class
queue.append(1);
console.log(queue.getFront());
queue.append(2);
console.log(queue.getFront());
queue.append(3);
queue.append(4);
queue.displayQueueElements();
console.log(queue.remove());
console.log(queue.remove());
queue.displayQueueElements();
console.log(queue.remove());
console.log(queue.remove());
queue.displayQueueElements();

