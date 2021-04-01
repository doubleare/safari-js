const navItems = document.querySelectorAll('.nav__item')

navItems.forEach((element) =>  {
    element.addEventListener('click',function(){
        navItems.forEach((el) => {
             el.classList.remove('nav__item--active')
        })
        element.classList.add('nav__item--active')
    })
})

$('.slider__wrapper').slick({
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
});

const scrollDown = document.querySelector('.hero__link')

scrollDown.addEventListener('click',function(){
    document.body.style.overflow = 'visible'
    window.scroll({
        top: 800,
        behavior: 'smooth'
      });
})

const topBtn =document.querySelectorAll('.top__btn')

topBtn.forEach(elem => {
    elem.addEventListener('click', function(){
        window.scroll({
            top: 0,
            behavior: 'smooth'
          });
    })
})



const categoryItem = document.querySelectorAll('.category__item')

categoryItem.forEach(elem => {
    elem.addEventListener('click',function(){
        categoryItem.forEach(el => {
            el.classList.remove('active')
        })
        elem.classList.add('active')
    })
})

const sizeBtn = document.querySelectorAll('.size__btn')
const sizeClear = document.querySelector('.size__clear')

sizeClear.addEventListener('click',function() {
    sizeBtn.forEach(elem => {
        elem.classList.remove('active')
    })
})

sizeBtn.forEach(elem => {
    elem.addEventListener('click',function(){
        elem.classList.toggle('active')
    })
})

const colorItem = document.querySelectorAll('.color__item')
const colorClear = document.querySelector('.color__clear')

colorClear.addEventListener('click',function() {
    colorItem.forEach(elem => {
        elem.classList.remove('active')
    })
})

colorItem.forEach(elem => {
    elem.addEventListener('click',function(){
        elem.classList.toggle('active')
    })
})

const priceItem = document.querySelectorAll('.price__check')
const priceClear = document.querySelector('.price__clear')

priceClear.addEventListener('click',function(){
    priceItem.forEach(elem => {
        elem.checked = false
    })
})