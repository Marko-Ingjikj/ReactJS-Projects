import Header from "./Header";

const Account = () => {
  return (
    <div>
      <Header />

      <div className="main">
        <div className="content">
          <div className="text">Sign Up</div>
          <form action="#">
            <div className="input-div">
              <div className="field">
                <span className="fas fa-user"></span>
                <input
                  type="text"
                  placeholder="email or phone"
                  className="input"
                  required
                />
              </div>
              <div className="field">
                <span className="fas fa-lock"></span>
                <input
                  type="password"
                  className="input"
                  placeholder="password..."
                  required
                />
              </div>
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button className="btn">Sign in</button>
            <div className="signup">
              Not a member?
              <a href="#">signup now</a>
            </div>

            <div className="or">
              <div className="line"></div>
              <span>or</span>
              <div className="line"></div>
            </div>

            <div className="sign-up-with">
              <div className="google sign-up-div">
                <img
                  src="src\images\Google__G__Logo.svg.png"
                  alt=""
                  className="sign-up-logo"
                />
                <p>Sign in with Google</p>
              </div>
              <div className="facebook sign-up-div">
                <img
                  src="src\images\facebooksvg.png"
                  alt=""
                  className="sign-up-logo"
                />
                <p>Sign in with Facebook</p>
              </div>
              <div className="apple sign-up-div">
                <img
                  src="src\images\Apple_logo_black.svg.png"
                  alt=""
                  className="sign-up-logo"
                />
                <p>Sign in with Apple</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
