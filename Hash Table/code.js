/*
class HashTable {
    constructor(size){
        this.size = size;
        this.values = {};
    }

    calculateHash(value){
        return value % this.size;
    }

    add(value){
        var hash = this.calculateHash(value);

        if (this.values[hash] === undefined){
            this.values[hash] = value;
        }else{
            var iters = 0;
            while (this.values[hash] !== undefined && iters <= this.size){
                hash += 1;
                hash = hash % this.size;
                iters += 1;
            }
            if (iters > this.size){
                throw "IndexOutOfRange";
            }else{
                this.values[hash] = value;
            }

        }

    }
    contains(value){
        var hash = this.calculateHash(value);

        if (this.values[hash] == value){
            return true;
        }else{
            var iters = 0;
            while (this.values[hash] != value && iters <= this.size){
                hash += 1;
                hash = hash % this.size;
                iters += 1;
            }
            if (this.values[hash] == value){
                return true;
            }else{
                return false;
            }
        }
    }
    
    print(){
        console.log(this.values);
    }
}

var h = new HashTable(51);
h.add(4);
h.add(8);
h.add(12);
console.log(h.contains(8));
console.log(h.contains(15));
h.print();

//2.union
const map1 = new Map();

var union =[];
const arr1 = [1,3,5,7,9];
const arr2 = [1,2,4,6,8,10];

for (var i = 0; i < arr1.length; i++){
    if (!map1.has(arr1[i])){
        map1.set(arr1[i],arr1[i]);
        union.push(arr1[i]);
    }
}

for (var i = 0; i < arr2.length; i++){
    if (!map1.has(arr2[i])){
        map1.set(arr2[i],arr2[i]);
        union.push(arr2[i]);
    }
}
console.log(map1);

//3.Browser local storage

class HashTable {
    constructor(size){
        this.size = size;
        this.values = {};
    }

    calculateHash(value){
        var sum = 0;
        for(var i = 0; i < value.length; i++){
            var charCode = value.charCodeAt(i);
            sum += charCode;
        }

        return value % this.size;
    }

    add(key,value){
        var hash = this.calculateHash(key);
        this.values[hash] = value;
    }
    
    getItem(key){
        var hash = this.calculateHash(key);
        return this.values[hash];
    }

    print(){
        console.log(this.values);
    }
}

var h = new HashTable(51);
h.add("hello","world");
//h.add("world","hello");
console.log(h.getItem("hello"));

//Common hash table

class HashTable {
    constructor(size){
        this.size = size;
        this.values = {};
    }

    calculateHash(value){
        return value % this.size;
    }

    add(value){
        var hash = this.calculateHash(value);

        if (this.values[hash] === undefined){
            this.values[hash] = value;
        }else{
            var iters = 0;
            while (this.values[hash] !== undefined && iters <= this.size){
                hash += 1;
                hash = hash % this.size;
                iters += 1;
            }
            if (iters > this.size){
                throw "IndexOutOfRange";
            }else{
                this.values[hash] = value;
            }

        }

    }
    contains(value){
        var hash = this.calculateHash(value);

        if (this.values[hash] == value){
            return true;
        }else{
            var iters = 0;
            while (this.values[hash] != value && iters <= this.size){
                hash += 1;
                hash = hash % this.size;
                iters += 1;
            }
            if (this.values[hash] == value){
                return true;
            }else{
                return false;
            }
        }
    }
    
    print(){
        console.log(this.values);
    }
}

//remove the duplication
var arr = [1,2,3,4,4,5,6,6,7,9,8,8,8];
var h = new HashTable(251);
var retArr = [];

for(var i = 0; i < arr.length; i++){
    var v = arr[i];

    if(!h.contains(v)){
        h.add(v);
        retArr.push(v);
    }
}

console.log(retArr);


//common number 
class HashTable {
    constructor(size){
        this.size = size;
        this.values = {};
    }

    calculateHash(value){
        return value % this.size;
    }

    add(value){
        var hash = this.calculateHash(value);

        if (this.values[hash] === undefined){
            this.values[hash] = value;
        }else{
            var iters = 0;
            while (this.values[hash] !== undefined && iters <= this.size){
                hash += 1;
                hash = hash % this.size;
                iters += 1;
            }
            if (iters > this.size){
                throw "IndexOutOfRange";
            }else{
                this.values[hash] = value;
            }

        }

    }
    contains(value){
        var hash = this.calculateHash(value);

        if (this.values[hash] == value){
            return true;
        }else{
            var iters = 0;
            while (this.values[hash] != value && iters <= this.size){
                hash += 1;
                hash = hash % this.size;
                iters += 1;
            }
            if (this.values[hash] == value){
                return true;
            }else{
                return false;
            }
        }
    }
    
    print(){
        console.log(this.values);
    }
}
//find the common number 
var arr = [1,2,3,4,4,5,5,6,6];
var arr2 = [1,6,7,2,9];

var h = new HashTable(251);
var intercept = [];

for(var i = 0; i < arr.length; i++){
    var v = arr[i];
    if(!h.contains(v)){
        h.add(v);
    }
}

for(var i = 0; i < arr2.length; i++){
    var v = arr2[i];
    if(h.contains(v)){
        intercept.push(v);
    }
}

console.log(intercept);
*/

