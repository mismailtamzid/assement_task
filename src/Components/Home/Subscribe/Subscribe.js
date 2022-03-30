import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';

const Subscribe = () => {
    return (
      <div className="container">
        <div className="bg-warning d-flex justify-content-between align-items-center px-5 py-3 rounded">
          <h1>Subscribe Our Newsletters</h1>
          <div className="">
            {/* <form>
              <InputGroup className="mb-3">
                <input
                  className="subscribeInput"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
            </form> */}
                    
<form action="" class="newsletter-form">
        <div class="form-group">
                <input placeholder="Enter your mail" type="text" class="form-control" />
        </div>
        <button class="btn mybtn2">
                <span class="text-white"> Subscribe Now</span>
                <i class="far fa-paper-plane"></i>
        </button>
</form>
     </div>
        </div>
      </div>
    );
};

export default Subscribe;