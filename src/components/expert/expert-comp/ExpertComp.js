import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import ExpertCards from "./expert-cards/ExpertCards";

const ExpertComp = () => {
  return (
    <>
      <div className="findPeople">
        <div className="container">
          <div className="HomeTitle">
            <h1>Be Instantly Accessible</h1>
            <p>
              Manage and monetise every interaction, from hosting 1:1
              conversations and webinars to answering questions, selling digital
              products and much more
            </p>
            <Link href={"/signup"}>
              Start my Page <GoArrowRight />
            </Link>
          </div>
          <ExpertCards />
        </div>
      </div>
    </>
  );
};

export default ExpertComp;
