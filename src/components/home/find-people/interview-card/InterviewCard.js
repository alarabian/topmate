import Image from "next/image";
import Link from "next/link";
import React from "react";

const InterviewCard = () => {
  const profiles = [
    {
      id: 1,
      name: "Priyanka Banerjee",
      url:"/assets/images/profile1.jpg",
      title: "Data Science Manager @ Novartis",
      expertise: "Pharmaceutical & Finance domain expertise",
      recognition: "Recognised by Google Developer Community",
    },
    {
      id: 2,
      name: "Rajvardhan Oak",
      url:"/assets/images/profile2.jpeg",
      title: "Scientist @ Microsoft",
      education: "Berkeley ‘20",
    },
    {
      id: 3,
      name: "Brie G",
      url:"/assets/images/profile3.jpeg",

      title: "Tech Transition Consultant",
      focus: "Business Analyst & Product Owner roles",
      achievement: "Helped clients earn salaries totaling more than $1,000,000",
    },
    {
      id: 4,
      name: "Ragul Sundaram",
      url:"/assets/images/profile4.JPG",

      title: "Product Management Associate at Zoho",
      roles: ["Product Manager", "Product Marketer", "Content Creator"],
    },
    {
      id: 5,
      name: "ANKIT RAI",
      url:"/assets/images/profile5.png",

      title: "Data Engineer",
      connections: "16k+ connections on LinkedIn",
      roles: [
        "Python Mentor",
        "Big Data Mentor",
        "Python Contributor @BioChemiThon",
      ],
      past_experience: "Content Writer & Reviewer Intern @ GFG",
    },
    // {
    //   id: 6,
    //   name: "Sairam",
    //   url:"/assets/images/profile1.jpg",

    //   title: "Curious Human Being",
    //   previous_role: "Ex- D.E.Sha",
    // },
  ];

  return (
    <>
      <div className="interviewSec sectionSpace">
        <div className="title">
          <h3>
            Mock Interview.
            <Link href="/">See all</Link>
          </h3>
        </div>
        <div className="interviewCard">
          {profiles.map((item) => {
            return (
              <div className="interviewCardItem" key={item.id}>
                <div className="figure">
                  <Link href={"/teacher-detail"}><Image
                    src={item.url}
                    alt="Profile"
                    width={170}
                    height={170}
                  /></Link>
                </div>
                <div className="content">
                  <h6>{item.name}</h6>
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InterviewCard;
