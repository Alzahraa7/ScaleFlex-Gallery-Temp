import './App.css';
import React,{ useState } from 'react';
import Nav from './layout/NavBar/Nav';
import Gallery from './components/Gallery/gallery';
import { ImgProvider } from './Context/clickedImg';
import Footer from './layout/footer/footer';

function App() {
  const [clcdImg, setClcdImg] = useState();
  return (
    <>
    <Nav />
    <ImgProvider value={{clcdImg,setClcdImg}}>
      <Gallery />
    </ImgProvider>
    <Footer />
    
    </>
  );
}

export default App;
