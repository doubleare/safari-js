import Header from './components/header/index.js';
import Home from './pages/home.js'
import footer from './components/footer/footer.js'
import Clothes from './pages/clothes/clothes.js'
import Accessories from './pages/accessories/accessories.js'
import Shoes from './pages/shoes.js'

const root = document.getElementById('root');

root.innerHTML = `${Header}${Home}${Clothes}${Accessories}${Shoes}${footer}`

const navLinks = document.querySelectorAll('.nav__item');
const home = document.querySelector('.home')
const clothes = document.querySelector('.clothes')
const shoes = document.querySelector('.shoes')
const accessories = document.querySelector('.accessories')
clothes.classList.add('none')
shoes.classList.add('none')
accessories.classList.add('none')

if(window.location.href === 'http://127.0.0.1:5501/#Clothes'){
home.classList.add('none')
accessories.classList.add('none')
shoes.classList.add('none')
clothes.classList.remove('none')
}
if(window.location.href === 'http://127.0.0.1:5501/#Shoes'){
home.classList.add('none')
clothes.classList.add('none')
shoes.classList.remove('none')
accessories.classList.add('none')

}
if(window.location.href === 'http://127.0.0.1:5501/#Accessories'){
home.classList.add('none')
clothes.classList.add('none')
shoes.classList.add('none')
accessories.classList.remove('none')
}
if(window.location.href === 'http://127.0.0.1:5501/#Home'){
home.classList.remove('none')
clothes.classList.add('none')
shoes.classList.add('none')
accessories.classList.add('none')
}   

navLinks.forEach((item, index) => {
    item.addEventListener('click', () => {
     if(index === 1){
        home.classList.add('none')
        accessories.classList.add('none')
        shoes.classList.add('none')
        clothes.classList.remove('none')
     }
     if(index === 2){
        home.classList.add('none')
        clothes.classList.add('none')
        shoes.classList.remove('none')
        accessories.classList.add('none')
        
     }
     if(index === 3){
        home.classList.add('none')
        clothes.classList.add('none')
        shoes.classList.add('none')
        accessories.classList.remove('none')
     }
     if(index === 0){
        home.classList.remove('none')
        clothes.classList.add('none')
        shoes.classList.add('none')
        accessories.classList.add('none')
     }        
    })
});

