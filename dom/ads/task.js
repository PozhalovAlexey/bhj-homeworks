const rotators = document.querySelectorAll('.rotator');

for (const rotator of rotators) {
    const cases = document.querySelectorAll('.rotator__case')
    let i = 0;
    setInterval((e) => {
        cases[i].classList.remove('rotator__case_active')
        i = (i + 1) % cases.length
        cases[i].classList.add('rotator__case_active')
    }, 1000)
}