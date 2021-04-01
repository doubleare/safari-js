import { backend, url } from '../../functions/databse.js'
import { create} from '../../functions/creater.js'
import {Dots} from '../../functions/dots.js'
import {pagePro} from '../../functions/pageProduct.js'

const Goods = () => {
    const row = document.createElement('div')
    const wrap = document.createElement('div')

    row.className = 'row goods__row'
    wrap.className = 'row__wrap'

    backend(url)
    .then(data => {
        const clothes = data.filter(elem => elem.type == 'CLOTHES')
        let namOfPage = 6
        let list = document.createElement('ul')
        let items = [];
        list.className = 'section__list'
        
        Dots(clothes,namOfPage,list,items)

        const rowWrap = document.querySelector('.row__wrap')
        let active;
        rowWrap.append(list)

        creatPage(items[0])
        function creatPage(el){
            if(active) {
                active.classList.remove('active')
            }
            active = el;
            el.classList.add('active')

            let pageNum = +el.innerHTML
            let goods = pagePro(data,pageNum,namOfPage)
            const clothesRow = document.querySelector('.goods__row')
            clothesRow.innerHTML = ''
            create(clothesRow,goods,'goods__col')
        }
        items.forEach(el => {
            el.addEventListener('click', function(){
                creatPage(el)
                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                  });
            })    
        })
    }) 
    wrap.append(row)
    
    return wrap.outerHTML
}

export default Goods()