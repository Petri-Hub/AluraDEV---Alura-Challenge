export default class HighlightController{
    constructor(){
        this.codeWrapper = document.querySelector('#Code-Wrapper')
        this.highlightButton = document.querySelector('#Highlight-Button')
        this.selectInput = document.querySelector('#Code-Language')

        this.highlightButton.addEventListener('click', () => this.applyEditorHighlight())
    }

    applyEditorHighlight(){
        const codeLines = this.codeWrapper.innerText
        
        //Replacing the code tag with a new, configured one
        this.codeWrapper.innerHTML = 
        `
        <code 
            class="code-area__inner__code-input hljs ${this.selectInput.value}" 
            aria-label="Editor de código"
            contenteditable="true"
            id="Code-Input">
        </code>
        `
        //Placing the coded lines in the new code tag
        this.codeWrapper.querySelector('code').textContent = codeLines
    
        //Highlighting the element
        hljs.highlightElement(this.codeWrapper.querySelector('code'))
    }

    applyHighlightOnCode(code, language){
        const highlightedCode = hljs.highlight(String(code), {language: language}).value
        return highlightedCode
    }
}