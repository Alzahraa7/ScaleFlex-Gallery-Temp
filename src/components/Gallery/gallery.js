import ImageCard from "../ImageCard/ImageCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () =>{
    const [images,setImages] = useState([]);

    useEffect(()=>{
        axios.get('https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy')
        .then((response)=>{ setImages(response.data)})
        .catch((err)=>{console.log(err)})
    },[]);

    return(
        <>
        <div className="container mt-3">
            <div className="row">
                {images.map((img)=>{
                    return(
                        <>
                        <div className="col ms-5">
                            <ImageCard imgSrc={img.url} />
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Gallery;