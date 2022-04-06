//Dependencies
import { useEffect, useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import { saveAs } from 'file-saver'
import styled from "styled-components";
import hljs from "highlight.js";
import Post from "../models/Post";
//Icons/Images
import imageDownloadIcon from "../assets/images/image-download-icon.svg";
import downloadIcon from "../assets/images/download-icon.svg";
import paintIcon from "../assets/images/paint-icon.svg"

const CodeEditor = styled.div`
    font-family: var(--default_font);
    column-gap: 40px;
    display: grid;
    grid-template-columns: 66% calc(34% - 40px);
    width: calc(100%);

    .code-area {
        button {
            margin: 32px 0;
        }

        .code-wrapper {
            border-radius: 8px;
            padding: 32px;

            .hljs {
                border-radius: 8px;
                padding-bottom: 16px;

                .code-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    height: 36px;
                    margin-bottom: 12px;
                    padding: 16px 12px;
                    width: 100%;

                    div {
                        display: flex;

                        img.image-download, img.download {
                            cursor: pointer;
                            filter: invert();
                            height: 30px;
                            width: 30px;
                            margin-left: 7px;
                        }

                        img.image-download{
                            transform: translateY(-3px);
                        }

                        img.paint{
                            cursor: pointer;
                            height: 25px;
                            width: 25px;
                            margin-right: 3px;
                            filter: invert();
 
                        }
                    }
                }

                .input-wrapper {
                    code {
                        font-family: var(--code_font);
                        display: inline-block;
                        line-height: 1.2;
                        min-height: 300px;
                        outline: none;
                        padding: 0 16px;
                        width: 100%;

                        white-space: pre-wrap;
                        word-break: break-all;
                    }
                }
            }
        }
    }

    .code-form {
        fieldset {
            input,
            select {
                margin-bottom: 16px;
            }

            textarea[name="description"] {
                font-family: var(--default_font);
                height: 80px;
                margin-bottom: 40px;
                resize: vertical;
            }

            .select-arrow{
                position: relative;
                select {
                    position: relative;
                    appearance: none;
                    cursor: pointer;

                    option {
                        background-color: rgb(45, 65, 90);
                        color: rgba(255, 255, 255, 0.64);
                    }
                }

                &:after{
                    position: absolute;
                    content: '';
                    width: 0;
                    height: 0;
                    border-right: 5px solid transparent;
                    border-left: 5px solid transparent;
                    border-top: 10px solid rgba(255, 255, 255, 0.64);
                    right: 15px;
                    top: 50%;
                    transform: translate(0%, -120%);
                    z-index: 100;
                }
            }   
            

            input[type="color"] {
                border: none;
                border-radius: 8px;
                cursor: pointer;
                height: 56px;
                margin-bottom: 16px;
                width: 100%;

                &::-webkit-color-swatch-wrapper,
                &::-webkit-color-swatch {
                    border-radius: 8px;
                    margin: 0;
                    padding: 0;
                }
            }

            .flex {
                display: grid;
                grid-template-columns: 100%;
            }
        }

        button[type="submit"] {
            background-color: rgba(var(--primary_color), 1);
            color: rgba(var(--dark_color), 1);

            &:hover,
            &:focus {
                filter: brightness(1.2);
            }
            &:active {
                border: 4px solid rgba(var(--primary_color), 0.7);
            }
        }
    }

    @media (max-width: 768px) {
        column-gap: 0px;
        grid-template-columns: 100%;

        .flex {
            column-gap: 24px;
            grid-template-columns: repeat(2, calc(50% - 12px)) !important;
        }
    }

    @media (max-width: 450px) {
        .flex {
            column-gap: 0px;
            grid-template-columns: 100% !important;
        }
    }
`;

export default ({changeTheme}) => {
    let [savedData] = useState(JSON.parse(localStorage.getItem('data')))
    let [code, setCode] = useState(savedData.code || "");
    let [name, setName] = useState(savedData.name || "");
    let [desc, setDesc] = useState(savedData.desc || "");
    let [language, setLanguage] = useState(savedData.language || "javascript");
    let [color, setColor] = useState(savedData.color || generateRandomColor);
    const codeWrapper = useRef(null);
    const codeInput = useRef(null);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify({
            code: code,
            name: name,
            desc: desc,
            language: language,
            color: color
        }))
        if(code === ""){
            codeInput.current.innerHTML = ""
        }
    }, [code, name, desc, language, color])

    useEffect(() => {
        codeInput.current.textContent = code
        applyHighlight()
        document.title = "AluraDEV | Editor"
    }, [])

    const filesFormats = {
        "c++": ".c",
        "css": ".css",
        "html": ".html",
        "javascript": ".js",
        "java": ".java",
        "txt": ".txt",
        "python": ".py",
        "scss": ".scss",
        "sql": ".sql",
        "typescript": ".ts"
    }

    function addNewPost(event) {
        event.preventDefault();
        event.stopPropagation();
        if(code){
            let newPost = new Post(code, name, desc, language, color);
            let existingEntries = JSON.parse(localStorage.getItem("posts")) || [];
            localStorage.setItem(
                "posts",
                JSON.stringify([...existingEntries, newPost])
            );
        } else {
            alert("You need to write something in the code editor in order to publish it")
        }
        
    }

    //Function to download as data
    function downloadFile() {
        let codeLines = codeInput.current.innerText
        let fileName = `${name || "My-Code"}` + filesFormats[language]
        let blob = new Blob([codeLines], {
            type: "text/plain;charset=utf-8"
        })
        saveAs(blob, fileName)
    }

    // Code used to save the div as an image
    const savetoPng = useCallback(async (imgTitle) => {
        toPng(codeWrapper.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = `${imgTitle || "My-Code"}.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                alert("Sorry, an error ocurred.");
                console.log(error);
            });
    }, [codeWrapper]);

    function generateRandomColor() {
        function c() {
            var hex = Math.floor(Math.random()*256).toString(16);
            return ("0"+String(hex)).substr(-2); // pad with zero
          }
          return "#"+c()+c()+c();
    }

    function applyHighlight() {
        let input = codeInput.current;
        let html = hljs.highlight(input.textContent, {
            language: language,
        }).value;
        codeInput.current.innerHTML = html;
    }

    return (
        <CodeEditor>
            {/* CODE AREA */}
            <section className="code-area">
                <div
                    ref={codeWrapper}
                    className="code-wrapper"
                    style={{ backgroundColor: color }}
                >
                    <div className="hljs">
                        <div className="code-header">
                            <div>❤️💛💚</div>
                            <div className="features-flex">
                                <img
                                    onClick={changeTheme}
                                    className="paint"
                                    src={paintIcon} 
                                    alt="Change theme" />
                                <img
                                    onClick={() => savetoPng(name)}
                                    className="image-download"
                                    src={imageDownloadIcon}
                                    alt="Download to PNG"
                                />
                                <img
                                    onClick={() => downloadFile()}
                                    className="download"
                                    src={downloadIcon}
                                    alt="Download as file"
                                />
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <code
                                ref={codeInput}
                                onInput={(e) => setCode(e.target.innerText)}
                                className={language}
                                contentEditable={true}
                            ></code>
                        </div>
                    </div>
                </div>

                <button
                    className="default-button"
                    onClick={() => applyHighlight()}
                >
                    Apply Highlight
                </button>
            </section>
            {/* CODE FORM */}
            <section className="code-form">
                <form onSubmit={(event) => addNewPost(event)}>
                    <fieldset>
                        <legend className="default-title">Your Project</legend>
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className="default-input"
                            type="text"
                            name="name"
                            placeholder="Your project title"
                        />
                        <textarea
                            value={desc}
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }}
                            className="default-input"
                            name="description"
                            placeholder="Your project description"
                        />
                    </fieldset>

                    <fieldset>
                        <legend className="default-title">Customization</legend>
                        <div className="flex">
                            <div className="select-arrow">
                                <select
                                    onChange={(e) => {
                                        setLanguage(e.target.value);
                                    }}
                                    value={language}
                                    className="default-input"
                                >
                                    <option value="c++">C++</option>t
                                    <option value="css">CSS</option>t
                                    <option value="html">HTML</option>t
                                    <option value="javascript">Javascript</option>t
                                    <option value="java">Java</option>t
                                    <option value="txt">Plain Text</option>t
                                    <option value="python">Python</option>t
                                    <option value="scss">SCSS</option>t
                                    <option value="sql">SQL</option>t
                                    <option value="typescript">Typescript</option>t
                                </select>
                            </div>
                            
                                
                            <input
                                onChange={(e) => {
                                    setColor(e.target.value);
                                }}
                                value={color}
                                type="color"
                            />
                        </div>
                    </fieldset>

                    <button className="default-button" type="submit">
                        Save Project
                    </button>
                </form>
            </section>
        </CodeEditor>
    );
};