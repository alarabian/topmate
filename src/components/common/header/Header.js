"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="headerBody">
            <div className="mainLogo">
              <Link href={"/"}>
                {/* <Image
                  src="/assets/images/logo.png"
                  alt="Topmate"
                  width={240}
                  height={41}
                /> */}
                                    <span>Top </span>Mate

              </Link>
            </div>
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
              />
            </div>
            <div className="loginPart">
              <div className="loginItem">
                <Link href={"/login"} className="login">
                  Login
                </Link>
              </div>
              <div className="loginItem">
                <Link href={"/expert"} className="expert">
                  Join as Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
