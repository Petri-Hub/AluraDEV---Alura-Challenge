import Post from "../models/Post.js"
import PostsView from "../views/PostsView.js"
import ColorPickerController from "./ColorPickerController.js"
import HighlightController from './HighlightController.js'
import NavigationController from "./NavigationController.js"

export default class PostsController{
    constructor(){
        this._posts = JSON.parse(localStorage.getItem('posts')) || []
        this._form = document.getElementById('Main-Form')
        this._postsGrid = document.querySelector('.community')

        // Other Controllers
        this.hlController = new HighlightController()
        this.colPickController = new ColorPickerController()
        this.navController = new NavigationController()

        this._form.addEventListener('submit', (event) => this.getData(event))
        this.renderPosts()
    }

    getData(event){
        event.preventDefault()
        event.stopPropagation()

        let data = {
            code: document.querySelector('#Code-Input').textContent,
            title: document.querySelector('#Name-Input').value,
            desc: document.querySelector('#Desc-Input').value,
            language: document.querySelector('#Code-Language').value,
            color: document.querySelector('#Color-Input').value,
            user: {
                name: 'Petri',
                image: './assets/Images/user-icon.png'
            }
        }

        this.addPost(data)
    }

    addPost({code, title, desc, language, color, user}){
        let newPost = new Post(code, title, desc, language, color, user)
        this._posts = [...this._posts, newPost]
        localStorage.setItem('posts', JSON.stringify(this._posts))
        this.renderPosts()
    }

    renderPosts(){
        this._postsGrid.innerHTML = ""
        this._posts.forEach((post, index) => {
            let htmlPost = document.createElement('div')
            htmlPost.innerHTML = PostsView.model(
                post, 
                index, 
                this.hlController.applyHighlightOnCode
            )
            this._postsGrid.appendChild(htmlPost)
        })
    }
}