import React,{ useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../AuthContext";
import "react-toastify/dist/ReactToastify.css";
import TimeSlotPicker from "../components/TimeSlotPicker";
import { jwtDecode } from "jwt-decode";


const DocCard = ({docId, docName,docImage,dept, yrsOfExp , address}) => {
  const { isAuthenticated } = useContext(AuthContext);
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwtDecode(token);// Decodes the token
  const userId = decodedToken.userId; // Extract the userId from the decoded token
  

  const [selectedDoc, setSelectedDoc] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [show, setShow] = useState(false);

  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
    console.log(token)
    console.log(decodedToken)
    console.log(userId)
  };
  const onSelectSlot = (e) => {
    setTimeSlot(e.target.value);
  };
  const handleClose = () => setShow(false);

  const handleAppointmentClick = (id )=> {
    console.log("isAuthenticated:", isAuthenticated);
    if (!isAuthenticated) {
      toast.error("Please log in to book an appointment.");
      return; // Stop here if the user is not authenticated
    }
    setShow(true)
    setSelectedDoc(id);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
      
    if ( !selectedDoc || !appointmentDate || !timeSlot) {
      alert("Please select a doctor, date, and time slot.");
      return;
    }
  
  const appointmentData = {
    userId: userId,
    doctorId: selectedDoc,
    date: appointmentDate,
    timeSlot: timeSlot,
  };

  try {
    // Send POST request to your backend
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/appointments/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (response.ok) {
      toast.success("Appointment booked successfully!");
      // Clear the form after submission
      setSelectedDoc(null);
      setAppointmentDate("");
      setTimeSlot("");
    } else {
      alert("Failed to book appointment.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while booking the appointment.");
  }
};
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full boxShadow">
      <img src={docImage} alt="" className="w-[280px] h-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
         <p className="font-montserrat leading-normal text-xl text-rose font-medium">{dept}</p>
      </div>
      <h3 className="text-limegreen text-xl mt-2 leading-normal font-semibold">{docName}</h3>
      <p className=" text-2xl text-coral-red">{yrsOfExp}+ yrs</p>
      <p className=" text-lg text-coral-red">{address}</p>
 
      {/* Your appointment-related content goes here */}
          <Button className="bg-green text-lg" onClick={() => handleAppointmentClick(docId)}>
            Book Appointment
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop = "static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Book Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter Date" onChange={handleDateChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Select a time slot</Form.Label>
                  <TimeSlotPicker onSelectSlot= {onSelectSlot}/>
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
              <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
          </Modal>
      
    </div>

  );
};

export default DocCard;