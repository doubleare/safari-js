import { backend, url } from '../../functions/databse.js'
import { create} from '../../functions/creater.js'
import {Dots} from '../../functions/dots.js'
import {pagePro} from '../../functions/pageProduct.js'

const Products = () => {
    const row = document.createElement('div')
    row.className = 'row shop__row'

    backend(url)
    .then(data => {
        const shopRow = document.querySelector('.shop__row')
        let list = document.createElement('ul')
        let namOfPage = 12
        let items = [];
        let active;

        list.className = 'product__list'
        
        Dots(data,namOfPage,list,items)

        creatPage(items[0])
        function creatPage(el){
            if(active) {
                active.classList.remove('active')
            }
            active = el;
            el.classList.add('active')
            
            let pageNum = +el.innerHTML
            let goods = pagePro(data,pageNum,namOfPage)

            shopRow.innerHTML = ''
            create(shopRow,goods,'col-3')
            shopRow.append(list)
        }
        shopRow.append(list)

        items.forEach(el => {
            el.addEventListener('click', function(){
                creatPage(el)
                window.scroll({
                    top: 800,
                    behavior: 'smooth'
                  });
            })    
        })
    }) 
    return row.outerHTML
}

export default Products()