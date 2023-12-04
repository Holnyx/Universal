import './body.sass'
import first from './img/img-1.png'
import second from './img/img-2.png'
import third from './img/img-3.png'
import fourth from './img/img-4.png'
import person from './img/img-person1.png'
import arrow from './img/Arrow.svg'
import person1 from './img/img-person2.png'
import comments from './img/Comment.png'
import person3 from './img/image-person3.png'
import person4 from './img/image-person4.png'
import person5 from './img/image-person5.png'
import image1 from './img/image-1.png'
import image2 from './img/image-2.png'
import image3 from './img/Image-3.png'
import image4 from './img/Image-4.png'
import image5 from './img/Image-5.png'
import image6 from './img/Image-6.png'
import image7 from './img/Image-7.png'
import image11 from './img/image-11.png'
import image22 from './img/image-22.png'
import image33 from './img/image-33.png'
import image44 from './img/image-44.png'
import image55 from './img/image-55.png'
import image66 from './img/image-66.png'
import bookmark from './img/Bookmark.svg'
import person6 from './img/image-person6.svg'
import photos from './img/img-photo.svg'
import personimg from './img/person-careers.png'
import { NavLink } from 'react-router-dom'
import TestBlock from '../testBlock/testBlock'
import { useEffect, useState } from 'react'
import { ReactComponent as Heart } from './img/Heart.svg'
import TestBlockTwo from '../testBlock/testBlockTwo'

const testBlockTwoData = [{
    title: 'Is Coffee Bad for Bones?',
    text: 'Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones',
    data: 'Oct 15',
    class: 'bones',

},
{
    title: 'What We Manufacture',
    text: 'A global history of the factory and the modern world that all should read',
    data: "Oct 14",
    class: 'manufacture'
}
]

const testBlockData = [{
    title: 'Is Coffee Bad for Bones?',
    text: 'Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones',
    data: 'Oct 15',
    class: 'bone'
},
{
    title: 'What We Manufacture',
    text: 'A global history of the factory and the modern world that all should read',
    data: "Oct 14",
    class: 'manufactur'
}
]

function Body() {
    const [isTest, setTest] = useState(0)
    // const boxes = document.getElementById('test123')
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    console.log(window.scrollY)
    return (
        <div onClick={() => setTest(true)} className="body">
            <div className="body__background">
                <div className="background__news-block container">
                    <div className="news-block__news">
                        <div className="news">
                            <p>25 Songs That Tell Us Where Music Is Going</p>
                            <img src={first} alt="" />
                        </div>
                        <div className="news">
                            <p>These Ancient Assassins Eat Their Own Kind</p>
                            <img src={second} alt="" />
                        </div>
                        <div className="news">
                            <p>How Do You Teach People to Love Difficult Music?</p>
                            <img src={third} alt="" />
                        </div>
                        <div className="news">
                            <p>International Soccer’s Man of Mystery</p>
                            <img src={fourth} alt="" />
                        </div>
                    </div>
                </div>
                {/* --------------------------- */}
                <div className="background__recommendation container">
                    <div className="recommendation__title">
                        <div className="recommendation__person">
                            <div className="person__person">
                                <img src={person} alt="" />
                                <span className='text'>By Benjamin Turner
                                    <span className='opacity' >Traveler</span>
                                </span>
                            </div>
                        </div>
                        <div className="recommendation__info">
                            <div className="info__text">
                                <span>Destinations</span>
                                <h1>In Southeast England, White Cliffs and Fish</h1>
                                <div className="text__buttons">
                                    <NavLink to='/test' className="text__button button">
                                        Read more <img src={arrow} alt="" />
                                    </NavLink>
                                    <div className="text__play">
                                        <button >►</button>
                                        <span className='text' >The chalk cliff of Beachy Head
                                            <span className='opacity' >18:05</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recommendation__container-menu">
                        <div className="container-menu__menu ">
                            <div className="menu">
                                <span>Recommended for you</span>
                            </div>
                            <div className="menu">
                                <h1 className='food'>Food</h1>
                                <span>For Chicken-Fried Steak, Too Much Is Just Enough</span>
                            </div>
                            <div className="menu">
                                <h1 className='cars'>Cars</h1>
                                <span>Storm Has Car Dealers Doing Swift Business</span>
                            </div>
                            <div className="menu">
                                <h1 className='movies'>Movies</h1>
                                <span>War Is Hell? In New Military Dramas, It’s One-Dimensional</span>
                            </div>
                            <div className="menu">
                                <h1 className='nfl'>NFL</h1>
                                <span>11 surprising stat rankings for active NFL players</span>
                            </div>
                            <div className="menu">
                                <h1 className='tech'>Tech Reviews</h1>
                                <span>The bookcases you can buy online and assemble yourself</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------------------------------------- */}
                <div className="background-grey__posts container">
                    <div className={`posts__cars border-radius  ${scroll > 440 ? ' _visible' : ''}`}>
                        <div className="top menu">
                            <div className="top-content">
                                <h1>Cars</h1>
                                <h2>The joy of replicas: <br /> A $ 5 million car for $ 50,000</h2>
                                <span>The 31-year-old self-taught engineer and former amateur racer spends his days building artful recreations of one of most iconic sports cars</span>
                            </div>
                        </div>
                        <div className="bottom">
                            <img src={person1} alt="" />
                            <p>Jessica Miller:</p>
                            <p>Even as the ride-hailing service’s future remem…</p>
                            <img src={comments} alt="" />
                            <p>342</p>
                        </div>
                    </div>
                    <div className={`posts__popular border-radius  ${scroll > 440 ? ' _visible' : ''}`}>
                        <div className="popular">Popular</div>
                        <h1>Art & Design</h1>
                        <h2>Invisible ink: the <br /> weird world of <br /> tattoo removal – in pictures</h2>
                        <div className="bottom">
                            <img src={person1} alt="" />
                            <div className="text">
                                <p>By Sarah Jenkins</p>
                                <p>Sept 26 <img src={comments} alt="" /> 16 <Heart className='heart' />  832</p>
                            </div>
                        </div>
                    </div>

                    <div id='test123' className={`posts__column border-radius ${scroll > 440 ? ' _visible' : ''}`}>
                        <div className="column-menu">Columns</div>
                        <div className="column-menu">
                            <div className="column-socket">
                                <p>Architecture is the thoughtful making of space</p>
                                <div className="person">
                                    <img src={person3} alt="" />
                                    <div className="text-person">
                                        <span>David Williams</span>
                                        <span>Architect</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column-menu">
                            <div className="column-socket">
                                <p>The details are not the details. They make the design.</p>
                                <div className="person">
                                    <img src={person4} alt="" />
                                    <div className="text-person">
                                        <span>Alexandra Green</span>
                                        <span>Interior designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column-menu">
                            <div className="column-socket">
                                <p> Live life to the fullest, and focus on the positive</p>
                                <div className="person">
                                    <img src={person5} alt="" />
                                    <div className="text-person">
                                        <span>Olivia Thompson</span>
                                        <span>Coacher</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column-menu">Read more</div>
                    </div>
                    <div className={`posts__cat border-radius  ${scroll > 440 ? ' _visible' : ''}`}>
                        <div>200+ Doomed Cats Saved From Euthanization</div>
                    </div>
                    {testBlockTwoData.map((el, i) => {
                        return <TestBlockTwo key={i} data={el.data} text={el.text} title={el.title} classGrid={el.class} />
                    })}
                    {/* <div className="posts__posts bones border-radius">
                        <h1>Is Coffee Bad for Bones?</h1>
                        <span>Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones</span>
                        <p>Oct 15</p>
                    </div>
                    <div className="posts__posts manufacture border-radius">
                        <h1>What We Manufacture</h1>
                        <span>A global history of the factory and the modern world that all should read</span>
                        <p>Oct 14</p>
                    </div> */}
                    <div className={`posts__posts world border-radius ${scroll > 500 ? ' _visible' : ''}`}>
                        <h1>It’s a Stressful World</h1>
                        <span>Can a cruise skeptic enjoy four days on the seas with his family and a bunch of princesses?</span>
                        <p>Oct 14</p>
                    </div>
                    <div className={`posts__posts lovers border-radius ${scroll > 500 ? ' _visible' : ''}`}>
                        <h1>A Treat for Lemon Lovers</h1>
                        <span>This tangerine, ginger and chocolate tart has verve, depth and a hint of spice</span>
                        <p>Oct 13</p>
                    </div>
                </div>
            </div>
            {/* ---------------------------------- */}
            <div className="body__plants">
                <div className={`plants container ${scroll > 900 ? ' _visible' : ''}`}>
                    <p>The Big Bloom or «How Flowering <br />
                        Plants Changed the World»</p>
                    <NavLink to='/test' className={`text__button button`}>
                        Read more <img src={arrow} alt="" />
                    </NavLink>
                </div>
            </div>
            {/* -------------------------------------- */}
            <div className="body__background-grey2">
                <div className="background-grey2__info  container">
                    <div className={`info__news border-radius menu ${scroll > 1520 ? ' _visible' : ''}`}>
                        <div className="news-socket">
                            <div className="content-news">
                                <img src={image11} alt="" />
                                <div className="news-text">
                                    <h1 className='blue'>Flights</h1>
                                    <h2>Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines</h2>
                                    <span>Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</span>
                                    <p className="news-text__date">
                                        Aug 6 <img src={comments} alt="" /> 342 <Heart className='heart' />  830
                                    </p>
                                </div>
                                <div className="bookmark">
                                    <input type="checkbox" />
                                    {/* <img src={bookmark} alt="" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="news-socket">
                            <div className="content-news">
                                <img src={image22} alt="" />
                                <div className="news-text">
                                    <h1 className='bluegreen'>Food</h1>
                                    <h2>Three Courses, 20 Euros: The Affordable <br /> Dining Renaissance in Paris</h2>
                                    <span>The Los Angeles area, for all of its culinary diversity, has not historically been thought of as a haven for bread lovers. The area has a reputation as a place where gluten fears to tread.</span>
                                    <p className="news-text__date">
                                        Oct 7  <img src={comments} alt="" /> 27  <Heart className='heart' /> 129
                                    </p>
                                </div>
                                <div className="bookmark">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="news-socket">
                            <div className="content-news">
                                <img src={image33} alt="" />
                                <div className="news-text">
                                    <h1 className='red'>Science</h1>
                                    <h2>Watch the High-Flying Physics of a Plant’s Exploding Fruits</h2>
                                    <span>Three undergradute physics majors and their professor worked out how the hairyflower wild petunia shoots tiny seeds more than 20 feet through the air</span>
                                    <p className="news-text__date">
                                        Oct 11  <img src={comments} alt="" /> 30  <Heart className='heart' />284
                                    </p>
                                </div>
                                <div className="bookmark">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="news-socket">
                            <div className="content-news">
                                <img src={image44} alt="" />
                                <div className="news-text">
                                    <h1 className='green'>Health</h1>
                                    <h2>How the Shape of Your Ears Affects What You Hear</h2>
                                    <span>We’re able to locate sound because our brains grasp the shape of our ears. When that shape changes, we need time and practice to adapt. Ears are a peculiarly individual piece of anatomy.</span>
                                    <p className="news-text__date">
                                        Oct 19  <img src={comments} alt="" /> 102  <Heart className='heart' /> 1,293
                                    </p>
                                </div>
                                <div className="bookmark">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="news-socket">
                            <div className="content-news">
                                <img src={image55} alt="" />
                                <div className="news-text">
                                    <h1 className='red'>Science</h1>
                                    <h2>Forests Protect the Climate. A Future With More Storms Would Mean Trouble.</h2>
                                    <span>With an increase in extreme weather expected in the years to come, forests could be changed permanently as the world continues to warm</span>
                                    <p className="news-text__date">
                                        Oct 22  <img src={comments} alt="" /> 5  <Heart className='heart' />82
                                    </p>
                                </div>
                                <div className="bookmark">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="news-socket">
                            <div className="content-news">
                                <img src={image66} alt="" />
                                <div className="news-text">
                                    <h1 className='purple'>Art & Design</h1>
                                    <h2>New Contemporary Institute Reverberates in Richmond’s Historic Landscape</h2>
                                    <span>The center, which will open in April, takes a bold look at race and other social issues that still resonate in the region as well as the nation. A new Institute for Contemporary Art is set to open.</span>
                                    <p className="news-text__date">
                                        Oct 26 <img src={comments} alt="" /> 101  <Heart className='heart' /> 432
                                    </p>
                                </div>
                                <div className="bookmark">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`info__column border-radius ${scroll > 1511 ? ' _visible' : ''}`}>
                        <div className="column-news">
                            Recommended for you
                        </div>
                        <div className="column-news ">
                            <div className="column-socket">
                                <img src={image1} alt="" />
                                <div className="text-news">
                                    <span>Office Meetings Leave the Office</span>
                                    <span className="time">15 minuts ago</span>
                                </div>
                                <div className="background">
                                    1
                                </div>
                            </div>
                        </div>
                        <div className="column-news ">
                            <div className="column-socket">
                                <img src={image2} alt="" />
                                <div className="text-news">
                                    <span>Experimental Vocal Music in Brooklyn</span>
                                    <span className="time">32 minuts ago</span>
                                </div>
                                <div className="background">
                                    2
                                </div>
                            </div>
                        </div>
                        <div className="column-news ">
                            <div className="column-socket">
                                <img src={image3} alt="" />
                                <div className="text-news">
                                    <span>Google’s Influence Over Think Tanks</span>
                                    <span className="time">38 minuts ago</span>
                                </div>
                                <div className="background">
                                    3
                                </div>
                            </div>
                        </div>
                        <div className="column-news ">
                            <div className="column-socket">
                                <img src={image4} alt="" />
                                <div className="text-news">
                                    <span>Homes for Sale in NYC and Connecticut</span>
                                    <span className="time">53 minuts ago</span>
                                </div>
                                <div className="background">
                                    4
                                </div>
                            </div>
                        </div>
                        <div className="column-news ">
                            <div className="column-socket">
                                <img src={image5} alt="" />
                                <div className="text-news">
                                    <span>Are You There, Dad? It’s Me, Alice</span>
                                    <span className="time">1 hour ago</span>
                                </div>
                                <div className="background">
                                    5
                                </div>
                            </div>
                        </div>
                        <div className="column-news ">
                            <div className="column-socket">
                                <img src={image6} alt="" />
                                <div className="text-news">
                                    <span>The New Punk Look: Lacy and Colorful</span>
                                    <span className="time ">1 hour ago</span>
                                </div>
                                <div className="background">
                                    6
                                </div>
                            </div>
                        </div>
                        <div className="column-news ">
                            <div className="column-socket">
                                <img src={image7} alt="" />
                                <div className="text-news">
                                    <span>Sunday Best in Harlem and Brooklyn</span>
                                    <span className="time">2 hour ago</span>
                                </div>
                                <div className="background">
                                    7
                                </div>
                            </div>
                        </div>
                        <div className="column-news">
                            Read more
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------- */}
            <div className="body__background-blue">
                <div className="background-blue container">
                    <div className={`hot border-radius ${scroll > 3100 ? ' _visible' : ''}`}>
                        <div className="hot-button">Hot</div>
                        <div className="person">
                            <img src={person6} alt="" />
                            <span>By Sarah Jenkins</span>
                            <span>Photographer</span>
                        </div>
                        <div className="text-hot">
                            <h1>Readers' Choice <br /> winners: Your wine country favorites</h1>
                            <a href="#" className="button-photos">
                                <img src={photos} alt="" />
                                <div>
                                    Watch photos <span>26</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={`careers border-radius ${scroll > 3100 ? ' _visible' : ''}`}>
                        <div className="info-careers">
                            <h1>Careers</h1>
                            <h1>Had a Job Interview but No Callback? Here’s What to Do</h1>
                            <span>Try to understand the culture of the company where you want to work and be authentic in your interview, experts emphasize</span>

                        </div>
                        <NavLink to='/test' className="text__button button">
                            Read more <img src={arrow} alt="" />
                        </NavLink>
                        <div className="photo-circle">
                            <img src={personimg} alt="" />
                            <div className="circle"></div>

                        </div>
                    </div>
                    {testBlockData.map((el, i) => {
                        return <TestBlock key={i} data={el.data} text={el.text} title={el.title} classGrid={el.class} />
                    })}
                </div>
            </div>
            {/* --------------------------------------- */}
            <div className="body__subscribe">
                <p>Subscribe now and get 20% off</p>
                <div className="subscribe__button text">
                    <input type="email" placeholder='Enter your email' />
                    <a className='button' href="#">Subscribe</a>
                </div>
            </div>
        </div>
    );
}
export default Body;