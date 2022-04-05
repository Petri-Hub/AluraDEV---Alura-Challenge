import { useEffect, useState } from 'react';
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

  const hljsThemes = {
    monokai: ['#272822', '#ddd', '#f92672', '#66d9ef', '#bf79db', '#a6e22e', 'white'],
    tommorow: ['#002451', 'white', '', '', '', '#7285b7', '']
  }

  return (
    <>
      <GlobalStyle {...theme}/>
      <Main />
    </>
  );
}

localStorage.setItem('data', JSON.stringify({
  code: "",
  name: "",
  desc: "",
  language: "",
  color: "",
}))

export default App;
