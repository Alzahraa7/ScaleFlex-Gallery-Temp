import ImageCard from "../ImageCard/ImageCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
const Gallery = () =>{
    const [images,setImages] = useState([]);
    const [IsClicked,setIsClicked] = useState(false);
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
            IsClicked && <Modal images={images} setIsClicked={setIsClicked} />
        }
        </>
    )
}

export default Gallery;