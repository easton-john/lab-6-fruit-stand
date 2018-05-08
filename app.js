/* globals coffeeList */
'use strict';

function coffeeType(i) {

    const parent = document.querySelector('body');
    const child = document.createElement('section');
    
    child.setAttribute('id', 'coffee-item-' + i);
    parent.appendChild(child);

    const grandChild = document.createElement('h2');
    grandChild.setAttribute('id', 'name-' + i);

    grandChild.textContent = coffeeList[i].type;
    child.appendChild(grandChild);
    
}

function coffeeImage(i) {
    
    const parent = document.getElementById('coffee-item-' + i);
    let child = document.createElement('img');
    
    child.setAttribute('id', 'image-' + i);

    child.textContent = coffeeList[i].image;
    parent.appendChild(child);
    
}

function coffeeTemp(i) {
    
    const parent = document.getElementById('coffee-item-' + i);
    let child = document.createElement('p');
    
    if(coffeeList[i].temp === 'hot') {
        child.setAttribute('class', 'hot');
    }
    else {
        child.setAttribute('class', 'cold');
    }
    
    child.textContent = coffeeList[i].temp;
    parent.appendChild(child);
    
}

function coffeeShop() {
    for(var i = 0; i < coffeeList.length; i++) {
        coffeeType(i);
        coffeeImage(i);
        coffeeTemp(i);
    }
}

coffeeShop();


/* function createCoffeePost(i) {
    for(var i = 0; i < coffeeList.length; i++)
    
} */
