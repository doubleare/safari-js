import Acces from './access.js'
import aside from '../../components/aside.js'
import {topBtn} from '../../components/topbtn.js'

const Accessories = () => {
    const accessoriesSec = document.createElement('section');
    
    accessoriesSec.className = 'goods accessories'
    topBtn.classList.add('goods__top')
    topBtn.classList.remove('shop__top')

    accessoriesSec.innerHTML = ` 
    <div class="container">
        <h1 class="goods__title">ACCESSORIES</h1>
            <div class="section__content">
                ${aside}
                <select name="sort" id="section__select" >
                    <option id="option" value="popular">All</option>
                    <option id="option" value="popular">Most popular</option>
                    <option id="option" value="Selling">Best Selling</option>
                    <option id="option" value="High">Price: High to Low</option>
                    <option id="option" value="Low">Price: Low to High</option>
                </select>
                ${Acces}
                ${topBtn.outerHTML}
            </div>
        </div>
    </div>`

    return accessoriesSec.outerHTML
}

export default Accessories()