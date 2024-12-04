"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import FindPeople from "./find-people/FindPeople";

const Home = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <section className="coverSec sectionSpace">
        <div className="container">
          <div className="findPage">
            <ul>
              <li>
                <Link href={"/"} className="active">Find People</Link>
              </li>
              <li>
                <Link href={"/expert"}>Join as Expert</Link>
              </li>
            </ul>
          </div>
        <FindPeople />
        </div>
      </section>
    </>
  );
};

export default Home;
