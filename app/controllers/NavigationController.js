export default class NavigationController{
    constructor(){
        this.menuItems = document.querySelectorAll('.nav-menu__list__item')
        this.burguerMenu = document.querySelector('#menuBtn')
        this.menu = document.querySelector('.nav-menu')
        this.isMenuOpen = false

        this.pages = document.querySelectorAll('.page')
        this.grid = document.querySelector('.main-content')

        this.pageGrid = {
            0: () => this.grid.style.gridTemplateColumns = '65% calc(35%)',
            1: () => this.grid.style.gridTemplateColumns = '100%'
        }

        this.menuItems.forEach((item, index) => {
            item.addEventListener('click', () => this.changePage(index))
        })
        this.burguerMenu.addEventListener('click', () => this.toggleMobileMenu())
        this.changePage(0)
    }

    changePage(index){
        //Making the menu items interactive
        this.changeMenu(index)

        //Actually changing page
        this.hidePages(index)
        
        //Setting the grid for the layout of the page
        this.pageGrid[index]()
    }

    hidePages(exception){
        this.pages.forEach(page => {
            if(page.classList.contains(`page-${exception}`)){
                page.classList.remove('page-hidden')
                page.classList.add('page-shown')
            } else {
                page.classList.remove('page-shown')
                page.classList.add('page-hidden')
            }
        })
    }

    changeMenu(index){
        this.menuItems.forEach(item => {
            if(item.classList.contains('nav-menu__list__item-selected')){
                item.classList.remove('nav-menu__list__item-selected')
            }
        })
        this.menuItems[index].classList.add('nav-menu__list__item-selected')
    }

    toggleMobileMenu(){
        this.isMenuOpen === false 
            ? this.menu.style.display = 'block'
            : this.menu.style.display = 'none'
        this.isMenuOpen = !this.isMenuOpen
    }
    
}