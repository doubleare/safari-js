import Navbar from './nav.js';
import logo from './logo.js';
import widgets from './widgets.js';

const Header = () => {
  const header = document.createElement('header');
  const headerContainer = document.createElement('div')

  header.className = 'header'
  headerContainer.className = 'header__container'

  headerContainer.append(Navbar,logo,widgets)
  header.append(headerContainer);

  return header.outerHTML;
};

export default Header();
