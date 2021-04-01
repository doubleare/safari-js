const logo = () => {
    const logoWrap = document.createElement('div')
    const logoLink = document.createElement('a')
    const logoImg = document.createElement('img')

    logoImg.src = '../../images/logo.svg'
    logoLink.href = 'index.html'
    logoWrap.className = 'logo'

    logoLink.append(logoImg)
    logoWrap.append(logoLink)

    return logoWrap
}

export default logo();