import React from "react";
import { RiArrowRightCircleFill } from "react-icons/ri";

const FilterModal = () => {
  const data = [
    {
      id: 1,
      name: "Mock Interview",
      list: [
        "Technical coding interview practice needed",
        "System design interview preparation",
        "HR round interview simulation",
        "Data structures algorithm mock test",
        "Product manager case study practice",
        "Behavioral interview preparation",
        "Leadership scenario mock discussion",
        "Mock startup pitch practice vv",
      ],
    },
    {
      id: 2,
      name: "Resume Review",
      list: [
        "Software engineer resume feedback",
        "Data scientist CV optimization",
        "Product manager resume review",
        "LinkedIn profile enhancement",
        "Portfolio website feedback",
        "Cover letter review needed",
        "GitHub profile optimization",
        "Achievement section improvement",
      ],
    },
    {
      id: 3,
      name: "Career Guidance",
      list: [
        "Software career path guidance",
        "Data science roadmap planning",
        "Tech stack selection advice",
        "Switching to product management",
        "Startup vs corporate guidance",
        "Salary negotiation strategies",
        "Remote work transition help",
        "Career growth planning",
      ],
    },
    {
      id: 4,
      name: "Software",
      list: [
        "Technical coding interview practice needed",
        "System design interview preparation",
        "HR round interview simulation",
        "Data structures algorithm mock test",
        "Product manager case study practice",
        "Behavioral interview preparation",
        "Leadership scenario mock discussion",
        "Mock startup pitch practice",
      ],
    },
    {
      id: 5,
      name: "Product",
      list: [
        "Software engineer resume feedback",
        "Data scientist CV optimization",
        "Product manager resume review",
        "LinkedIn profile enhancement",
        "Portfolio website feedback",
        "Cover letter review needed",
        "GitHub profile optimization",
        "Achievement section improvement",
      ],
    },
    {
      id: 6,
      name: "Data",
      list: [
        "Software career path guidance",
        "Data science roadmap planning",
        "Tech stack selection advice",
        "Switching to product management",
        "Startup vs corporate guidance",
        "Salary negotiation strategies",
        "Remote work transition help",
        "Career growth planning",
      ],
    },
  ];
  return (
    <>
      <div className="filterModal">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="searchArea">
                  <input
                    type="text"
                    placeholder="I am looking for Software engineering leader for tech insights"
                    className="form-control"
                  />
                  <button>
                    Search <RiArrowRightCircleFill />
                  </button>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-3">
                    <div
                      className="nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      {data.map((item) => {
                        return (
                          <button
                            key={item.id}
                            className="nav-link"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                          >
                            {item.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                        tabIndex={0}
                      >
                        <div className="modalBody">
                          <ul>
                            {data.map((item) => {
                              return item.name === "Mock Interview"
                                ? item.list.map((text, i) => {
                                    return <li key={i}>{text}</li>;
                                  })
                                : "";
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
