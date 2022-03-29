import React, { useEffect, useState } from "react";
import { Card, Col, Dropdown, ListGroupItem, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";


const FindTutor = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
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
          {/*  */}
          {/* <input type="text" className="input" placeholder="Find Now" /> */}
        </div>

        {/* cards */}
        <div className="cards">
          <Row xs={1} md={3} className="g-4">
            {cards.map((card) => (
              <Col>
                <Card>
                  <Card.Img
                    className="p-3"
                    width="318px"
                    height="349px"
                    variant="top"
                    src={card?.img}
                  />
                  <Card.Body className="p-3">
                    <Card.Title>
                      {" "}
                      <div className="d-flex justify-content-between">
                        <div>
                          {" "}
                          <h4 className="text-start fs-4">
                            {card?.TeacherName}
                          </h4>
                          <p className="fw-normal fs-4">
                            Expert in {card?.subject}
                          </p>
                        </div>
                        <p>
                          ({card?.rating}){" "}
                          <AiFillStar className="text-warning" />
                          <AiFillStar className="text-warning" />
                          <AiFillStar className="text-warning" />
                          <AiFillStar className="text-warning" />
                          <AiFillStar />
                        </p>
                      </div>{" "}
                      <hr />
                    </Card.Title>
                    <Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-normal fs-4">
                          {card?.completed}+ Students
                        </p>
                        <p className="fw-normal fs-4">
                          <span className="fs-3 fw-bold">${card?.price}</span>/h
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <button className="bannerButton my-5">View More</button>
        </div>
      </div>
    </>
  );
};

export default FindTutor;
