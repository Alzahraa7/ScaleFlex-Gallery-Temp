import "./Modal.scss";
const Modal = ({ clickedImg }) => {
  return (
    <>
      <div className="imgModal">
        <div className="ModalDiv">
          <img className="selectedImg"
           width={400}
           height={400}
           src={clickedImg.url}
           alt="clickedImg" />
           <p> {clickedImg.}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
