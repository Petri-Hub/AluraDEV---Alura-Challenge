//Dependencies
import styled from 'styled-components'
//Inner components
import UserData from './UserData'
//Icons/Images
import commentIcon from '../../assets/images/comment-icon.svg'
import likeIcon from '../../assets/images/heart-icon.svg'
import userPic from '../../assets/images/user-icon.png'

const Card = styled.article`
    background-color: rgba(var(--dark_color), 0.15);
    border-radius: 8px;
    height: 350px;
    overflow: hidden;
    transition: 0.3s;

    &:hover{height: 415px}

    .code-area{
        border-radius: 8px;
        height: 250px;
        padding: 24px;

        div{
            border-radius: 8px 8px 0 0;
            padding: 12px;
        }

        code{
            border-radius: 0 0 8px 8px;
            display: inline-block;
            overflow: hidden;
            font-size: 11px;
            line-height: 1.2;
            min-height: 165px;
            max-height: 165px;
            padding: 12px;
            width: 100%;
            white-space: pre;
        }
    }

    .card-information{
        padding: 24px;

        h2{
            color: rgba(var(--light_color), 1);
            font-size: 21px;
            font-weight: 700;
        }

        p{
            color: rgba(var(--light_color), 1);
            font-size: 16px;
            margin-bottom: 24px
            margin-top: 12px;
        }

        .card-bottom{
            align-items: center;
            display: flex;
            justify-content: space-between;

            .icons-flex{
                align-items: center;
                display: flex;
                justify-content: space-between;

                div{
                    background-color: transparent;
                    height: 36px;
                    margin: 0;
                    user-select: none;
                    width: 56px;
                    &:hover{background-color: rgba(var(--light_color), 0.1);}
                    &:active{background-color: rgba(var(--light_color), 0.15);}

                    p{
                        margin: 0;
                        margin-left: 8px
                    }
                }   
            }
        }
    }
`

export default ({code, name, desc, language, color, comments, likes, user}) => (
    <Card>
        <div style={{backgroundColor: color}} className="code-area">
            <div className={`hljs ${language}`}>❤️💛💚</div>
            <code className={`hljs ${language}`}>{code}</code>
        </div>
        <div className="card-information">
            <h2>{name || `My ${language[0].toUpperCase() + language.substring(1)}`}</h2>
            <p>{desc || "No description."}</p>
            <div className="card-bottom">
                <div className="icons-flex">
                    
                    <div className="default-icon">
                        <img src={commentIcon} alt="Comments icon" />
                        <p>{comments}</p>
                    </div> 
                    
                    <div className="default-icon">
                        <img src={likeIcon} alt="Likes icon"/>
                        <p>{likes}</p>
                    </div>
                </div>
                <UserData type={"card"} picture={userPic} name={user.name}/>
            </div>
        </div>

    </Card>
)