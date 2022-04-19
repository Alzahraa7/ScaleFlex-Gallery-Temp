import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import './ImageCard.scss'
const ImageCard = ({imgSrc}) =>{
    
    return(
        <>
        <div className="mb-2 position-relative">
            {/* <div className='overlayImg position-absolute'></div> */}
            <img className='imageDiv' width='300' height={200} src={imgSrc} alt="imag" />
        
            <FontAwesomeIcon className='magnifyIcon' icon={faMagnifyingGlassPlus} />
            
        </div>
        </>
    )
}

export default ImageCard;