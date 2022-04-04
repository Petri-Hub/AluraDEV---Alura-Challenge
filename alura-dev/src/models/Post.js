export default class Post {
    constructor(code, name, desc, language, color) {
        this.code = code;
        this.name = name;
        this.desc = desc;
        this.language = language;
        this.color = color;
        this.comments = 0;
        this.likes = 0;
        this.wasLiked = false;
        this.user = {
            name: "Petri",
        };
    }
}
