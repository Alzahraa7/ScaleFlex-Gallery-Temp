import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Modal.scss";
import { useState } from "react";
const Modal = ({ clickedImg , imageSize , images }) => {
    let counter = localStorage.getItem('counter');
    const [imgIndex,setImgIndex] = useState(counter-1);
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
              <p style={{textAlign:'center'}}>image {imgIndex+1}/{imageSize}</p>
          </div>

          <FontAwesomeIcon onClick={()=>{setImgIndex(imgIndex-1)}} className="btn arrowLeft" icon={faAngleLeft} />
          <FontAwesomeIcon onClick={()=>{setImgIndex(imgIndex+1)}} className="btn arrowRight" icon={faAngleRight} />
        </div>
      </div>
    </>
  );
};

export default Modal;
