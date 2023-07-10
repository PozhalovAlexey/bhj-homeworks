function startRotator(rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    let i = 0;
    setInterval(() => {
        cases[i].classList.remove('rotator__case_active');
        i = (i + 1) % cases.length;
        cases[i].classList.add('rotator__case_active');
    }, 1000);
}

const rotators = document.querySelectorAll('.rotator');
for (const rotator of rotators) {
    startRotator(rotator);
}