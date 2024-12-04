import Image from "next/image";
import React from "react";
import { BsSave2 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

const DigitalProduct = () => {
  const services = [
    {
      id: 1,
      url: "/assets/images/digital-product1.avif",
      name: "Trees Unlocked- The Complete Handbook",
      desc: "Trees Data Structures Unlocked: The Complete Handbook",
      scale: "702",
      price: 0,
      currency: "₹",
      rating: "4.7",
    },
    {
      id: 2,
      url: "/assets/images/digital-product2.avif",
      name: "Arrays and Matrices Unlocked-The Complete Handbook",
      desc: "Master Arrays and Matrices with this complete guide.",
      scale: "1429",
      price: 0,
      currency: "₹",
      rating: "4.8",
      tag: "popular",
    },
  ];
  return (
    <>
      <div className="digitalProduct callMeetingCard">
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
                    <strong>Digital Product</strong>
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

export default DigitalProduct;
