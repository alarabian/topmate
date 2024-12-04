import React from "react";
import TeacherIntro from "./teacher-intro/TeacherIntro";
import Testimonial from "./testimonial/Testimonial";
import CallMeeting from "./call-meeting/CallMeeting";
import { LuArrowRight } from "react-icons/lu";
import { BsSendArrowUp } from "react-icons/bs";
import DigitalProduct from "./digital-product/DigitalProduct";
import Courses from "./courses/Courses";
import RatingFeed from "./rating-feed/RatingFeed";
import AboutMe from "./aboutMe/AboutMe";

const TeacherDetail = () => {
  return (
    <>
      <div className="teacherDetailPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
                <TeacherIntro />
            </div>
            <div className="col-lg-8">
              <div className="fullIntro sectionSpace">
                <Testimonial />
                <div className="tabArea">
                  <div
                    className="nav nav-tabs allPeopleTab"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      id="nav-all-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-all"
                      type="button"
                      role="tab"
                      aria-controls="nav-all"
                      aria-selected="false"
                    >
                      All
                    </button>
                    <button
                      id="nav-call-tab"                      
                      className="active"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-call"
                      type="button"
                      role="tab"
                      aria-controls="nav-call"
                      aria-selected="true"
                    >
                      1.1 Call
                    </button>
                    <button
                      id="nav-priority-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-priority"
                      type="button"
                      role="tab"
                      aria-controls="nav-priority"
                      aria-selected="false"
                    >
                      Priority DM
                    </button>
                    <button
                      id="nav-product-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-product"
                      type="button"
                      role="tab"
                      aria-controls="nav-product"
                      aria-selected="false"
                    >
                      Digital Product
                    </button>
                    <button
                      id="nav-courses-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-courses"
                      type="button"
                      role="tab"
                      aria-controls="nav-courses"
                      aria-selected="false"
                    >
                      Courses
                    </button>
                  </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade "
                    id="nav-all"
                    role="tabpanel"
                    aria-labelledby="nav-all-tab"
                    tabIndex={0}
                  >
                    <CallMeeting />
                    <div className="callMeetingItem">
                      <span>Popular</span>
                      <h5>Have a question?</h5>
                      <div className="timeIntro">
                        <div className="time">
                          <div className="icon">
                            <BsSendArrowUp />
                          </div>
                          <div className="text">
                            <strong>Replies in 2 days</strong>
                            <span>Priority DM</span>
                          </div>
                        </div>
                        <div className="price">
                          ₹<span>30</span>
                          <LuArrowRight />
                        </div>
                      </div>
                    </div>
                    <DigitalProduct />
                    <Courses />

                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="nav-call"
                    role="tabpanel"
                    aria-labelledby="nav-call-tab"
                    tabIndex={0}
                  >
                    <CallMeeting />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-priority"
                    role="tabpanel"
                    aria-labelledby="nav-priority-tab"
                    tabIndex={0}
                  >
                    <div className="callMeetingItem">
                      <span>Popular</span>
                      <h4>Have a question?</h4>
                      <div className="timeIntro">
                        <div className="time">
                          <div className="icon">
                            <BsSendArrowUp />
                          </div>
                          <div className="text">
                            <strong>Replies in 2 days</strong>
                            <span>Priority DM</span>
                          </div>
                        </div>
                        <div className="price">
                          ₹<span>30</span>
                          <LuArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-product"
                    role="tabpanel"
                    aria-labelledby="nav-product-tab"
                    tabIndex={0}
                  >
                    <DigitalProduct />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-courses"
                    role="tabpanel"
                    aria-labelledby="nav-courses-tab"
                    tabIndex={0}
                  >
                    <Courses />
                  </div>
                </div>
                <RatingFeed />
                <AboutMe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDetail;
