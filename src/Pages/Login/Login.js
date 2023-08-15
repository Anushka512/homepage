import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { Fragment } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import EmailIcon from '@mui/icons-material/Email';

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <Fragment>
        <div
          className={`container__login ${isSignUpMode ? "sign-up-mode" : ""}`}
        >
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form">
                <h2 className="title">Sign In</h2>
                <div className="input-fields">
                <i style={{marginTop:"5px", color:"black"}}><EmailIcon /></i>
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-fields">
                  <i style={{marginTop:"4px", color:"black"}}><LockIcon/></i>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Link to="/forgetPassword">
                  <p className="forgotten">Forgotton password ?</p>
                </Link>
                <button
                  type="submit"
                  className="btn_cart"
                  // onClick={handleSignIn}
                >
                  Sign In
                </button>
              </form>

              <form action="#" className="sign-up-form">
                <h2 className="title">Sign Up</h2>
                <div className="input-fields">
                <i style={{marginTop:"5px", color:"black"}}><PersonIcon/></i>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    name="Username"
                    placeholder="Username"
                  />
                </div>
                <div className="input-fields">
                <i style={{marginTop:"5px", color:"black"}}><EmailIcon /></i>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="input-fields">
                  <i style={{marginTop:"4px", color:"black"}}><LockIcon/></i>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <div className="input-fields">
                <i style={{marginTop:"4px", color:"black"}}><EnhancedEncryptionIcon /></i>
                  <input
                    type="password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  type="submit"
                  // onClick={handleSignup}
                  className="btn_cart"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here?</h3>
                <button
                  className="btn cart transparent"
                  id="sign-up-btn"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>

            <div className="panel right-panel">
              <div className="content">
                <h3>One of us?</h3>

                <button
                  className="btn cart transparent"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}
export default Login;
