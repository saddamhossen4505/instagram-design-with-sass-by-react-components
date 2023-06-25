import "./SignUp.scss";
import logo from "../../../public/logo.png";

const SignUp = () => {
  return (
    <>
      <div className="signUpPage">
        <div className="container">
          <div className="signUpContent">
            <div className="signUpBox">
              <a href="/">
                <img src={logo} alt="" />
              </a>
              <p>Sign up to see photos and videos from your friends.</p>
              <button>
                <i class="bx-fw bx bxl-facebook-square"></i> Log in with
                Facebook
              </button>

              <p>------------------OR------------------</p>

              <form action="" className="signUp_form">
                <input
                  type="text"
                  placeholder="Phone number or email address"
                />
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />

                <p>
                  People who use our service may have uploaded your contact
                  information to Instagram. Learn more
                </p>

                <p>
                  By signing up, you agree to our Terms, Privacy Policy and
                  Cookies Policy.
                </p>
                <button>Log in</button>
              </form>
            </div>
          </div>

          <div className="signUpFooter">
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

export default SignUp;
