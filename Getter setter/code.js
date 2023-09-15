/*
//1.getter and setter
const product = {
    productName: "computer",
    price: 599.99,

    get prod() {
        return this.productName;
    },

    set prod(prod){
        this.productName = prod;
    },

    printProduct: function(){
        console.log(this.productName + " "  + this.price);
    }
};

product.printProduct();

product.prod = "laptop";
console.log(product.prod);

//2.classes and object

class Product {
    constructor(){
        this.productName = "";
        this.price = 0;
    }

    printProduct(){
        console.log(this.productName + " " + this.price); 
    }
}

var prod = new Product();
var prod2 = new Product();

prod.productName = "test";
prod.price = 199.09;

prod2.productName = "laptop";
prod2.price = 5999.09;

prod.printProduct();
prod2.printProduct();

//3.Inheritance

class Transportaion {
    constructor(){
        this.typeName = "";
        this.wheels = 0;
        this.maxSpeed = 0;
    }
}

class Car extends Transportaion{
    constructor(){
        super();
        this.fuel = 0;
    }
}

var car1 = new Car();
car1.typeName = "Car";
car1.wheels = 4;
car1.maxSpeed = 200;
car1.fuel = 40;

console.log(car1);
*/
