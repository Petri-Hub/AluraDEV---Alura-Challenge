//Dependencies
import { useEffect, useState } from "react";
import styled from "styled-components";
//Inner components
import NavItem from "./UI/NavItem";
//Icons/Images
import codeIcon from "../assets/images/code-icon.svg";
import peopleIcon from "../assets/images/people-icon.svg";
import heartIcon from "../assets/images/heart-icon.svg";

const NavMenu = styled.aside`
    position: relative;
    padding: 0;
    width: 100%;
    border-radius: 8px;
    z-index: 100;

    @media (min-width: 768px) {
        display: block !important;
    }

    @media (max-width: 768px) {
        position: absolute;
        right: 0;
        display: ${({ open }) => (open === true ? "block" : "none")};
        padding: 24px;
        width: 40%;
        top: calc(56px + 2rem + 20px);
        background-color: #2d415b;

        h2 {
            display: none;
        }
    }

    @media (max-width: 450px) {
        width: 60%;
    }
`;

export default ({ isOpen }) => {
    const [activeItem, setActiveItem] = useState();

    //Preventing NavMenu asynchrony with page when refresehd
    useEffect(() => {
        let initialPath = String(window.location.pathname);
        const pages = {
            "/": () => setActiveItem(1),
            "/community": () => setActiveItem(2),
            "/styleguide": () => setActiveItem(3),
        };
        pages[initialPath]();
    }, []);

    return (
        <NavMenu open={isOpen}>
            <h2 className="default-title">Menu</h2>
            <nav>
                <ul>
                    <NavItem
                        page={"/"}
                        selected={activeItem === 1 ? true : false}
                        func={() => setActiveItem(1)}
                        icon={codeIcon}>
                        Code Editor
                    </NavItem>

                    <NavItem
                        page={"/community"}
                        selected={activeItem === 2 ? true : false}
                        func={() => setActiveItem(2)}
                        icon={peopleIcon}>
                        Community
                    </NavItem>

                    <NavItem
                        page={"/styleguide"}
                        selected={activeItem === 3 ? true : false}
                        func={() => setActiveItem(3)}
                        icon={heartIcon}>
                        Style Guide
                    </NavItem>
                </ul>
            </nav>
        </NavMenu>
    );
};
