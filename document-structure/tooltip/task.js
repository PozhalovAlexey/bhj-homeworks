const toolTips = document.querySelectorAll('.has-tooltip');

toolTips.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault()
        const tooltip = document.createElement('div');
        tooltip.textContent = elem.getAttribute('title');
        tooltip.classList.add('tooltip');
        tooltip.classList.add('tooltip_active');
        document.body.appendChild(tooltip);

        const parentRect = elem.getBoundingClientRect();
        tooltip.style.top = parentRect.bottom + 'px';
        tooltip.style.left = parentRect.left + (parentRect.width - tooltip.offsetWidth)/2 + 'px';

        elem.addEventListener('mouseover', () => {
            tooltip.remove();
        });
    });
});