import React from "react";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const AiSearch = () => {
  const data = [
    {
      id: 1,
      name: "category",
      para: "14 Day itinerary for a trip to Vietnam",
    },
    {
      id: 2,
      name: "experience",
      para: "10+ years building and shipping products",
    },
    {
      id: 3,
      name: "expertise",

      para: "Mock interview for a Level 5 Interview at Google",
    },
    {
      id: 4,
      name: "problem",

      para: "Debug my code for Issues",
    },
    {
      id: 5,
      name: "expertise",

      para: "Certified resume writer for job seekers",
    },
    {
      id: 6,
      name: "category",

      para: "Personal branding coach for professionals",
    },
    {
      id: 7,
      name: "experience",

      para: "Experienced AI/ML professional in finance",
    },
  ];

  return (
    <>
      <div className="aiSearchSec sectionSpace">
        <div className="container">
          <div className="aiSearchCard">
            <h2>Still looking? Try our AI Search </h2>
            <div className="form">
              <input
                type="text"
                placeholder="I am looking for Software engineering leader for tech insights"
                className="form-control"
              />
              <button>
                Search <RiArrowRightCircleFill />{" "}
              </button>
            </div>
          </div>
          <div className="searchCards">
            {data.map((item) => {
              return (
                <div className="searchItem" key={item.id}>
                  <span>
                    <FiSearch /> {item.name}
                  </span>
                  <p>{item.para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSearch;
