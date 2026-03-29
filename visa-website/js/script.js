const fadeElements = document.querySelectorAll('.fade-in');

function revealFade(){
fadeElements.forEach(el=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 80){
el.classList.add('show');
}
});
}

window.addEventListener('scroll', revealFade);
window.addEventListener('load', revealFade);


/* PROCESS ANIMATION (SAFE) */
const process = document.querySelector('.process');

if(process){
const steps = process.querySelectorAll('.step');

function revealProcess(){
const trigger = process.getBoundingClientRect().top;

if(trigger < window.innerHeight - 100){
process.classList.add('active');

steps.forEach((step, i)=>{
setTimeout(()=>{
step.classList.add('show');
}, i * 200);
});
}
}

window.addEventListener('scroll', revealProcess);
window.addEventListener('load', revealProcess);
}

const nav = document.querySelector('nav');

window.addEventListener('scroll', ()=>{
if(window.scrollY > 50){
nav.classList.add('scrolled');
}else{
nav.classList.remove('scrolled');
}
});

const hero = document.querySelector('.hero');

window.addEventListener('scroll', ()=>{
let scroll = window.scrollY;

if(hero){
hero.style.backgroundPosition = `center ${scroll * 0.3}px`;
}
});

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.testimonial-slider');

let index = 0;
let interval;

/* MOVE SLIDE */
function showSlide(){
slides.forEach(slide=>{
slide.style.transform = `translateX(-${index * 100}%)`;
});
}

/* NEXT */
function nextSlide(){
index++;
showSlide();

/* RESET WITHOUT JUMP */
if(index === slides.length - 1){
setTimeout(()=>{
slides.forEach(slide=>{
slide.style.transition = 'none';
});
index = 0;
showSlide();

setTimeout(()=>{
slides.forEach(slide=>{
slide.style.transition = '0.6s ease';
});
}, 50);

}, 600);
}
}

/* START */
function startSlider(){
interval = setInterval(nextSlide, 2000);
}

/* STOP */
function stopSlider(){
clearInterval(interval);
}

/* HOVER */
if(slider){
slider.addEventListener('mouseenter', stopSlider);
slider.addEventListener('mouseleave', startSlider);
}

/* INIT */
startSlider();

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item=>{
item.addEventListener('click', ()=>{

if(item.classList.contains('active')){
item.classList.remove('active'); // CLOSE if already open
}else{
faqItems.forEach(i=>i.classList.remove('active')); // close others
item.classList.add('active'); // open clicked
}

});
});

/* LOAD NAVBAR */
fetch('navbar.html')
.then(res => res.text())
.then(data => {
document.getElementById('navbar').innerHTML = data;
});

/* LOAD FOOTER */
fetch('footer.html')
.then(res => res.text())
.then(data => {
document.getElementById('footer').innerHTML = data;
});

const links = document.querySelectorAll('nav a');
const current = window.location.pathname;

links.forEach(link=>{
if(current.includes(link.getAttribute('href'))){
link.style.color = '#FFD700';
}
});