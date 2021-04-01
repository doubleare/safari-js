const Navbar = () => {
  const nav = document.createElement('nav');
  const navList = document.createElement('ul');

  nav.className = 'nav';
  navList.className = 'nav__list';

  const navData = ['Home', 'Clothes', 'Shoes', 'Accessories'];

  navData.forEach((element) => {
      const li = document.createElement('li')
      const a = document.createElement('a')

      li.className = 'nav__item'
      a.className = 'nav__link'

      a.append(element)
      a.href = `#${element}`
      
      li.append(a)
      navList.append(li)

      return navList;
  })
  
   nav.append(navList);

   return nav
}

export default Navbar();