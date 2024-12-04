import Image from "next/image";
import React from "react";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="footerWidget">
                <div className="mainLogo">
                  {/* <Link href={"/"}>
                    <Image
                      src="/assets/images/logo.png"
                      alt="Topmate"
                      width={240}
                      height={41}
                    />
                  </Link> */}
                  <Link href={"/"}>
                    <span className="text-white">Top </span>Mate
                  </Link>
                </div>
                <div className="social">
                  <ul>
                    <li>
                      <Link href="/">
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <VscTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <AiFillInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footerWidget">
                <ul>
                <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/">Creator report 2022</Link>
                  </li>
                  <li>
                    <Link href="/">Carousel Maker</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright">
                <p>
                  98B, 2nd Floor, Namberdar Estate, Taimoor Nagar, New Friends
                  Colony, New Delhi-110025
                </p>
                <p>@2024 Topmate</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
