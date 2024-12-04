import Image from "next/image";
import React from "react";
const data = [
  {
    id: "1",
    url: "/assets/images/service-desktop-1.svg",
  },
  {
    id: "2",
    url: "/assets/images/service-desktop-2.svg",
  },
  {
    id: "3",
    url: "/assets/images/service-desktop-3.svg",
  },
  {
    id: "4",
    url: "/assets/images/service-desktop-4.svg",
  },
  {
    id: "5",
    url: "/assets/images/service-desktop-5.svg",
  },
  {
    id: "6",
    url: "/assets/images/service-desktop-6.svg",
  },
];
const EarnMore = () => {
  return (
    <>
      <div className="earnMore sectionSpace bgGray">
        <div className="container">
          <div className="expertTitle">
            <h2>Creators earn more on topmate</h2>
          </div>
          <div className="earnCard">
            {data.map((item) => {
              return <div className="earnItem" key={item.id}>
                <Image src={item.url} width={350} height={300} alt="Earn" ></Image>
              </div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EarnMore;
