import Link from "next/link";
import React from "react";
import ExpertComp from "./expert-comp/ExpertComp";
import ExpertSec from "./expert-comp/expert-sec/ExpertSec";
import LaunchPage from "./expert-comp/launch-page/LaunchPage";
import EarnMore from "./expert-comp/earn-more/EarnMore";

const Expert = () => {
  return (
    <>
      <section className="coverSec sectionSpace">
        <div className="container">
          <div className="findPage">
            <ul>
              <li>
                <Link href={"/"}>Find People</Link>
              </li>
              <li>
                <Link href={"/expert"} className="active">
                  Join as Expert
                </Link>
              </li>
            </ul>
          </div>
        </div>
          <ExpertComp />
      </section>
      <ExpertSec />
      <LaunchPage />
      <EarnMore />
    </>
  );
};

export default Expert;
