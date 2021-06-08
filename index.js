const grab = (element) => document.querySelector(element);
const grabAll = (elementGroup) => document.querySelectorAll(elementGroup);


/** Oreo Truffles */
const chocolateCoveringSection = grab('.oreo-chocolate-covering');
const drizzleOrSprinklesSection = grab('.oreo-drizzle-or-sprinkles-section');
const oreoSprinklesSection = grab('#oreo-sprinkles-text');
const oreoBtn = grab('#oreo-add');

/** Cake Balls */
const cakeBtn = grab('#cake-add');
const cakeFlavorsSection = grab('.cake-section');
const icingFlavorsSection = grab('.icing-section');
const cakeChocolateCoveringSection = grab('.cake-chocolate-covering');
const cakeDrizzleOrSprinklesSection = grab('.cake-drizzle-or-sprinkles-section');
const cakeSprinklesSection = grab('#cake-sprinkles-text');

/** variables for Dessert object */
let chocolateCovering = undefined;
let drizzleSelection = undefined;
let sprinklesSelection = undefined;
let cakeSelection = undefined;
let icingSelection = undefined;


/** Dessert Class */
class Dessert{
    constructor(item, details){
        this.item = item;
        this.details = details;
    }
}

/** variables and logic for cart */
let cart = [];
const cartSection = grab('.cart');
const cartModalContent = grab('.cart-modal-content');
const closeCart = grab('.close-cart');

const make = (element, classToAdd) => {
    const el = document.createElement(element);
    el.setAttribute('class', classToAdd);
    return el;
}

function clearCartDisplay(){
    while(closeCart.nextElementSibling) {
        closeCart.nextElementSibling.remove();
    }

}

function displayCart(){

    if (!cart){
        alert('Your cart has no items!')
    } else {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    })

    clearCartDisplay();

    cartSection.style.display = 'block';
    const itemHeading = make('h3', 'cart-title');
    itemHeading.innerText = 'Cart';
    cartModalContent.append(itemHeading);

    const checkOutBtn = make('button', 'check-out-btn');
    checkOutBtn.innerText = 'CHECK OUT';
    cartModalContent.append(checkOutBtn);

    cart.forEach(dessert => {
        const itemSection = make('section', 'cart-item');
        const header = make('header', 'item-header');
        const itemName = make('h4', 'item-title');
        const spanQuantity = make('span', 'item-amount');
        itemHeading.after(itemSection);
        itemSection.append(header);
        header.append(itemName);
        header.after(spanQuantity);

        itemName.innerText = dessert.item;
        spanQuantity.innerText = `${dessert.details[dessert.details.length-1]} dozen`;
        
        dessert.details.forEach((detail, index) => {
            if (!detail){
                null
            } else if (index === (dessert.details.length - 1)){
                // if index of detail is equal to the last index of the array do not display
                null
            } else {
                const detailItem = make('p', 'item-detail');
                detailItem.innerHTML = detail;
                header.append(detailItem);
            }
        })
    })
    
    closeCart.addEventListener('click', ()=>{
        cartSection.style.display = 'none';
    })

    checkOutBtn.addEventListener('click', ()=>{
        console.log('This is your cart: ', cart);
    } )
}
}

/** logic for quantity */
let counter = 0;
const increaseBtn = grabAll('.increase-btn');
const decreaseBtn = grabAll('.decrease-btn');
const quantitySection = grabAll('.quantity-box');

function increaseCounter(){
    counter++;
    return counter;
}

function decreaseCounter(){
    if (counter === 0){
        console.log('Cannot go lower than zero')
    } else {
        counter--;
    }
    return counter;
}
function updateDisplay(){
    quantitySection.forEach(section => {
        section.value = counter;
    })
}

increaseBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        increaseCounter();
        updateDisplay();
    })
})

decreaseBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        decreaseCounter();
        updateDisplay();
    })
})

function resetCounter(){
    counter = 0;
    updateDisplay();
}

/** logic for making dessert selections */
function getSiblings(event){
    let siblings = [];
    if (!event.parentNode){
        return siblings;
    }
    let sibling = event.parentNode.firstChild;
    while(sibling) {
        if (sibling.nodeType === 1 && sibling !== event){
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
}

function updateSelection(e, className){
    if (e.target.classList.contains(className)){
        let siblings = getSiblings(e.target);
        siblings.forEach(sibling => {
            if (sibling.classList.contains(className)){
                sibling.style.border = '1px solid black';
            }
        })
        e.target.style.border = '2px solid red';
        // return e.target.id;
        return e.target.innerText;
    }
}

chocolateCoveringSection.addEventListener('click', (e) => {
    chocolateCovering = updateSelection(e, 'oreo-covering-options');
})

cakeChocolateCoveringSection.addEventListener('click', (e)=>{
    chocolateCovering = updateSelection(e, 'cake-covering-options');
})

drizzleOrSprinklesSection.addEventListener('click', (e)=>{
    drizzleSelection = updateSelection(e, 'drizzle-or-sprinkles');
})

cakeDrizzleOrSprinklesSection.addEventListener('click', (e)=>{
    drizzleSelection = updateSelection(e, 'drizzle-or-sprinkles');
})

cakeFlavorsSection.addEventListener('click', (e)=>{
    cakeSelection = updateSelection(e, 'cake-flavor');
})

icingFlavorsSection.addEventListener('click', (e)=>{
    icingSelection = updateSelection(e, 'icing-flavors');
})

oreoBtn.addEventListener('click', ()=> {
    if (!chocolateCovering) {
        alert('Please select a chocolate covering!');
    } else if (!drizzleSelection){
        alert('Please select drizzle or sprinkles!');
    // } else if ((drizzleSelection === 'oreo-sprinkles') && !oreoSprinklesSection.value){
    } else if ((drizzleSelection === 'Sprinkles') && !oreoSprinklesSection.value){
        alert('Please indicate what color(s) sprinkles you would like!');
    } else {
        const details = [chocolateCovering, drizzleSelection, oreoSprinklesSection.value, counter ];
        const dessert = new Dessert('Oreo Truffles', details)
        cart.push(dessert);
        displayCart();
        resetCounter();
    }
})

cakeBtn.addEventListener('click', ()=> {
    if (!cakeSelection) {
        alert('Please select a cake flavor!')
    } else if (!icingSelection){
        alert('Please select an icing flavor!')
    } else if (!chocolateCovering) {
        alert('Please select a chocolate covering!');
    } else if (!drizzleSelection){
        alert('Please select drizzle or sprinkles!');
    } else if ((drizzleSelection === 'Sprinkles') && !cakeSprinklesSection.value){
        alert('Please indicate what color(s) sprinkles you would like!');
    }  else {
        const details = [cakeSelection, icingSelection, chocolateCovering, drizzleSelection, cakeSprinklesSection.value, counter ];
        const dessert = new Dessert('Cake Balls', details)
        cart.push(dessert);
        displayCart();
        resetCounter();
    }
})

/** Add other desserts */
const addToCartBtnGroup = grabAll('.add-to-cart');
addToCartBtnGroup.forEach(btn=>{
 btn.addEventListener('click', ()=> {
    //  const dessertName = btn.parentNode.childNodes[3].innerText;
    //  const dessert = new Dessert(dessertName, [counter]);
    //  cart.push(dessert);
    //  displayCart();
 }) 
})




