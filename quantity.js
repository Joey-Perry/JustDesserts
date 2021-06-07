
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

