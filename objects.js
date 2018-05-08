/* exported coffeeList */

// object constructor
function Coffee(type, image, temp) {
    this.type = type;
    this.image = image;
    this.temp = temp;
}

// properties of coffee
const latte = new Coffee('Latte', 0, 'cold');
const dripCoffee = new Coffee('Drip Coffee', 1, 'cold');
const cappuccino = new Coffee('Cappuccino', 2, 'hot');
const flatWhite = new Coffee('Flat White', 3, 'hot');

// list of coffee objects
const coffeeList = [
    latte,
    dripCoffee,
    cappuccino,
    flatWhite
];

console.log(coffeeList[0].type);
console.log(coffeeList[0].temp);


