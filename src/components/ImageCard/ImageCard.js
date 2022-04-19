import './ImageCard.scss'
const ImageCard = ({imgSrc}) =>{
    
    return(
        <>
        <div className="mb-2 imageDiv">
            <img width='300' height={200} src={imgSrc} alt="imag" />
        </div>
        </>
    )
}

export default ImageCard;