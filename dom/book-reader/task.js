const fontSizeElems = document.querySelectorAll('.font-size');
const textColorElems = document.querySelectorAll('.color');
const bgColorElems = document.querySelectorAll('.book__control_background .color');

function handlerFontSize(e) {
    e.preventDefault();
    const size = e.currentTarget.dataset.size
    for (const elem of fontSizeElems) {
        if (elem === e.currentTarget) {
            elem.classList.add('font-size_active');
        } else {
            elem.classList.remove('font-size_active')
        }
    }
    const bookElem = document.querySelector('#book');
    bookElem.classList.remove('book_fs-small', 'book_fs-big');

    if (size === 'small') {
        bookElem.classList.add('book_fs-small')
    } else if(size==='big'){
        bookElem.classList.add('book_fs-big')
    }

}

function handlerTextColor(e) {
    e.preventDefault();
    const color = e.currentTarget.dataset.textColor
    console.log('textColor',color)
    for (const elem of textColorElems) {
        if (elem === e.currentTarget) {
            elem.classList.add('color_active')
        } else {
            elem.classList.remove('color_active')
        }
    }

    const bookElem = document.querySelector('#book');
    console.log(bookElem.dataset)
    bookElem.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke')
    if (color === 'gray') {
        bookElem.classList.add('book_color-gray');
    } else if (color === 'whitesmoke') {
        bookElem.classList.add('book_color-whitesmoke')
    } else if (color === 'black') {
        bookElem.classList.add('book_color-black')
    }
}

function handlerBgColor(e) {
    e.preventDefault();
    const bgColor = e.currentTarget.dataset.bgColor
    console.log('textColor',bgColor)
    for (const elem of bgColorElems) {
        if (elem === e.currentTarget) {
            elem.classList.add('color_active')
        } else {
            elem.classList.remove('color_active')
        }
    }

    const bookElem = document.querySelector('#book');
    bookElem.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white')
    if (bgColor === 'gray') {
        bookElem.classList.add('book_bg-gray');
    } else if (bgColor === 'white') {
        bookElem.classList.add('book_bg-white')
    } else if (bgColor === 'black') {
        bookElem.classList.add('book_bg-black')
    }
}

for (const elem of fontSizeElems) {
    elem.addEventListener('click', handlerFontSize)
}
for (const elem of textColorElems) {
    elem.addEventListener('click', handlerTextColor)
}
for (const elem of bgColorElems) {
    elem.addEventListener('click', handlerBgColor)
}