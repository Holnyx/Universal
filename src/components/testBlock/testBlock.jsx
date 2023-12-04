import './testBlock.sass'
import { useEffect, useState } from 'react'
// import cn from 'classnames'


function TestBlock(
    {title, text, data , classGrid}
) {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    return (
        <div className={(` posts  border-radius ${classGrid}  ${scroll  > 3180 ? ' _visible' : ''} `)}>
            <h1>{title}</h1>
            <span>{text}</span>
            <p>{data}</p>
        </div>
    )
}

export default TestBlock;