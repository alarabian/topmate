import Image from "next/image";
import React from "react";
import { BsSave2 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

const Courses = () => {
  const services = [
    {
      id: 1,
      url: "/assets/images/course1.avif",
      name: "The Art of Data Structures and Algorithms",
      desc: "Master DSA with step-by-step solutions & visual guides.",
      scale: "",
      price: 399,
      tag: "Best Seller",
      currency: "₹",
      rating: "5",
    },
    {
      id: 2,
      url: "/assets/images/course2.avif",
      name: "The Art of Operating System",
      desc: "Launching my Book The Art of Operating System📚",
      scale: "97",
      price: 0,
      currency: "₹",
      rating: "4.8",
      tag: "popular",
    },
  ];
  return (
    <>
      <div className="courseSec callMeetingCard">
        {services.map((item) => {
          return (
            <div className="callMeetingItem" key={item.id}>
              <div className="figure">
                <Image src={item.url} width={300} height={300} alt="Figure" />
                <div className="rating">
                  <span>
                    {item.rating} <FaStar />
                  </span>
                  {item.tag && <span>{item.tag}</span>}
                </div>
              </div>
              <h5>{item.name}</h5>
              <p>{item.desc}</p>
              <div className="timeIntro">
                <div className="time">
                  <div className="icon">
                    <BsSave2 />
                  </div>
                  <div className="text">
                    <strong>Courses</strong>
                    <span>{item.scale} Scales</span>
                  </div>
                </div>
                <div className="price">
                  {item.currency}
                  <span>{item.price}</span>
                  <LuArrowRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
