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

    @media (max-width: 768px) {
        column-gap: 0px;
        grid-template-columns: 100%;
    }
`;

export default () => {
    let [posts] = useState(JSON.parse(localStorage.getItem("posts")) || "");

    useEffect(() => {
        document.querySelectorAll(".hljs").forEach((element) => {
            hljs.highlightElement(element);
        });
    }, [posts]);

    return (
        <Community>
            {posts ? posts.map((post, index) => (
                <Card {...post} key={index} />
            )) : <h2> No posts yet... </h2>}
        </Community>
    );
};
