import React, { useEffect, useState } from "react";
import { Card, Col, Dropdown, DropdownButton, FormControl, InputGroup, ListGroupItem, Row } from "react-bootstrap";
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

        <Row xs={1} md={2} lg={4}>
          <Col className="my-2">
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="Enter Subject"
              type="text"
              className="py-3 fs-4"
            />
          </Col>
          <Col className="my-2">
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="Zip code"
              type="number"
              className="py-3 fs-4"
            />
          </Col>

          {/*  */}
          <Col className="p-5">
            <Dropdown className="dropdown-btn ">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="input dropdown-input "
              >
                All Groups
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="my-2">
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="All Groups"
              type="text"
              className="py-3 fs-4"
            />
          </Col>
        </Row>
        {/* </div> */}

        {/* cards */}
        <div className="cards">
          <Row xs={1} md={2} lg={3} className="g-4">
            {tutors.map((tutor) => (
              <FindSingleTutor key={tutor?.id} tutor={tutor}></FindSingleTutor>
            ))}
          </Row>
          <button className="bannerButton my-5">View More</button>
        </div>
      </div>
    </>
  );
};

export default FindAllTutors;
