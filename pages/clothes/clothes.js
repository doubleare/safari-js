import Goods from './goods.js'
import aside from '../../components/aside.js'
import {topBtn} from '../../components/topbtn.js'

const Clothes = () => {
    const clothesSec = document.createElement('section');
    
    clothesSec.className = 'goods clothes'
    topBtn.classList.add('goods__top')
    topBtn.classList.remove('shop__top')

    clothesSec.innerHTML = ` 
    <div class="container">
        <h1 class="clothes__title">CLOTHES</h1>
            <div class="section__content">
                ${aside}
                <select name="sort" id="section__select" >
                    <option id="option" value="popular">All</option>
                    <option id="option" value="popular">Most popular</option>
                    <option id="option" value="Selling">Best Selling</option>
                    <option id="option" value="High">Price: High to Low</option>
                    <option id="option" value="Low">Price: Low to High</option>
                </select>
                ${Goods}
                ${topBtn.outerHTML}
            </div>
        </div>
    </div>`

    return clothesSec.outerHTML
}

export default Clothes()