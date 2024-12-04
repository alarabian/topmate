import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeCard = () => {
  const profiles = [
    {
      id: 1,
      name: "Melissa Chapman, PMP",
      url: "/assets/images/resume1.jpeg",

      title: "Bilingual Project Manager",
      achievements: ["PMP eBook Author", "Transitioned Teacher"],
    },
    {
      id: 2,
      name: "Akshat Kharbanda",
      url: "/assets/images/resume2.jpg",

      description:
        "Directing you to dream schools and firms (& delivering treats to my dog)",
    },
    {
      id: 3,
      name: "Ankita Gaur",
      url: "/assets/images/resume3.png",

      focus: "Pro-bono Sessions",
      expertise: [
        "Go-to-Market Strategy",
        "Research & Data Analytics",
        "Commercial Strategy Consulting",
        "Healthcare Consulting",
        "Competitive Intelligence",
        "Forecasting",
      ],
    },
    {
      id: 4,
      name: "Mohamed Elshiekh",
      url: "/assets/images/resume4.jpg",

      description: "Ex-Microsoft, Tesla, and Cummins intern",
      focus: "Helping college students land their dream internship 🚀",
    },
    {
      id: 5,
      name: "Sunil Subramanian",
      url: "/assets/images/resume5.jpeg",

      title: "LinkedIn Top Voice | Product Lead - Volvo",
      achievements: [
        "Mentored around 300+ people",
        "Transitioned from Developer to Product Leader",
        "Helps guide people to excel in their careers",
      ],
    },
    // {
    //   id: 6,
    //   name: "Ankan Pal",
    //   url:"/assets/images/resume6.jpg",

    //   description: "Teaching Students from the World's Top Universities ( 🇺🇸 🇦🇺 🇬🇧 )"
    // }
  ];

  return (
    <>
      <div className="interviewSec sectionSpace">
        <div className="title">
          <h3>
            Resume Review.
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
                  <p>
                    {item.title
                      ? item.title
                      : item.description
                      ? item.description
                      : item.focus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResumeCard;
