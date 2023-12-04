import './header.sass'
import subscribe from './img/Image1.png'
import signin from './img/Man.svg'
import ny from './img/Image.png'
import sun from './img/Sun.svg'
import { useState } from 'react'


function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    return (
        <div className="header">
            <div className="header__row-first container" >
                <div className="row-first__menu">
                    <button onClick={()=>setMenuOpen(!isMenuOpen)} className="menu__icon-menu">
                        <div className={isMenuOpen?'open1':''}></div>
                        <div className={isMenuOpen?'open2':''}></div>
                        <div className={isMenuOpen?'open3':''}></div>
                    </button>
                    <div className="menu__name">
                        Sections
                    </div>
                </div>
                <div className="row-first__search">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="row-first__subscribe">
                    <img src={subscribe} alt="" />
                    <div className="subscribe__text">
                        <h1>Subscribe Now</h1>
                        <p>3 month for $19</p>
                    </div>
                </div>
                <div className="row-first__sign text">
                    <img src={signin} alt="" />
                    <p>Sign In</p>
                </div>
            </div>
            <div className="header__row-two container">
                <div className="row-two__ny text">
                    <img src={ny} alt="NY" />
                    <p>Boston and New York Bear Brunt</p>
                </div>
                <div className="row-two__logo">
                    Universal
                </div>
                <div className="row-two__date text">
                    Monday, January 1, 2018
                </div>
                <div className="row-two__temperature text">
                    <img src={sun} alt="sun" />
                    - 23 °C
                </div>
            </div>
            <div className="header__black-menu ">
                <ul className="black-menu__li container">
                    <li>News</li>
                    <li>Opinion</li>
                    <li>Science</li>
                    <li>Life</li>
                    <li>Travel</li>
                    <li>Moneys</li>
                    <li>Art & Design</li>
                    <li>Sports</li>
                    <li>People</li>
                    <li>Health</li>
                    <li>Education</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;

