/* globals coffeeList */
'use strict';

// inserts HTML <section> tag within <div> element for each object
function insertSection(i) {
    const div = document.querySelector('div');
    const section = document.createElement('section');
    section.setAttribute('id', 'coffee-item-' + i);
    section.setAttribute('class', 'container');
    div.appendChild(section);
}

// inserts HTML <h2> tag within <section> element for each object
function insertH2(i) {
    const section = document.getElementById('coffee-item-' + i.toString());
    const h2 = document.createElement('h2');
    section.appendChild(h2);
    h2.setAttribute('id', 'name-' + i.toString());
    h2.textContent = coffeeList[i].type;
}

// inserts HTML <img> tag within <section> element for each object
function insertImage(i) {
    const section = document.getElementById('coffee-item-' + i.toString());
    const image = document.createElement('img');
    section.appendChild(image);
    image.setAttribute('class', 'images');
    image.setAttribute('id', 'image-' + i.toString());
}

// inserts HTML <p> tag within <section> element for each object
function insertPar(i) {
    const section = document.getElementById('coffee-item-' + i.toString());
    const par = document.createElement('p');
    section.appendChild(par);
    par.setAttribute('id', 'par-' + i.toString());
}

// creates full HTML structure for my objects 
function htmlStructure(i) {
    insertSection(i);
    insertH2(i);
    insertImage(i);
    insertPar(i);
}

// grabs coffee name and inserts in h2 tag
function coffeeType(i) {
    const h2 = document.getElementById('name-' + i.toString());
    h2.textContent = coffeeList[i].type;
}

// grabs coffee image and inserts in img tag
function coffeeImage(i) {
    const image = document.getElementById('image-' + i.toString());
    image.src = coffeeList[i].image;
}

// grabs coffee temp and inserts in p tag
function coffeeTemp(i) {
    const par = document.getElementById('par-' + i.toString());
    
    if(coffeeList[i].temp === 'hot') {
        par.setAttribute('class', 'hot');
        par.style.color = 'red';
    }
    else {
        par.setAttribute('class', 'cold');
        par.style.color = 'blue';
    }
    
    par.textContent = coffeeList[i].temp.toUpperCase();
}

// displays full coffee menu
function coffeeShop() {
    for(var i = 0; i < coffeeList.length; i++) {
        htmlStructure(i);
        coffeeType(i);
        coffeeImage(i);
        coffeeTemp(i);
    }
}

coffeeShop();
