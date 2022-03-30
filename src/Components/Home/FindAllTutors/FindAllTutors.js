import React, { useEffect, useState } from "react";
import { Card, Col, Dropdown, ListGroupItem, Row } from "react-bootstrap";
import FindSingleTutor from "../FindSingleTutor/FindSingleTutor";


const FindAllTutors = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, []);
  return (
    <>
      <div className="container mb-5">
        <p className="title titleText my-5">Find the right tutors for you</p>

        <div className="all-inputs">
          <input type="text" className="input" placeholder="Enter Subject" />
          <input type="text" className="input" placeholder="Zip code" />
          <input type="text" className="input" placeholder="All Groups" />
          {/*  */}
          <Dropdown className="mb-5">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="input dropdown-input"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         
        </div>

        {/* cards */}
        <div className="cards">
          <Row xs={1} md={3} className="g-4">
            {tutors.map(tutor =><FindSingleTutor key={tutor?.id} tutor={tutor}></FindSingleTutor>)}
          </Row>
          <button className="bannerButton my-5">View More</button>
        </div>
      </div>
    </>
  );
};

export default FindAllTutors;
