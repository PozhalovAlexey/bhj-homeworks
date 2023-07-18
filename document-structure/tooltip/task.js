const toolTips = document.querySelectorAll('.has-tooltip');

toolTips.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        const tooltip = document.createElement('div');
        tooltip.textContent = elem.getAttribute('title');
        tooltip.classList.add('tooltip');
        tooltip.classList.add('tooltip_active')
        document.body.appendChild(tooltip)
        console.log(tooltip.classList)
        console.log(tooltip)
        const removeToolTip = () => {
            tooltip.remove()
            document.removeEventListener('click', removeToolTip)
        }
        document.addEventListener('click', removeToolTip, {once: true})
    })
})
