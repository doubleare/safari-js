import Products from './products.js'
import {topBtn} from '../topbtn.js'

const shop = () => {
    const shopSec = document.createElement('section')
    const shopTitle = document.createElement('h2')
    const shopDes = document.createElement('p')

    topBtn.classList.add('shop__top')
    shopSec.className = 'shop'
    shopTitle.className = 'shop__title'
    shopDes.className = 'shop__description'

    shopTitle.innerHTML = 'Shop your style'
    shopDes.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.'
    
    shopSec.innerHTML = `<div class="container">${shopTitle.outerHTML}${shopDes.outerHTML}${Products}${topBtn.outerHTML}</div>`

    return shopSec.outerHTML
}

export default shop()