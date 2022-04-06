//Dependencies
import { useEffect, useState } from "react";
import hljs from "highlight.js";
import styled from "styled-components";
//Inner components
import Card from "./UI/Card";

const Community = styled.div`
    font-family: var(--default_font);
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, calc(50% - 12px));
    padding-bottom: 6rem;
    width: 100%;

    h2{
        font-size: 24px;
        color: white;
    }

    button{
        position: fixed;
        bottom: 15px;
        right: 15px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        padding: 1rem;
        background-color: rgba(var(--primary_color), 1);
        color: rgba(var(--light_color), 1);
        font-size: 1rem;
        font-weight: bold;

        &:hover {
            filter: brightness(1.2);
        }
    }

    @media (max-width: 768px) {
        column-gap: 0px;
        grid-template-columns: 100%;
    }
`;

export default () => {
    let [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || "");

    function clearPosts(){
        localStorage.removeItem('posts')
        setPosts("")
    }

    useEffect(() => {
        document.querySelectorAll(".hljs").forEach((element) => {
            hljs.highlightElement(element);
        });
    }, [posts]);

    useEffect(() => {
        document.title = "AluraDEV | Community"
    }, [])

    return (
        <Community>
            <button onClick={() => clearPosts()}>Clear Posts</button>
            {posts ? posts.map((post, index) => (
                <Card {...post} key={index} />
            )) : <h2> No posts yet... </h2>}
        </Community>
    );
};
