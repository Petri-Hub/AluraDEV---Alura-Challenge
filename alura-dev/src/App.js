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

  let codeThemes = {
    //Background, color, tagkey...code...atribbutesymbol...strings...classtitle...comment
    0: ['#272822','#dddddd','#f92672','#66d9ef','#bf79db','#a6e22e','white','#75715e'],
    1: ['#002451','white', '#ffc58f', 'white', '#ffeead','#d1f1a9', '#bbdaff', '#7285b7'],
    2: ['#d5d6db','#565a6e','#8f5e15','#965027','#8c4351','#485e30','#34548a','#9699a3'],
    3: ['#191724','#e0def4','#31748f','#ebbcba','#9ccfd8','#e0def4','#f6c177','#555169'],
    4: ['#181818','#d8d8d8','#ba8baf','#ab4642','#dc9656','#a1b56c','#f7ca88','#585858'],
    5: ['#101010','#C0C0C0','#E0AF85','#A3B8EF','#C8C874','#EFA6A2','#E6A3DC','#454545'],
  }
  let [hljsTheme, setHljsTheme] = useState({colors: codeThemes[0], index: 0})

  function rotateTheme(){
    let nextIndex = hljsTheme.index += 1
    if(codeThemes[nextIndex]){
      setHljsTheme({colors: codeThemes[nextIndex], index: nextIndex})
    } else {
      setHljsTheme({colors: codeThemes[0], index: 0})
    }
  }

  return (
    <>
      <GlobalStyle {...theme} codeTheme={hljsTheme.colors}/>
      <Main changeTheme={rotateTheme}/>
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
