import "./Modal.scss";
const Modal = ({ clickedImg , imageSize }) => {
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
              <p style={{textAlign:'center'}}>image {localStorage.getItem('counter')}/{imageSize}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
