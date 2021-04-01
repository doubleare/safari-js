import logo from '../header/logo.js'

const footer = () => {
    const footer = document.createElement('footer')
    const footerWrap = document.createElement('div')
    const footerList1 = document.createElement('ul')
    const footerList2 = document.createElement('ul')
    const footerList3 = document.createElement('ul')
    const inputWrap = document.createElement('div')
    const footerInput = document.createElement('input')
    const footerBtn = document.createElement('button')
    const footerText = document.createElement('p')

    let list1 = ['About us','Contact','Terms & Conditions',]
    let list2 = ['497 Evergreen Rd. Roseville, CA 95673','+44 345 678 903','adobexd@mail.com']
    let list = [{
        img:'../../images/facebook.svg',
        text:'Facebook'
    },{
        img:'../../images/twit.svg',
        text:'Twitter'
    },{
        img:'../../images/insta.svg',
        text:'Instagram'
    }]

    footer.className = 'footer'
    footerWrap.className = 'row'
    footerWrap.classList.add('footer__row')
    footerList1.className = 'footer__list1'
    footerList2.className = 'footer__list2'
    footerList3.className = 'footer__list3'
    
    inputWrap.className = 'footer__sub'
    footerInput.className = 'footer__input'
    footerBtn.className = 'footer__btn'
    footerText.className = 'footer__sub--text'

    footerText.innerText = 'Subscribe to our newsletter'
    footerInput.placeholder = 'Email Address'
    footerBtn.innerText = 'OK'
    footerBtn.type = 'submit'

    for(let i = 0;i < list.length; i++){
        const footerItem = document.createElement('li')
        const footerImg = document.createElement('img')
        const footerLink = document.createElement('a')
        const footerIcon = document.createElement('a')

        footerItem.className = 'footer__icon'
        footerLink.className = 'footer__link'
        footerImg.className = 'footer__img'
        footerLink.href = '#'
        footerIcon.href = '#'

        footerLink.innerText = `${list[i].text}`
        footerImg.src = `${list[i].img}`

        footerIcon.append(footerImg)
        footerItem.append(footerIcon,footerLink)
        footerList3.append(footerItem)
    }
    list1.forEach((elem) => {
        const footerItem = document.createElement('li')
        const footerLink = document.createElement('a')

        footerItem.className = 'footer__item'
        footerLink.className = 'footer__link'
        footerLink.href = '#'

        footerLink.innerText = `${elem}`
        footerItem.append(footerLink)
        footerList1.append(footerItem)
    })
    list2.forEach((elem) => {
        const footerItem = document.createElement('li')
        const footerLink = document.createElement('a')

        footerItem.className = 'footer__item'
        footerLink.className = 'footer__link'

        footerLink.href = '#'

        footerLink.innerText = `${elem}`
        footerItem.append(footerLink)
        footerList2.append(footerItem)
    })

    inputWrap.append(footerText,footerInput,footerBtn)
    footerWrap.append(logo,footerList1,footerList3,inputWrap,footerList2)

    footer.innerHTML = `<div class="container">${footerWrap.outerHTML}</div>`

    return footer.outerHTML
}

export default footer()