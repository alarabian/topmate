import React from "react";
import { SlCalender } from "react-icons/sl";
import { LuArrowRight } from "react-icons/lu";

const services = [
  {
    id: 1,
    name: "Video Meeting",
    duration: "15 mins",
    price: 549,
    currency: "₹",
  },
  {
    id: 2,
    name: "Mock interview",
    duration: "45 mins",
    price: 1299,
    currency: "₹",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Career guidance",
    duration: "30 mins",
    price: 799,
    currency: "₹",
  },
  {
    id: 4,
    name: "Resume review",
    duration: "15 mins",
    price: 699,
    currency: "₹",
  },
  {
    id: 5,
    name: "Interview preparation & Tips",
    duration: "30 mins",
    price: 799,
    currency: "₹",
  },
  {
    id: 6,
    name: "1:1 Mentorship",
    duration: "30 mins",
    price: 799,
    currency: "₹",
  },
];

const CallMeeting = () => {
  return (
    <>
      <div className="callMeetingCard">
        {services.map((item) => {
          return (
            <div className="callMeetingItem" key={item.id}>
              {item.tag ? <span>{item.tag}</span> : <span>New</span>}

              <h5>{item.name}</h5>
              <div className="timeIntro">
                <div className="time">
                  <div className="icon">
                    <SlCalender />
                  </div>
                  <div className="text">
                    <strong>{item.duration}</strong>
                    <span>Video Meeting</span>
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

export default CallMeeting;
