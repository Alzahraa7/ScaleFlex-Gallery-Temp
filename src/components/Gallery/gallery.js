import ImageCard from "../ImageCard/ImageCard";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Modal from "../Modal/Modal";
import { img } from '../../Context/clickedImg';
const Gallery = () =>{
    const [images,setImages] = useState([]);
    const [IsClicked,setIsClicked] = useState(false);
    const {clcdImg} = useContext(img);
    useEffect(()=>{
        axios.get('https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy')
        .then((response)=>{ setImages(response.data)})
        .catch((err)=>{console.log(err)})
    },[]);

    return(
        <>
        
        <div className="container mt-3">
            <div className="row">
                {images.map((img,index)=>{index++;
                    return(
                        <>
                        <div className="col ms-5">
                            <ImageCard imgObj={img}
                            counter = {index}
                            setIsClicked={setIsClicked}/>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
        {
            IsClicked && <Modal clickedImg={clcdImg} imageSize={images.length} />
        }
        </>
    )
}

export default Gallery;