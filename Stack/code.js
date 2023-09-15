/*
class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty(){
        return this.stack.length == 0;
    }

    size(){
        return this.stack.length;
    }

    push(val){
        this.stack.push(val);
    }

    pop(){
        if(this.stack.length > 0){
            return this.stack.pop();
        }else{
            throw "stack Underflow";
        }       
    }

    peek(){
        if(this.stack.length > 0){
            return this.stack[this.stack.length - 1];
        }else{
            throw "Stack underflow";
        }
        
    }

    print(){
        console.log(this.stack);
    }
}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.print();
s.pop();
s.print();
s.pop();
s.print();
s.pop();
s.print();
s.pop();
s.print();

//2.node based Approach

class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = new Node(null, null);
        this.size = 0;
    }

    push(val){
        var inNode = new Node(val, this.top);
        this.top = inNode;
        this.size++;
    }

    peek(){
        if(this.size > 0){
            return this.top.value;
        }else{
            throw "stack underflow";
        }
    }

    pop(){
        if(this.size > 0){
            var retVal = this.top.value;
            this.top = this.top.next;
            this.size--;
        }else{
            throw "stack underflow";
        }
    }

    isEmpty(){
        return this.size == 0;
    }

    print(){
        var holder = this.top;
        while(holder.next != null){
            console.log(holder.value);
            holder = holder.next;
        }
    }
}

var s = new Stack();
s.push(1);
s.push(2);
s.print();
s.pop();
s.pop();

//3.Undo redo operation

class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = new Node(null, null);
        this.size = 0;
    }

    push(val){
        var inNode = new Node(val, this.top);
        this.top = inNode;
        this.size++;
    }

    peek(){
        if(this.size > 0){
            return this.top.value;
        }else{
            throw "stack underflow";
        }
    }

    pop(){
        if(this.size > 0){
            var retVal = this.top.value;
            this.top = this.top.next;
            this.size--;
            return retVal;
        }else{
            throw "stack underflow";
        }
    }

    isEmpty(){
        return this.size == 0;
    }
    
    print(){
        var holder = this.top;
        while(holder.next != null){
            console.log(holder.value);
            holder = holder.next;
        }
    }
}

var undoStack = new Stack();
var redoStack = new Stack();
var counter = 0;

function incrementCounter(){
    undoStack.push(counter);
    counter++;
    document.getElementById("val").value = counter;
}

function undo(){
    undoStack.print();
    redoStack.push(counter);
    counter = undoStack.pop();
    document.getElementById("val").value = counter;
}

function redo(){
    undoStack.push(counter);
    counter = redoStack.pop();
    document.getElementById("val").value = counter;
}

//
class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = new Node(null, null);
        this.size = 0;
    }

    push(val){
        var inNode = new Node(val, this.top);
        this.top = inNode;
        this.size++;
    }

    peek(){
        if(this.size > 0){
            return this.top.value;
        }else{
            throw "stack underflow";
        }
    }

    pop(){
        if(this.size > 0){
            var retVal = this.top.value;
            this.top = this.top.next;
            this.size--;
            return retVal;
        }else{
            throw "stack underflow";
        }
    }

    isEmpty(){
        return this.size == 0;
    }
    
    print(){
        var holder = this.top;
        while(holder.next != null){
            console.log(holder.value);
            holder = holder.next;
        }
    }
}

var bracketStack = new Stack();
var testString = "(1+2)";
var valid = true;
var i = 0;

while(i < testString.length && valid){
    var charVal = testString.charAt(i);
    if(charVal == "("){
        bracketStack.push(charVal);
    }else if(charVal == ")"){
        if(!bracketStack.isEmpty()){
            bracketStack.pop();
        }else{
            valid = false;
        }
    }
    i++;
}

if(!bracketStack.isEmpty()){
    valid = false;
}

console.log(valid);

//Palindrome

class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = new Node(null, null);
        this.size = 0;
    }

    push(val){
        var inNode = new Node(val, this.top);
        this.top = inNode;
        this.size++;
    }

    peek(){
        if(this.size > 0){
            return this.top.value;
        }else{
            throw "stack underflow";
        }
    }

    pop(){
        if(this.size > 0){
            var retVal = this.top.value;
            this.top = this.top.next;
            this.size--;
            return retVal;
        }else{
            throw "stack underflow";
        }
    }

    isEmpty(){
        return this.size == 0;
    }
    
    print(){
        var holder = this.top;
        while(holder.next != null){
            console.log(holder.value);
            holder = holder.next;
        }
    }
}

var reverseString = new Stack();
var testString = "racecar";

for(var i = 0; i < testString.length; i++){
    reverseString.push(testString.charAt(i));
}

var valid = true;
var i = 0;

while(reverseString.size > 0 && valid){
    var charVal = reverseString.pop();

    if(charVal != testString.charAt(i)){
        valid = false;
    }
    i++;
}

console.log(valid);
*/
//
