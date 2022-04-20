import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faClose } from "@fortawesome/free-solid-svg-icons";
import "./Modal.scss";
import { useState,useContext } from "react";
import { img } from "../../Context/clickedImg";
const Modal = ({ images , setIsClicked}) => {
    const {clcdImg} = useContext(img);
    const [imgIndex,setImgIndex] = useState(clcdImg-1);
    const handleLeft = () =>{
        if(imgIndex-1>0){
            setImgIndex(imgIndex-1)
        }
    }
    const handleRight = () =>{
        if(imgIndex+1<images.length){
            setImgIndex(imgIndex+1)
        }
    }
  return (
    <>
      <div className="imgModal">
        <div className="ModalDiv">
          <img
            width={400}
            height={400}
            src={images[imgIndex].url}
            alt="clickedImg"
          />

          <div className="imgNameDiv">
            <p style={{ textAlign: "center" }}>{images[imgIndex].name}</p>
          </div>

          <div className="counterDiv">
              <p style={{textAlign:'center'}}>image {imgIndex+1}/{images.length}</p>
          </div>

          <FontAwesomeIcon onClick={handleLeft} className="btn arrowLeft" icon={faAngleLeft} />
          <FontAwesomeIcon onClick={handleRight} className="btn arrowRight" icon={faAngleRight} />
          <FontAwesomeIcon onClick={()=>{setIsClicked(false)}} className="btn closeIcon" icon={faClose} />
        </div>
      </div>
    </>
  );
};

export default Modal;
