export default class PostsView{
    constructor(){
        throw new Error('Essa clase não precisa ser instanciada.')
    }

    static model(data, index, func){
        return this._template(data, index, func)
    }

    static _template({code, title, desc, language, color, comments, likes, user}, index, func){
        return `
        <article class="community__card" data-id=${index}>
            <div style="background-color: ${color}" class="code-area__inner hljs">
                <div class="code-area__inner__header hljs">❤️💛💚</div>
                <code class="code-area__inner__code-input hljs ${language}">${func(code, language)}</code>
            </div>
            <div class="community__card__information">
                <h2>${title || `My ${language.toUpperCase()}`}</h2>
                <p>${desc || "Sem descrição."}</p>
                <div class="card__bottom">
                <div class="card__bottom__icons">
                    <div class="card__bottom__icon"><img class="card__icon-comment" src="./assets/Images/comment-icon.svg" alt="card"><p class="Comments">${comments}</p></div>
                    <div class="card__bottom__icon"><img class="card__icon-liked" src="./assets/Images/heart-icon.svg"><p class="Likes">${likes}</p></div>
                </div>
                    <div class="header__user-data">
                        <img class="header__user-data-image" src=${user.image} alt="User image"/>
                        <h3 class="header__user-data-name">${user.name}</h3>
                    </div>
                </div>
            </div>
        </article>
        `
    }


}