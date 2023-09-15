/*
class Queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(val){
        this.queue[this.rear] = val;
        this.rear++;
    }

    dequeue(){
        if(this.queue.length > 0){
            var val = this.queue[this.front];
            delete this.queue[this.front];
            this.front++;
        return val;
        }else{
            throw "Stack Underflow";
        }
    }

    peek(){
        return this.queue(this.front);
    }

    length(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length == 0;
    }

    print(){
        console.log(this.queue);
    }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
//q.dequeue();
//q.dequeue();
q.print();

//2.Node based approach

class Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

class Queue{
    constructor(){
        this.front = new Node(null,null);
        this.rear = new Node(null,null);
        this.size = 0;
    }

    enqueue(val){
        var inNode = new Node(val,null);
        if (this.size == 0){
            this.front = this.rear = inNode;
            this.size++;
        }else{
            this.rear.next = inNode;
            this.rear = inNode;
            this.size++;
        }

    }

    dequeue(){
        if (this.size == 0){
            throw "Stack Underflow";
        }else{
		var val = this.front.value;
            this.front = this.front.next;
            size--;
		return val;
        }
    }
    peek(){
        if (this.size == 0){
            throw "Stack Underflow";
        }else{
            return this.front.value;
        }
    }

    isEmpty(){
        return this.size == 0;
    }

    print(){
        var holder = this.front;
        while (holder.next != null){
            console.log(holder.value);
            holder = holder.next;
        }
    }


}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
*/

//3.Event Dispatching
