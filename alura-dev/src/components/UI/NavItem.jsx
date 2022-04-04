//Dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItem = styled.li`
    margin-bottom: 16px;
    opacity: ${(props) => (props.selected === true ? "1" : "0.5")};

    a {
        align-items: center;
        color: rgba(var(--light_color), 1);
        display: flex;
        justify-content: flex-start;
        text-decoration: none;
    }

    div {
        border-radius: 16px;
        margin-right: 16px;
        background-color: ${(props) =>
            props.selected === true
                ? "rgba(var(--primary_color), 1.00)"
                : "rgba(var(--primary_color), 0.15)"};

        &:hover {
            background-color: ${(props) =>
                props.selected === true
                    ? "rgba(var(--primary_color), 1.00)"
                    : "rgba(var(--primary_color), 0.65)"};
        }
        &:active {
            background-color: rgba(var(--primary_color), 1);
        }
    }
`;

export default ({ children, icon, selected, func, page }) => (
    <NavItem onClick={() => func()} selected={selected}>
        <Link to={page}>
            <div className="default-icon">
                <img src={icon} alt={`${children} tab`} />
            </div>
            {children}
        </Link>
    </NavItem>
);
