import "./Modal.scss";

const Modal = ({ hide }) => {
  return (
    <>
      <div className="modal_blur">
        <div className="modal_wrapper">
          <div className="modal_main">
            <div className="modal_header">
              <span>
                <div className="modal_title">Create new post</div>
              </span>
              <button onClick={() => hide(false)}>x</button>
            </div>
            <hr />
            <div className="modal_body">
              <form action="">
                <label>
                  <img src={""} alt="" />
                </label>

                <label className="uploadImgLogo" htmlFor="uploadImg">
                  <img
                    src="https://thumbs.dreamstime.com/b/image-upload-icon-simple-illustration-vector-stock-174927518.jpg"
                    alt=""
                  />
                </label>
                <p>Drag photos and videos here</p>
                <button>Post</button>
                <input id="uploadImg" type="file" onChange={""} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
