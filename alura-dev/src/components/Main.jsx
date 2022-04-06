//Dependencies
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Inner Components
import Header from './Header'
import NavMenu from './NavMenu'
import CodeEditor from './CodeEditor'
import Community from './Community'

const Main = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;

    @media (max-width: 768px){
        grid-template-columns: 100%; 
    }
`

export default ({changeTheme}) => {
    let [menuOpen, setMenuOpen] = useState(false)

    return(
        <BrowserRouter>
            <Header toggleMenu={() => setMenuOpen(!menuOpen)}/>
            <Main>
                {/* Need to be siblings for the Grid Layout*/}
                <NavMenu isOpen={menuOpen}/>     
                <div>
                    <Routes>
                        <Route path="/" element={<CodeEditor changeTheme={changeTheme}/>}></Route>
                        <Route path="/community" element={<Community />}></Route>
                    </Routes>
                </div> 
            </Main>
        </BrowserRouter>
    )
}