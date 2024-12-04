import Link from "next/link";
import React from "react";

import { FaFacebookSquare, FaApple } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const Signup = () => {
  return (
    <>
      <div className="login sectionSpace bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="loginCard">
                <div className="signBook">
                  <h3>Create your page </h3>
                  <p>Not an Expert? Search for professionals on </p>
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
                    </div>
                  </div>
                  <form>
                    <div className="form-group">
                      <select className="form-select">
                        <option value="india(+91)">India(+91)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="mail"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>
                  </form>
                  <div className="privacy">
                    <span>
                      By Signing up, you agree to our{" "}
                      <Link href={"/"}>Terms of Use</Link> and Privacy Policy
                      <Link href={"/"}>Privacy Policy</Link>
                    </span>
                  </div>
                  <div className="form-group">
                    <button className="continueButton">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loginFigure">
                <Image
                  src={"/assets/images/computer-login.avif"}
                  alt="Signup"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
