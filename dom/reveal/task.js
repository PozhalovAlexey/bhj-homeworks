const revealElems = document.querySelectorAll('.reveal');

const handlerScroll = () => {
    for (const el of revealElems) {
        const top = el.getBoundingClientRect().top
        const bottom = el.getBoundingClientRect().bottom
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible) {
            el.classList.add('reveal_active')
        } else {
            el.classList.remove('reveal_active')
        }
    }
}
window.addEventListener('scroll', handlerScroll)

