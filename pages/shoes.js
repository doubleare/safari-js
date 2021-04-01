const Shoes = () => {
    const shoesSec = document.createElement('section');

    shoesSec.className = 'shoes'

    shoesSec.innerHTML = `<div class="container"><span>ya shoes</span></div>`

    return shoesSec.outerHTML
}

export default Shoes()