
var typed = new Typed('.typer', {
    strings: ['Graphics Designer','Full Stack Web-Devloper.','java Devloper'],
    typeSpeed:100,
    backSpeed:100,
    loop:true
  });

let valueNumbers = document.querySelectorAll('.exp-number');
let interval = 2000;

valueNumbers.forEach((valuNumber)=>{
    let startValue = 0;
    let endValue = parseInt(valuNumber.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(()=>{
        startValue+=1;
        valuNumber.textContent = startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration);
})

// Read more button
document.getElementById('read-more-btn').addEventListener('click', function() {

  var dots = document.getElementById("dots");
  var moreText = document.getElementById("read-more-text");
  var btnText = document.getElementById("read-more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
  });

// image slidebar
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dot = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].className += " actives";
}