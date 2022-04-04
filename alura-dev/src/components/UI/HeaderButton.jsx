//Dependencies
import styled from 'styled-components'

const HeaderButton = styled.button`
    background-color: transparent;
    display: none;
    &:hover{background-color: #5081FB14;}
    &:active{background-color: #5081FB29;}
    
    @media (max-width: 768px) {
        display: ${props => props.id === "menuBtn" ? "flex" : "none"};
    }

    @media (max-width: 450px) {
        display: flex;
    }
`

export default ({icon, alt, id, onClick}) => (
    <HeaderButton onClick={onClick} id={id} className="default-icon">
        <img src={icon} alt={alt}/>
    </HeaderButton>
) 
