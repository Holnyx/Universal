

const boxes = document.querySelectorAll ('.posts__column')
const checkBoxes = () => {
    const trigger = window.innerHeight / 5 * 3
    // console.log(trigger)
    for (const posts__column of boxes) {
        const topOfBox = posts__column.getBoundingClientRect().top
        if (topOfBox < trigger) {
            posts__column.classList.add('show')
        }
    }
}

checkBoxes()
window.addEventListener('scroll', checkBoxes)

export function test0 (n){
    return n+1
}