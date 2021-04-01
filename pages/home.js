import Hero from '../components/hero/hero.js'
import Shop from '../components/shop/shop.js'

const Home = () => {
    const Home = document.createElement('main')
    Home.className = 'home'
    Home.innerHTML = `${Hero}${Shop}`
    
    return Home.outerHTML
}
export default Home();