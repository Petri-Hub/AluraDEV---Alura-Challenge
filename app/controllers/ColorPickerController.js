export default class ColorPickerController{
    constructor(){
        this.colorInput = document.querySelector('#Color-Input')
        this.codeBackground = document.querySelector('#Code-Background')

        this.colorInput.addEventListener('input', () => this.setColor())
        this.setRandomColor()
    }

    setRandomColor(){
        let randomColor = "#" + ((1<<24)*Math.random() | 0).toString(16)
        randomColor.length == 6 ? randomColor += "7" : randomColor
        this.colorInput.value = randomColor
        this.setColor()
    }

    setColor(){
        let color = this.colorInput.value
        this.codeBackground.style.backgroundColor = color
    }
}