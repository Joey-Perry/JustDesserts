const menuItemDivs = grabAll('.menu-item-div');
menuItemDivs.forEach((item, i)=>{
    // section
    const itemSection = make('section', 'menu-item-section');
    itemSection.setAttribute('id', `menu-item-${i}`);
    // img
    const img = make('img', 'menu-image');
    img.setAttribute('id', `menu-image-${i}`);
    // title | price
    const title = make('h3', 'menu-item-title');
    title.setAttribute('id', `menu-item-title-${i}`);
    const price = make('span', 'menu-item-price');
    price.setAttribute('id', `menu-item-price-${i}`);
    // description
    const description = make('p', 'menu-item-description');
    description.setAttribute('id', `menu-item-description-${i}`);

    const titlePriceSection = make('section', 'title-price-section');
    item.append(itemSection);
    itemSection.append(img);
    img.after(titlePriceSection);
    titlePriceSection.append(title);
    // titlePriceSection.append('|');
    titlePriceSection.append(price);
    titlePriceSection.after(description);
})

function createMenuItems(i, imgUrl, title, price, description){
    const imgElement = grab(`#menu-image-${i}`);
    const titleElement = grab(`#menu-item-title-${i}`);
    const priceElement = grab(`#menu-item-price-${i}`);
    const descriptionElement = grab(`#menu-item-description-${i}`);

    imgElement.src = imgUrl;
    titleElement.innerText = title;
    priceElement.innerText = price;
    descriptionElement.innerText = description;
}
const oreoDescription = 'A fan favorite! Cookies and cream cheese combined to make a melt in your mouth' +
' treat covered with an outer layer of hardened chocolate.';

createMenuItems(0, "https://res.cloudinary.com/hannahj/image/upload/v1576307862/IMG_3963_2_tmuk7v.jpg", 'Oreo Truffles |', '$15', oreoDescription)
createMenuItems(1, "https://res.cloudinary.com/hannahj/image/upload/v1576307862/IMG_3963_2_tmuk7v.jpg", 'Oreo Truffles |', '$15', oreoDescription)
createMenuItems(2, "https://res.cloudinary.com/hannahj/image/upload/v1576307862/IMG_3963_2_tmuk7v.jpg", 'Oreo Truffles |', '$15', oreoDescription)
createMenuItems(3, "https://res.cloudinary.com/hannahj/image/upload/v1576307862/IMG_3963_2_tmuk7v.jpg", 'Oreo Truffles |', '$15', oreoDescription)
createMenuItems(4, "https://res.cloudinary.com/hannahj/image/upload/v1576307862/IMG_3963_2_tmuk7v.jpg", 'Oreo Truffles |', '$15', oreoDescription)
createMenuItems(5, "https://res.cloudinary.com/hannahj/image/upload/v1576307862/IMG_3963_2_tmuk7v.jpg", 'Oreo Truffles |', '$15', oreoDescription)
createMenuItems(6, "https://res.cloudinary.com/hannahj/image/upload/v1576307862/IMG_3963_2_tmuk7v.jpg", 'Oreo Truffles |', '$15', oreoDescription)