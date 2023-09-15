/*
//const products = ["flower", "eggs", "milk"];
const products = [];
products[0] = "flower";
products[1] = "eggs";
products[2] = "milk";

products.push("sugar", "yeast");

console.log(products[2]); 
console.log(products); 
console.log(products.length);
console.log(products.sort());  


//2.Enumarating Array:
const products = ["flower", "milk", "yeast", "eggs"];
const nums = [1,2,3,4,5];

products.forEach(printProducts);
const newNums = nums.map(addOne);

const filteredNums = nums.filter(lessThree)
//console.log(newNums);
//console.log(filteredNums);

let sumNums = nums.reduce(sumAll);

console.log(sumNums);

function sumAll(total,value,index,array){
    return total + value;
}


function printProducts(value,index,array){
    console.log(value);
}

function addOne(value,index,array){
    return value + 1;
}

function lessThree(value,index,array){
    return value < 3;
}

//3.Cloning and resizing array

const products = ["flower", "eggs", "milk", "yeast"];
const products2 = [...products];
const products3 = products.slice();
const products4 = [].concat(products);
const products5 = Array.from(products);
 
console.log(products2);
console.log(products3);
console.log(products4);
console.log(products5);

products.length = 6;
console.log(products)

//4.Commom Array Method
const products = ["flower", "eggs", "milk", "yeast"];

console.log(products.toString());
console.log(products.join("|"))

let product = products.pop();

console.log(product);
console.log(products);

delete products[0];
console.log(products);

const arr1 = [1,2,3,4,5];
var evenCount = 0;
var oddCount = 0;
for (vals of arr1){

    if (vals % 2 === 0){
      evenCount += 1;
    }else{
        oddCount += 1;
    }   
}

console.log(oddCount);
console.log(evenCount);

//5.Multidimentional Array

const product = [["flower", "milk", "yeast", "eggs"],["soda", "water", "juice"]];
//console.log(product[0][1]);
product.push(["chicken", "beans"]);
product.push(["popcorn", "tea", "coffee"]);

console.table(product);

var arr1 = [[1,2],[3,4]]
for (let i = 0; i < arr1.length; i++){
   for (let j = 0; j < i; j++){
        const temp = arr1[i][j];
        arr1[i][j] = arr1[j][i];
        arr1[j][i] = temp;
    }
}
console.log(arr1);

//Common Array
const nums = [];
for(let i = 0; i <= 100; i++){
    if(i != 35){
        nums.push(i);
    }
}

var total = 0;
for(let i = 0; i < nums.length; i++){
    total += nums[i];
}


console.log(5050-total);

//
const nums = [4,10,3,22,67,3,14,7];
var maxVal = nums[0];

for(let i = 0; i < nums.length; i++) {
    if(maxVal < nums[i]){
        maxVal = nums[i];
    }
}

console.log(maxVal);
*/
