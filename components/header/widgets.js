const widgets = () => {
    const widget = document.createElement('div')
    const SearchWrap = document.createElement('div')
    const searchInput = document.createElement('input')
    const widgetList = document.createElement('ul')
    
    widget.className = 'widget'
    widgetList.className = 'widget__list'
    SearchWrap.className = 'widget__search'
    searchInput.className = 'widget__input'
    searchInput.placeholder = 'Search...'

    let widgetImgs = ['../../images/avatar.svg','../../images/basket.svg','../../images/heart.svg']

    widgetImgs.forEach((elem) => {
        const widgetItem = document.createElement('li')
        const widgetLink = document.createElement('a')
        const widgetIcon = document.createElement('img')

        widgetIcon.src = elem
        widgetLink.href = '#'
        widgetItem.className = 'widget__item'

        widgetLink.append(widgetIcon)
        widgetItem.append(widgetLink)
        widgetList.append(widgetItem)

        return widgetList
    })
    SearchWrap.append(searchInput)
    widget.append(SearchWrap,widgetList)

    return widget
}

export default widgets();