import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import './ImageCard.scss';
import Modal from '../Modal/Modal';
import { useState,useContext } from 'react';
import { img } from '../../Context/clickedImg';
const ImageCard = ({imgObj,setIsClicked}) =>{
    const {clcdImg,setClcdImg} = useContext(img);
    return(
        <>
        <div className="mb-2 position-relative">
            <img className='imageDiv' width='300' height={200} src={imgObj.url} alt="imag" />
            <FontAwesomeIcon 
            className='magnifyIcon' 
            onClick={()=>{setIsClicked(true); setClcdImg(imgObj)}}
            icon={faMagnifyingGlassPlus} />
        </div>
        </>
    )
}

export default ImageCard;