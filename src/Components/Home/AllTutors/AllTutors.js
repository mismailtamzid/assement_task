import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img1 from "./../../../Assets/images/002-teacher.png";
import img2 from "./../../../Assets/images/001-research.png";
import img3 from "./../../../Assets/images/education 1.png";

const AllTutors = () => {
  return (
    
      <div className="container my-5">
        <h1>
          All Tutors <br />
          Guaranted by e-Tutor
        </h1>
        <br />

        {/* cards */}
        <Row xs={1} md={3}>
          <Col>
            <Card className="allTutorCard text-start">
              <Card.Body>
                <img src={img1} alt="" />
                <br />
                <Card.Title>
                  <br />
                  <h3>Professional Tutors</h3> <br />
                </Card.Title>
                <Card.Text>
                  Et scaevola delicata vix, invidunt indo ctum, quodsi eripuit
                  def niebas at pri. Placerat voluptaria ex mel. Eo malis
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="allTutorCard text-start">
              <Card.Body>
                <img src={img2} alt="" />
                <br />
                <Card.Title>
                  {" "}
                  <br />
                  <h3>Professional Tutors</h3> <br />
                </Card.Title>
                <Card.Text>
                  Et scaevola delicata vix, invidunt indo ctum, quodsi eripuit
                  def niebas at pri. Placerat voluptaria ex mel. Eo malis
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="allTutorCard text-start">
              <Card.Body>
                <img src={img3} alt="" />
                <br />
                <Card.Title>
                  <br />
                  <h3>Professional Tutors</h3> <br />
                </Card.Title>
                <Card.Text>
                  Et scaevola delicata vix, invidunt indo ctum, quodsi eripuit
                  def niebas at pri. Placerat voluptaria ex mel. Eo malis
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
  );
};

export default AllTutors;
