import Image from "next/image";
import React from "react";

const TeacherIntro = () => {
  return (
    <>
      <div className="teacherIntro">
        <div className="figure">
          <Image
            src={"/assets/images/profile2.jpeg"}
            alt="Santosh Kumar Mishra"
            width={180}
            height={180}
          />
        </div>
        <div className="content">
          <h3>Santosh Kumar Mishra</h3>
          <p>
            Software Engineer at 𝐌𝐢𝐜𝐫𝐨𝐬𝐨𝐟𝐭 | Ex-VMware | Ex-Teradata | NIT
            Tiruchirappalli
          </p>
        </div>
      </div>
    </>
  );
};

export default TeacherIntro;
