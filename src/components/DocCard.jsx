import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import TimeSlotPicker from "../components/TimeSlotPicker";

const DocCard = ({ docName,docImage,dept, yrsOfExp , address}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full boxShadow">
      <img src={docImage} alt="" className="w-[280px] h-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
         <p className="font-montserrat leading-normal text-xl text-slate-gray ">{dept}</p>
      </div>
      <h3 className="text-slate-gray text-xl mt-2 leading-normal font-semibold">{docName}</h3>
      <p className="font-semibold text-2xl text-coral-red">{dept}</p>
      <p className=" text-2xl text-coral-red">{yrsOfExp}</p>
      <p className=" text-2xl text-coral-red">{address}</p>

      {/* Your appointment-related content goes here */}
          <Button variant="primary" onClick={handleShow}>
            Book Appointment
          </Button>
           
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Book Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter Date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Select a time slot</Form.Label>
                  <TimeSlotPicker />
                </Form.Group>
                <Form.Control size="sm" type="text" placeholder="Add a Note" />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Confirm" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={SubmitEvent}>Submit</Button>
            </Modal.Footer>
          </Modal>
      
    </div>

  );
};

export default DocCard;