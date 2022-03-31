import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';

const Subscribe = () => {
    return (
      <div className="container">
        <div className="bg-warning p-5 rounded">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-12 col-md-6 text-light text-start ">
              <h1 className='text-light'>Subscribe <br /> Our Newsletters</h1>
            </div>
            <div className="col-md-6">
              <div className="bg-light p-2 rounded col-12 ">
                <InputGroup>
                  <FormControl
                    className="border-0 p-1 fs-4"
                    placeholder="Enter your email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    className="border-0 text-light"
                    variant="warning"
                    id="button-addon2"
                  >
                    Subscribe Now
                  </Button>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Subscribe;