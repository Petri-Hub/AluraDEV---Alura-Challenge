import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Main from './components/Main'

function App() {
  let [theme] = useState({
    codeFont: "'Roboto Mono', monospace",
    defaultFont: "'Inter', sans-serif",
    bgColor: "5, 29, 59",
    primaryColor: "80, 129, 251",
    lightColor: "255, 255, 255",
    darkColor: "20, 20, 20"
  })

  return (
    <>
      <GlobalStyle {...theme}/>
      <Main />
    </>
  );
}

export default App;
