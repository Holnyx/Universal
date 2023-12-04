import './testBlockTwo.sass'
import { useEffect, useState } from 'react'



function TestBlockTwo(
    { title, text, data, classGrid }
) {
    // const [isTest, setTest] = useState(0)
    // const boxes = document.getElementById('test123')
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    // console.log(window.innerHeight)
    return (
        <div className={(`posts__posts  border-radius ${classGrid} ${scroll  > 440 ? ' _visible' : ''}`)}>
            <h1>{title}</h1>
            <span>{text}</span>
            <p>{data}</p>
        </div>
    )
}

export default TestBlockTwo;