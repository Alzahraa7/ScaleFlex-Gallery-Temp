import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import './ImageCard.scss';
import {useContext } from 'react';
import { img } from '../../Context/clickedImg';
const ImageCard = ({imgObj,setIsClicked, counter}) =>{
    const {setClcdImg} = useContext(img);
    const handleSetters = ()=>{
        setIsClicked(true); 
        setClcdImg(imgObj); 
        localStorage.setItem('counter',counter);
    }
    return(
        <>
        <div className="mb-2 position-relative" onClick={handleSetters}>
            <img className='imageDiv' width='300' height={200} src={imgObj.url} alt="imag" />
            <FontAwesomeIcon 
            className='magnifyIcon' 
            icon={faMagnifyingGlassPlus} />
        </div>
        </>
    )
}

export default ImageCard;