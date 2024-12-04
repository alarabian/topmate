import React, { useEffect } from "react";
import { FcFilledFilter } from "react-icons/fc";
import FilterModal from "./filter-modal/FilterModal";

const PeopleFilter = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <div className="peopleFilter">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="peopleFilterCard">
              <ul>
                <li data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <FcFilledFilter />
                  <span>Filter</span>
                </li>
                <li className="dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Featured
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Free Services
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="allPeopleTab">
              <ul>
                <li className="active">All</li>
                <li>Mock Interview</li>
                <li>Resume review</li>
                <li>career guidance</li>
                <li>software</li>
                <li>product</li>
                <li>data</li>
                <li>study abroad</li>
                {/* <li>others</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FilterModal />
    </>
  );
};

export default PeopleFilter;
