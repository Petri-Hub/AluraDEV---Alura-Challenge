export default class Post{
    constructor(code, title, desc, language, color, user){
        this.code = code
        this.title = title
        this.desc = desc
        this.language = language
        this.color = color
        this.comments = 0
        this.likes = 0
        this.wasLiked = false
        this.user = {
            name: user.name,
            image: user.image
        }
    }
    
    addLike(){
        this._wasLiked ? this._likes -= 1 : this._likes += 1
    }

}