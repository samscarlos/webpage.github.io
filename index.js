//feather.replace();

const button = document.querySelectorAll('c.button');

// active function
const buttonActive = button => {
    let buttonState = button.classList.contains('c-button--active')
    let buttonType = button.dataset.button
    buttonState ?
        button.classList.remove(`u-text--${buttonType}`) :
        button.classList.add(`u-text--${buttonType}`)
    button.classList.toggle('c-button--active')
}

button.forEach(button => {
    //click event listener
    button.addEventListener('click', () => {
        buttonActive(button7)
    })
})