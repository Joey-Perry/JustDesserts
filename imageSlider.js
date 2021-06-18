class ImageSlider{
    constructor(){
        this.state = {
            imageArray: [ "https://res.cloudinary.com/hannahj/image/upload/v1576307224/image000000_zaccck.jpg", "https://res.cloudinary.com/hannahj/image/upload/v1591143455/3xchocolatecake_jrq7z9.jpg", "https://res.cloudinary.com/hannahj/image/upload/v1576307862/IMG_3963_2_tmuk7v.jpg"],
            activeImage: [0, "https://res.cloudinary.com/hannahj/image/upload/v1576307224/image000000_zaccck.jpg"] 
        }
    }
    render(){
        imageSection.style.backgroundImage = `url(${this.state.activeImage[1]})`;
    }

    advanceSlider(i){
        let key = i + 1;
        if (key > this.state.imageArray.length - 1){
            key = 0;
        } 
        this.state.activeImage = [key, this.state.imageArray[key]];
        this.render();
    }

    previousSlide(i){
        let key = i - 1;
        if (key < 0){
            key = this.state.imageArray.length - 1;
        }
        this.state.activeImage = [key, this.state.imageArray[key]];
        this.render();
    }
    
}

const imgSlider = new ImageSlider();
const grab = element => document.querySelector(element);

const advanceSlideBtn = grab('#advance-slide-btn');
const previousSlideBtn = grab('#previous-slide-btn');
const imageSection = grab('#image-section');

imageSection.style.backgroundImage = `url(${imgSlider.state.activeImage[1]})`;
// advanceSlideBtn.innerText = `>`;
// previousSlideBtn.innerText = '<';

// advanceSlideBtn.addEventListener('click', ()=> {
//     imgSlider.advanceSlider(imgSlider.state.activeImage[0]);
// })

// previousSlideBtn.addEventListener('click', ()=>{
//     imgSlider.previousSlide(imgSlider.state.activeImage[0]);
// })

// setInterval(()=>{
//     imgSlider.advanceSlider(imgSlider.state.activeImage[0]);
// }, 3500 );