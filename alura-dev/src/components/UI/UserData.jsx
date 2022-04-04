//Dependencies
import styled from "styled-components";

const UserData = styled.div`
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 12px;
    transition: 0.3s;

    img {
        border-radius: 100%;
        height: 32px;
        transition: 0.3s;
        width: 32px;
    }

    h3 {
        color: rgba(var(--light_color), 1);
        margin-left: 0.75rem;
        user-select: none;
    }

    &:hover {
        background-color: rgba(var(--light_color), 0.1);
    }

    @media (max-width: 768px) {
        display: ${(props) => props.type === "header" ? "none" : "flex"} !important;
    }
`;

export default ({ type, picture, name }) => (
    <UserData type={type} className="user">
        <img src={picture} alt="User icon" />
        <h3>{name}</h3>
    </UserData>
);
