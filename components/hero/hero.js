const hero = () => {
    const heroSec = document.createElement('section')
    const sliderWrap = document.createElement('div')
    const heroLink = document.createElement('p')


    heroSec.className = 'hero'
    sliderWrap.className = 'slider__wrapper'
    heroLink.className = 'hero__link'

    const sliderImgs = ['../../images/girl.png','../../images/girl3.png','../../images/girl2.png','../../images/girl3.png']

    sliderImgs.forEach((elem) => {
        // const sliderImg = document.createElement('img')
        const sliderItem = document.createElement('img')

        sliderItem.className = 'slider__item'

        sliderItem.src = elem

        // sliderItem.append(sliderImg)
        sliderWrap.append(sliderItem)

        return sliderWrap
    })
    
    heroLink.innerText = 'Explore our collection'
    heroSec.innerHTML = `${sliderWrap.outerHTML}${heroLink.outerHTML}`

    return heroSec.outerHTML;
}

export default hero()