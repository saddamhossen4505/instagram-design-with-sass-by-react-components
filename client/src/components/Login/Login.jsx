import "./Login.scss";
import logo from "../../../public/logo.png";
import logo_1 from "../../../public/logoImg.png";

const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="container">
          <div className="content_area">
            <div className="leftSide">
              <a href="/">
                <img src={logo_1} alt="" />
              </a>
            </div>

            <div className="rightSide">
              <div className="loginBox">
                <a href="/">
                  <img src={logo} alt="" />
                </a>

                <form action="" className="login_form">
                  <input
                    type="text"
                    placeholder="Phone number, username or email address"
                  />
                  <input type="text" placeholder="Password" />
                  <button>Log in</button>
                </form>

                <p> ------------------- OR ------------------</p>
                <button style={{ fontSize: "15px" }}>
                  <i class="bx-fw bx bxl-facebook-square"></i> Log in with
                  Facebook
                </button>
                <button>Forgotten your password?</button>
              </div>

              <div className="singUpBox">
                Don't have an account? <a href="/">Sign up</a>
              </div>

              <div className="app_area">
                <p>Get the app.</p>
                <div className="button_area">
                  <a href="/">
                    <img
                      src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                      alt=""
                    />
                  </a>

                  <a href="/">
                    <img
                      src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <ul>
              <li>
                <a href="/">Meta</a>
              </li>

              <li>
                <a href="/">About</a>
              </li>

              <li>
                <a href="/">Blog</a>
              </li>

              <li>
                <a href="/">Jobs</a>
              </li>

              <li>
                <a href="/">Help</a>
              </li>

              <li>
                <a href="/">API</a>
              </li>

              <li>
                <a href="/">Privacy</a>
              </li>

              <li>
                <a href="/">Top accounts</a>
              </li>

              <li>
                <a href="/">Locations</a>
              </li>

              <li>
                <a href="/">Instagram Lite</a>
              </li>

              <li>
                <a href="/">Contact uploading and non-users</a>
              </li>

              <li>
                <a href="/">Meta Verified</a>
              </li>

              <li>
                <a href="/">English (UK) &#9829;</a>
              </li>

              <li>
                <a> &#169; 2023 Instagram from Meta</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
