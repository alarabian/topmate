import React from "react";
import PeopleFilter from "./people-filter/PeopleFilter";
import InterviewCard from "./interview-card/InterviewCard";
import ResumeCard from "./resume-card/ResumeCard";
import AiSearch from "./ai-search/AiSearch";

const FindPeople = () => {
  return (
    <>
      <div className="findPeople">
        <div className="HomeTitle">
          <h1>Connect with World’s Best Experts </h1>
        </div>
        <PeopleFilter />
        <InterviewCard />
        <ResumeCard />
        <InterviewCard />
        <ResumeCard />
        <InterviewCard />
        <ResumeCard />
        <AiSearch />
      </div>
    </>
  );
};

export default FindPeople;
