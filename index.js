// this class is to calculate the products and price
/*
class Products{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`product: ${this.name}`)
        console.log(`price: ${this.price.toFixed(2)}`)
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;
const product1 = new Products("shirt",19.99);

product1.displayProduct()

const total = product1.calculateTotal(salesTax);
console.log(`Total Price (with tax): ${total}`)
*/


// learning inheritance
class Mammal{
    numberOfEyes = 2;

    eat(){
        console.log("i am eating")
    }
}

const mammal = new Mammal
mammal.eat()
// creating human class
class Human extends Mammal{

}

const human = new Human()
