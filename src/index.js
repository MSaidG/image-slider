import './style.css'
import pic_1 from './img-1.jpeg'
import pic_2 from './img-2.jpeg'
import pic_3 from './img-3.jpeg'
import pic_4 from './img-4.jpeg'

let slideIndex = 1;


const element = document.createElement('p')
element.textContent = "Hello, World!"
document.body.append(element)


function createImageSlider() {
    const imageSlideContainer = document.createElement('div')
    imageSlideContainer.classList.add('slide-container')

    const slideContainer_1 = document.createElement('div')
    const img_1 = document.createElement('img')
    img_1.src = pic_1

    slideContainer_1.append(img_1)
    slideContainer_1.classList.add('slide')

    const slideContainer_2 = document.createElement('div')
    const img_2 = document.createElement('img')
    img_2.src = pic_2
    
    slideContainer_2.append(img_2)
    slideContainer_2.classList.add('slide')

    const slideContainer_3 = document.createElement('div')
    const img_3 = document.createElement('img')
    img_3.src = pic_3
    
    slideContainer_3.append(img_3)
    slideContainer_3.classList.add('slide')

    const slideContainer_4 = document.createElement('div')
    const img_4 = document.createElement('img')
    img_4.src = pic_4
    
    slideContainer_4.append(img_4)
    slideContainer_4.classList.add('slide')

    const prevBtn = document.createElement('button')
    prevBtn.textContent = "Previous"
    prevBtn.addEventListener('click', function() {
          
          plusSlides(-1)
     });

    const nextBtn = document.createElement('button')
    nextBtn.textContent = "Next"
    nextBtn.addEventListener('click', function() {
          
          plusSlides(1)
     });

    imageSlideContainer.append(slideContainer_1, 
            slideContainer_2, slideContainer_3, slideContainer_4,
            prevBtn, nextBtn)

    const imageDots = document.createElement('div')

    const dot_1 = document.createElement('span')
    dot_1.addEventListener('click', function() {
     
          currentSlide(1)
     });
    dot_1.classList.add('dot')
    
    const dot_2 = document.createElement('span')
    dot_2.addEventListener('click', function() {
     
          currentSlide(2)
     });
    dot_2.classList.add('dot')
    
    const dot_3 = document.createElement('span')
    dot_3.addEventListener('click', function() {
     
          currentSlide(3)
     });
    dot_3.classList.add('dot')
    
    const dot_4 = document.createElement('span')
    dot_4.addEventListener('click', function() {
     
          currentSlide(4)
     });
    dot_4.classList.add('dot')
    
    imageDots.append(dot_1, dot_2, dot_3, dot_4)

    document.body.append(imageSlideContainer, imageDots)
}

createImageSlider();



showSlides(slideIndex);

function plusSlides(n) {
     showSlides(slideIndex += n);
     console.log("Pressed prev or next")
}

function currentSlide(n) {
     showSlides(slideIndex = n);
     console.log("Pressed dot")
}

function showSlides(n) {

     let i;
     //let slides = document.getElementsByClassName("slide");
     //let dots = document.getElementsByClassName("dot");
     let slides = document.querySelectorAll(".slide");
     let dots = document.querySelectorAll(".dot");

     if (n > slides.length) {
          slideIndex = 1
     }
     if (n < 1) {
          slideIndex = slides.length
     }
     for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
     }
          
     console.log(slides.length)

     if (slides.length > 0) {
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
     }
  
} 

