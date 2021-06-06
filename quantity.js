let counter = 0;
// const grab = (element) => document.querySelector(element);

{/* <section class='quantity-section'>
<label for='quantity' class='quantity-label covered-in-title'>Quantity: </label>
<section class='quantity-number-section'>

    <button class="decrease-btn"> - </button>
    <input disabled type='number' class='quantity-box'>
    <button class='increase-btn'> + </button>
</section>
</section> */}

const make = (elementToMake, classToAdd) => {
    const el = document.createElement(elementToMake);
    el.setAttribute('class', classToAdd);
    return el;
}



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

function buildSection(quantity){
    const label = make('label', 'covered-in-title');
    const section = make('section', 'quantity-number-section');
    const increaser = make('button', 'increase-btn');
    const decreaser = make('button', 'decrease-btn');
    const input = make('input', 'quantity-box');
    label.innerText = 'Quantity';

    quantity.insertAdjacentHTML('beforeend', '<h2>Test</h2>');

    // console.log(quantity);

    const increaseBtn = grab('.increase-btn');
    const decreaseBtn = grab('.decrease-btn');
    const quantitySection = grab('.quantity-box');
    
    function updateDisplay(){
        quantitySection.value = counter;
    }
    
    // increaseBtn.addEventListener('click', ()=>{
    //     increaseCounter();
    //     updateDisplay();
    // })
    
    // decreaseBtn.addEventListener('click', ()=>{
    //     decreaseCounter();
    //     updateDisplay();
    // })

}


document.querySelectorAll(".menu-item-div").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.target.previousElementSibling.style.display = "block";
      const quantitySection = event.target.previousElementSibling.childNodes[1];
      buildSection(quantitySection);
    });
  });