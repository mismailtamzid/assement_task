import React from "react";
import { Card, Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const FindSingleTutor = (props) => {
  const { img, rating, TeacherName, price, completed, subject } = props.tutor;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img
            className="p-3"
            width="318px"
            height="349px"
            variant="top"
            src={img}
          />
          <Card.Body className="p-3">
            <Card.Title>
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="text-start fs-4">{TeacherName}</h4>
                  <p className="fw-normal fs-4">Expert in {subject}</p>
                </div>
                <p>
                  ({rating}) <AiFillStar className="text-warning" />
                  <AiFillStar className="text-warning" />
                  <AiFillStar className="text-warning" />
                  <AiFillStar className="text-warning" />
                  <AiFillStar />
                </p>
              </div>
              <hr />
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-normal fs-4">{completed}+ Students</p>
                <p className="fw-normal fs-4">
                  <span className="fs-3 fw-bold">${price}</span>/h
                </p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default FindSingleTutor;
