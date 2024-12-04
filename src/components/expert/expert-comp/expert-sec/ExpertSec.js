import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";

const ExpertSec = () => {
  return (
    <>
      <div className="expertSec sectionSpace bgGray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="expertSecTitle">
                <h3>
                  Get discovered on Topmate 
                </h3>
                <p>
                  We created hito to help you get discovered by millions of
                  people globally
                </p>
                <Link href="/">Get Listed</Link>
                <Link href="/" className="bg-white text-black">
                  <FiSearch /> Find People
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="expertSecImg">
                <Image
                  src={"/assets/images/hito-desktop.svg"}
                  width={500}
                  height={400}
                  alt="Topmate"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertSec;
