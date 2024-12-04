import Link from "next/link";
import React from "react";

import { FaFacebookSquare, FaApple } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <div className="login sectionSpace bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="loginCard">
                <div className="signBook">
                  <h4>Log in or sign up to book</h4>
                  <form>
                    <div className="form-group">
                      <select className="form-select">
                        <option value="india(+91)">India(+91)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        placeholder="Phone number"
                        className="form-control"
                      />
                    </div>
                  </form>
                  <div className="privacy">
                    <span>
                      We’ll call or text you to confirm your number. Standard
                      message and data rates apply.{" "}
                      <Link href={"/"}>Privacy Policy</Link>
                    </span>
                  </div>
                  <div className="form-group">
                    <button className="continueButton">Continue</button>
                  </div>
                </div>
                <div className="divSee">
                  <Link href={"/signup"}>Create Account</Link>
                </div>
                <div className="socialConnect">
                  <div className="email">
                    <Link href={"/"}>
                      <FaFacebookSquare />
                      Continue with Facebook
                    </Link>
                    <Link href={"/"}>
                      <FcGoogle />
                      Continue with Google
                    </Link>
                    <Link href={"/"}>
                      <FaApple />
                      Continue with Apple
                    </Link>
                    <Link href={"/"}>
                      <MdOutlineMailOutline />
                      Continue with email
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loginFigure">
                <Image src={"/assets/images/login-concept.avif"} alt="Login" width={600} height={600} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
