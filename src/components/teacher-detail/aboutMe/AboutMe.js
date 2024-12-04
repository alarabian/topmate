import React from "react";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMe">
        <h2>About Me</h2>
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
            <li>
              <Link href="/">
              <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <p>
          I have a very good working knowledge of C, C++, Python, Go Lang, C#,
          Distributed System, Data Structure, Algorithm, System Design,
          Kubernetes, Docker, Linux Operating System, vSAN, VMware vSphere( ESXi
          ).
        </p>
        <p>
          Specialties: C, C++, Python, Go Lang, Distributed systems, Kubernetes,
          Docker, Storage Management, File Systems, Virtualization, Virtual SAN.
        </p>

        <div className="list">
          <h5>Certification:</h5>
          <ul>
            <li>
              - VMware Certified Professional 6.5 – Data Center Virtualization
            </li>
            <li>- VMware vSphere 6.5 Foundations</li>
            <li>- Teradata 14 Basic Certifications</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
