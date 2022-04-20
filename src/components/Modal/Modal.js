import "./Modal.scss";
const Modal = ({ clickedImg }) => {
  return (
    <>
      <div className="imgModal">
        <div className="ModalDiv">
          <img
            width={400}
            height={400}
            src={clickedImg.url}
            alt="clickedImg"
          />
          <div className="imgNameDiv">
            <p style={{ textAlign: "center" }}>{clickedImg.name}</p>
          </div>
          <div className="counterDiv">
              <p>image 2/30</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
