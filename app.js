/* globals coffeeList */
'use strict';

function coffeeType(i) {

    const parent = document.querySelector('div');
    const child = document.createElement('section');
    
    child.setAttribute('id', 'coffee-item-' + i);
    child.setAttribute('class', 'container');
    parent.appendChild(child);

    const grandChild = document.createElement('h2');
    grandChild.setAttribute('id', 'name-' + i);

    grandChild.textContent = coffeeList[i].type;
    child.appendChild(grandChild);
    
}

function coffeeImage(i) {
    
    const parent = document.getElementById('coffee-item-' + i);
    let child = document.createElement('img');
    child.setAttribute('class', 'images');
    child.src = coffeeList[i].image;
    parent.appendChild(child);
    
}

function coffeeTemp(i) {
    
    const parent = document.getElementById('coffee-item-' + i);
    let child = document.createElement('p');
    
    if(coffeeList[i].temp === 'hot') {
        child.setAttribute('class', 'hot');
        child.style.color = 'red';
    }
    else {
        child.setAttribute('class', 'cold');
        child.style.color = 'blue';
    }
    
    child.textContent = coffeeList[i].temp.toUpperCase();
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
