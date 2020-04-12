// Implement LinkedList class in JS.


//Creating a linked list class
class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //method to add a new element in a list
    addElementToList(num){
        let newNode = new Node(num);
        if(this.head==null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    //method to display elements in a list
    displayLinkedList(){
        let temp = this.head;
        let str = "";
        while(temp!=null){
            str = str + temp.element+"->";
            temp = temp.next;
        }
        str = str+"END";
        console.log(str);
    }

    //method to remove from the front of the list
    removeFromFront(){
        if(this.head!=null){
            let temp = this.head;
            this.head = this.head.next;
            return temp.element;
        }
        else{
            console.log('List already empty');
            return -1;
        }
    }

}

class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

//Instantiating our LinkedList class
linkedList = new LinkedList();

//Testing our LinkedList class

linkedList.addElementToList(1);
linkedList.addElementToList(2);
linkedList.addElementToList(3);
linkedList.displayLinkedList();
console.log(linkedList.removeFromFront());
linkedList.displayLinkedList();