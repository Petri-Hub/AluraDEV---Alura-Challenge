const input = document.querySelector('#Background-Color')
const background = document.querySelector('.code-area')

input.addEventListener('input', setColor)

function setColor(){
    background.style.backgroundColor = input.value
}
