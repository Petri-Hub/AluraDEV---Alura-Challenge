//Libraries needed
import React from "react";
import styled from "styled-components";
//Inner components
import HeaderButton from "./UI/HeaderButton";
import UserData from "./UI/UserData";
//Icons/Images
import profilePic from "../assets/images/user-icon.png";
import searchIcon from "../assets/images/search-icon.svg";
import menuIcon from "../assets/images/menu-icon.svg";
import logo from "../assets/images/alura-dev-logo.svg";

const Header = styled.header`
    font-family: var(--default_font);
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 25% 50% 25%;
    height: 56px;
    width: 100%;
    margin-bottom: 40px;

    .logo {
        width: 95%;
        min-width: 150px;
        max-width: 150px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    @media (max-width: 768px) {
        grid-template-columns: 25% 65% 10%;

        .logo {
            min-width: 0px;
        }
    }

    @media (max-width: 450px) {
        grid-template-columns: 60% 40%;

        input {
            display: none;
        }
    }
`;

export default ({ toggleMenu }) => (
    <Header>
        <img className="logo" src={logo} alt="Logo da AluraDev" />
        <input
            className="default-input"
            type="text"
            placeholder="Search for something..."
        />
        <div>
            <HeaderButton id="searchBtn" icon={searchIcon} alt="Search icon" />
            <HeaderButton
                onClick={toggleMenu}
                id="menuBtn"
                icon={menuIcon}
                alt="Menu icon"
            />
            <UserData type={"header"} picture={profilePic} name={"Petri"} />
        </div>
    </Header>
);
