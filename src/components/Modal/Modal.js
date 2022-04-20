import "./Modal.scss";
const Modal = ({ clickedImg }) => {
  return (
    <>
      <div className="imgModal">
        <div className="ModalDiv">
            <p>hello</p>
          <img src={clickedImg.url} alt="clickedImg" />
        </div>
      </div>
    </>
  );
};

export default Modal;
