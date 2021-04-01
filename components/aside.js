const aside = () => {
    const asideWrap = document.createElement('div')

    asideWrap.className = 'aside'

    asideWrap.innerHTML = `
        <aside class="section__aside">
            <h3 class="aside__title">CATEGORY</h3>
            <ul class="aside__category">
                <li class="category__item active">All</li>
                <li class="category__item">Dresses</li>
                <li class="category__item">Denim</li>
                <li class="category__item">Jeans</li>
                <li class="category__item">Jumpsuits</li>
                <li class="category__item">Tops</li>
                <li class="category__item">Jackets and coats</li>
                <li class="category__item">Pants</li>
                <li class="category__item">Shorts</li>
                <li class="category__item">Skirts</li>
                <li class="category__item">Loungerie & underwear</li>
                <li class="category__item">Leather</li>
                <li class="category__item">Sweaters & knits</li>
            </ul>
        </aside>
        <aside class="section__aside">
            <div class="aside__top">
            <h3 class="aside__subtitle">SIZE</h3>
            <span class="size__clear">clear x</span>
            </div>
            <ul class="aside__size">
                <button class="size__btn">XXS</button>
                <button class="size__btn">XS</button>
                <button class="size__btn">S</button>
                <button class="size__btn">M</button>
                <button class="size__btn">L</button>
                <button class="size__btn">XL</button>
                <button class="size__btn">23</button>
                <button class="size__btn">24</button>
                <button class="size__btn">25</button>
                <button class="size__btn">26</button>
                <button class="size__btn">27</button>
                <button class="size__btn">28</button>
                <button class="size__btn">29</button>
                <button class="size__btn">30</button>
                <button class="size__btn">31</button>
                <button class="size__btn">32</button>
            </ul>
        </aside>
        <aside class="section__aside">
            <div class="aside__top">
                <h3 class="aside__subtitle">COLOR</h3>
                <span class="color__clear">clear x</span>
            </div>
            <ul class="aside__color">
                <li class="color__item Beige"><span class="color__name">Beige</span></li>
                <li class="color__item Blue"><span class="color__name">Blue</span></li>
                <li class="color__item Black"><span class="color__name">Black</span></li>
                <li class="color__item Orange"><span class="color__name">Orange</span></li>
                <li class="color__item Green"><span class="color__name">Green</span></li>
                <li class="color__item Brown"><span class="color__name">Brown</span></li>
                <li class="color__item Purple"><span class="color__name">Purple</span></li>
                <li class="color__item Gold"><span class="color__name">Gold</span></li>
                <li class="color__item Taupe"><span class="color__name">Taupe</span></li>
                <li class="color__item White"><span class="color__name">White</span></li>
                <li class="color__item Pink"><span class="color__name">Pink</span></li>
                <li class="color__item Red"><span class="color__name">Red</span></li>
            </ul>
        </aside>
        <aside class="section__aside">
            <div class="aside__top">
                <h3 class="aside__subtitle">PRICE</h3>
                <span class="price__clear">clear x</span>
            </div>
            <ul class="aside__price">
                <li class="price__item">
                    <input type="checkbox" class="price__check" id="check-1">
                    <label class="price__label" for="check-1">₦0 - ₦10,000</label>
                </li>
                <li class="price__item">
                    <input type="checkbox" class="price__check" id="check-2">
                    <label class="price__label" for="check-2">₦10,000 - ₦20,000</label>
                </li>
                <li class="price__item">
                    <input type="checkbox" class="price__check" id="check-3">
                    <label class="price__label" for="check-3">₦20,000 - ₦50,000</label>
                </li>
                <li class="price__item">
                    <input type="checkbox" class="price__check" id="check-4">
                    <label class="price__label" for="check-4">₦50,000 - ₦100,000</label>
                </li>
                <li class="price__item">
                    <input type="checkbox" class="price__check" id="check-5">
                    <label class="price__label" for="check-5">₦100,000 - ₦200,000</label>
                </li>
            </ul>
        </aside>`
    return asideWrap.outerHTML
}

export default aside()