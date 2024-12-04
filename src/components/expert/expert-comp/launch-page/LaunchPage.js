import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";

const LaunchPage = () => {
  return (
    <>
      <div className="expertSec sectionSpace bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="expertSecImg">
                <Image
                  src={"/assets/images/feature-1.svg"}
                  width={500}
                  height={400}
                  alt="Topmate"
                ></Image>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="expertSecTitle">
                <h3>
                  Create your Topmate page in a<span>flash</span>
                </h3>
                <p>
                  Start earning $$ by the time you finish reading our website
                </p>

                <Link href="/" className="bg-white text-black">
                  Launch Page <BsFillSendFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchPage;
