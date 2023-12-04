import './footer.sass'
import logo from './img/Symbol.svg';
import facebook from './img/facebook_icon.svg'
import twitter from './img/twitter_icon.svg'
import youtube from './img/youtube_icon.svg'
import instagram from './img/instagram_icon.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="top__main1 container">
                    <ul className="main1__targets list red">
                        <p>News</p>
                        <a href="#"><li>Nation</li></a>
                        <a href="#"><li>World</li></a>
                        <a href="#">  <li>Politics</li></a>
                        <a href="#"> <li>Solar Eclipse</li></a>
                    </ul>
                    <ul className="main1__targets list purple">
                        <p>Arts</p>
                        <a href="#"> <li>Art & Design</li></a>
                        <a href="#"><li>Movies</li></a>
                        <a href="#"><li>People</li></a>
                        <a href="#"><li>Video: Arts</li></a>
                        <a href="#"><li>Theater</li></a>
                    </ul>
                    <ul className="main1__targets list blue">
                        <p>Travel</p>
                        <a href="#"> <li>Destinations</li></a>
                        <a href="#"> <li>Flights</li></a>
                        <a href="#">   <li>Business Travel</li></a>
                    </ul>
                    <ul className="main1__targets list orange">
                        <p>Sports</p>
                        <a href="#"><li>Olympics</li></a>
                        <a href="#"> <li>Motor Sports</li></a>
                        <a href="#"> <li>Volleyball</li></a>
                        <a href="#">  <li>MMA</li></a>
                        <a href="#"> <li>Cycling</li></a>
                    </ul>
                    <ul className="main1__targets list green">
                        <p>Tech</p>
                        <a href="#">     <li>Tech</li></a>
                        <a href="#">  <li>Tech Columnists</li></a>
                        <a href="#"><li>Tech Reviews</li></a>
                        <a href="#"> <li>Talking Tech</li></a>
                    </ul>
                    <ul className="main1__targets list greyblue">
                        <p>Moneys</p>
                        <a href="#"><li>Markets</li></a>
                        <a href="#"><li>Business</li></a>
                        <a href="#"><li>Personal Finance</li></a>
                        <a href="#"><li>Retirement</li></a>
                        <a href="#"><li>Careers</li></a>
                    </ul>
                </div>
            </div >
            <div className="footer__bottom">
                <div className="bottom__main container">
                    <div className="main__contacts">
                        <a href="#"> <li><img src={logo} alt="" /></li></a>
                        <a href="#"><li>Contact Us</li></a>
                        <a href="#"><li>Work with Us</li></a>
                        <a href="#"><li>Advertise</li></a>
                        <a href="#"><li>Your Ad Choise</li></a>
                    </div>
                    <div className="main__socials">
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                        <a href="#"><img src={youtube} alt="" /></a>
                        <a href="#"><img src={instagram} alt="" /></a>
                    </div>
                </div>
                <div className="bottom__info container">
                    <p>Universal’s business concept is to offer fashion and quality at the best price in a sustainable way. Universal has since it was founded in 2015 grown into one of the world's leading fashion companies. </p>
                    <p>© 2019 Universal UI Kit</p>
                </div>
            </div>
            <div className="footer__info">
            </div>
        </div >
    );
}
export default Footer;