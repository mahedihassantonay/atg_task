import React from "react";
import Body from "./Body";

const Headers = () => {
  return (
    <Body>
      <div className="d-none d-lg-block mt-5 d-lg-block flex justify-content-between align-align-items-center">
        <div className="d-flex gap-3 text-black-50 ">
          <span className="fw-bold">All Posts(32)</span>
          <span>Article</span>
          <span>Event</span>
          <span>Education</span>
          <span>Job</span>
        </div>

        <div className="d-flex gap-2 ">
          <button className="btn btn-secondary">Write a Post</button>
          <button className="btn btn-primary">Join Group</button>
        </div>
      </div>

      <div className="d-lg-none p-2 mt-5 d-flex justify-content-between align-align-items-center">
        
          <h1 className="fs-2 fw-bold">Posts(32)</h1>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter : All
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Article
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Event
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Job
                </a>
              </li>
            </ul>
          </div>
        
      </div>
      <hr className="d-none d-lg-block" />
    </Body>
  );
};

export default Headers;
