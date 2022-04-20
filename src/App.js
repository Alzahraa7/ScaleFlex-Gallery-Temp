import './App.css';
import React,{ useState } from 'react';
import Nav from './layout/NavBar/Nav';
import Gallery from './components/Gallery/gallery';
import { ImgProvider } from './Context/clickedImg';

function App() {
  const [clcdImg, setClcdImg] = useState({});
  return (
    <>
    <Nav />
    <ImgProvider value={{clcdImg,setClcdImg}}>
      <Gallery />
    </ImgProvider>
    
    </>
  );
}

export default App;
