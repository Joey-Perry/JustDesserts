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

const cakeBallDescription = 'Popular with kids and adults alike! Everyone enjoys these sweet treats that are soft on the inside and candy coated on the outside. Perfect for any occassion!';
const goodnessDesc = 'A creamy mix of whipped cream, peanut butter and crushed oreos. If you want to be the hit of your next party, bring this delicious and unique dish!';
const chocolatePieDesc = 'Looking for a chilled dessert that will scratch that chocolate itch? This chocolate pie is simple and yet a complex mix of quality flavors and exquisite presentation.';
const cheesecakeBrowniesDesc = "An up and coming item that is sure to become a classic! An amazing mix of cream cheese and brownies, this is something you'll order two of after you've tried it!";
const mintChocDesc = 'A frozen paradise of chocolate and mint! With the consistency of ice-cream cake, this dessert layered with chocolate puddding, cream cheese, cool whip is definitely what you need to cool down on a hot summer day!';
const chocolateChipDesc = "The classic of all classics! Two dozen of these will change your life for the better! If you're a fan of chocolate but you're not sure what to get, this is a great starting point.";
const peanutButterDesc = "Got friends coming in town and want to treat them to something special? Look no further than these peanut butter cookies. Buttery, soft and with that addictive peanut butter taste these are the cookies you've been waiting for!";
const snickerdoodleDesc = "A dash of cinnamon with a soft and chewy center, these will be the highlight of your next get together with your friends. They will definitely want to know where you got them and you'll be an instant favorite!";
const tripleChocCakeDesc = "If you haven't noticed, we love our chocolate around here! So much so that we added three different kinds to this cake!";
const fluffySugarCookieDesc = "";
const frostedSugarCookieDesc = "";

createMenuItems(0, "https://res.cloudinary.com/hannahj/image/upload/v1576307862/IMG_3963_2_tmuk7v.jpg", 'Oreo Truffles |', '$15', oreoDescription);
createMenuItems(1, "https://res.cloudinary.com/hannahj/image/upload/v1591142585/babyshowercakeballs_hwcgat.jpg", 'Cake Balls |', '$15', cakeBallDescription);
createMenuItems(2, "https://res.cloudinary.com/hannahj/image/upload/v1576306736/IMG_3600_3_hrpdnx.jpg", 'The Goodness |', '$20', goodnessDesc);
createMenuItems(3, "https://res.cloudinary.com/hannahj/image/upload/v1576306990/IMG_3832_t5ndnk.jpg", 'Chocolate Pie |', '$15', chocolatePieDesc);
createMenuItems(4, "https://res.cloudinary.com/hannahj/image/upload/v1576307549/IMG_3790_avonru.jpg", 'Cheesecake Brownies |', '$25', cheesecakeBrowniesDesc);
createMenuItems(5, "https://res.cloudinary.com/hannahj/image/upload/v1591143453/mintchocolatelasagna_fcvwdc.jpg", 'Mint Chocolate Lasagna |', '$25', mintChocDesc);
createMenuItems(6, "https://res.cloudinary.com/hannahj/image/upload/v1576307224/image000000_zaccck.jpg", 'Chocolate Chip Cookies |', '$10', chocolateChipDesc);
createMenuItems(7, "https://res.cloudinary.com/hannahj/image/upload/v1591144619/IMG_3666_b2atwq.jpg", 'PeanutButter Cookies |', '$15', peanutButterDesc);
createMenuItems(8, "https://res.cloudinary.com/hannahj/image/upload/v1576306701/IMG_3781_ypkpog.jpg", 'Snickerdoodle Cookies |', '$10', snickerdoodleDesc);
createMenuItems(9, "https://res.cloudinary.com/hannahj/image/upload/v1591143455/3xchocolatecake_jrq7z9.jpg", 'Triple Chocolate Cake |', '$26', tripleChocCakeDesc);
createMenuItems(10, "https://res.cloudinary.com/hannahj/image/upload/v1591143455/fluffysugarcookies_mltvvf.jpg", 'Fluffy Sugar Cookies |', '$18', fluffySugarCookieDesc);
createMenuItems(11, "https://res.cloudinary.com/hannahj/image/upload/v1591144398/frostedsugarcookies_xzl7ti.jpg", 'Frosted Sugar Cookies |', '$18', frostedSugarCookieDesc);