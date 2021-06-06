const grab = (element) => document.querySelector(element);
const grabAll = (elementGroup) => document.querySelectorAll(elementGroup);

const chocolateCoveringSection = grab('.oreo-chocolate-covering');
const drizzleOrSprinklesSection = grab('.oreo-drizzle-or-sprinkles-section');
const oreoSprinklesSection = grab('#oreo-sprinkles-text');
const cakeChocolateCoveringSection = grab('.cake-chocolate-covering');
const cakeDrizzleOrSprinklesSection = grab('.cake-drizzle-or-sprinkles-section');
const cakeSprinklesSection = grab('#cake-sprinkles-text');
const oreoBtn = grab('#oreo-add');
const cakeBtn = grab('#cake-add');
const cakeFlavorsSection = grab('.cake-section');
const icingFlavorsSection = grab('.icing-section');

const addToCartBtnGroup = grabAll('.add-to-cart');

let chocolateCovering = undefined;
let drizzleSelection = undefined;
let sprinklesSelection = undefined;
let cakeSelection = undefined;
let icingSelection = undefined;

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
        console.log(e.target.id);
        return e.target.id;
    }
}

chocolateCoveringSection.addEventListener('click', (e) => {
    chocolateCovering = updateSelection(e, 'oreo-covering-options');
})

// chocolateCoveringSection.addEventListener('click', (e)=>{
//     if (e.target.classList.contains('oreo-covering-options')){
//         let siblings = getSiblings(e.target);
//         siblings.forEach(sibling => {
//             if (sibling.classList.contains('oreo-covering-options')){
//                 sibling.style.border = '1px solid black';
//             }
//         })
//         e.target.style.border = '2px solid red';
//         chocolateCovering = e.target.id;
//     }
// })

cakeChocolateCoveringSection.addEventListener('click', (e)=>{
    if (e.target.classList.contains('cake-covering-options')){
        let siblings = getSiblings(e.target);
        siblings.forEach(sibling => {
            if (sibling.classList.contains('cake-covering-options')){
                sibling.style.border = '1px solid black';
            }
        })
        e.target.style.border = '2px solid red';
        chocolateCovering = e.target.id;
    }
})

drizzleOrSprinklesSection.addEventListener('click', (e)=>{
    if (e.target.classList.contains('drizzle-or-sprinkles')){
        let siblings = getSiblings(e.target);
        siblings.forEach(sibling => {
            if (sibling.classList.contains('drizzle-or-sprinkles')){
                sibling.style.border = '1px solid black';
            }
        })
        e.target.style.border = '2px solid red';
        drizzleSelection = e.target.id;
    }
})

cakeDrizzleOrSprinklesSection.addEventListener('click', (e)=>{
    if (e.target.classList.contains('drizzle-or-sprinkles')){
        let siblings = getSiblings(e.target);
        siblings.forEach(sibling => {
            if (sibling.classList.contains('drizzle-or-sprinkles')){
                sibling.style.border = '1px solid black';
            }
        })
        e.target.style.border = '2px solid red';
        drizzleSelection = e.target.id;
    }
})

cakeFlavorsSection.addEventListener('click', (e)=>{
    if (e.target.classList.contains('cake-flavor')){
        let siblings = getSiblings(e.target);
        siblings.forEach(sibling => {
            if (sibling.classList.contains('cake-flavor')){
                sibling.style.border = '1px solid black';
            }
        })
        e.target.style.border = '2px solid red';
        cakeSelection = e.target.id;
    }
})

icingFlavorsSection.addEventListener('click', (e)=>{
    if (e.target.classList.contains('icing-flavors')){
        let siblings = getSiblings(e.target);
        siblings.forEach(sibling => {
            if (sibling.classList.contains('icing-flavors')){
                sibling.style.border = '1px solid black';
            }
        })
        e.target.style.border = '2px solid red';
        icingSelection = e.target.id;
    }
})

oreoBtn.addEventListener('click', ()=> {
    if (!chocolateCovering) {
        alert('Please select a chocolate covering!');
    } else if (!drizzleSelection){
        alert('Please select drizzle or sprinkles!');
    } else if ((drizzleSelection === 'oreo-sprinkles') && !oreoSprinklesSection.value){
        alert('Please indicate what color(s) sprinkles you would like!');
    } else {
        console.log(oreoSprinklesSection.value);
        console.log({chocolateCovering});
        console.log({drizzleSelection});
        console.log({cakeSelection});
        console.log({icingSelection});
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
    } else if ((drizzleSelection === 'cake-sprinkles') && !cakeSprinklesSection.value){
        alert('Please indicate what color(s) sprinkles you would like!');
    }  else {
        console.log(cakeSprinklesSection.value);
        console.log({chocolateCovering});
        console.log({drizzleSelection});
        console.log({cakeSelection});
        console.log({icingSelection});
    }
})





