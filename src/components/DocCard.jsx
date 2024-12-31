import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from 'axios'
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../AuthContext";
import "react-toastify/dist/ReactToastify.css";
import TimeSlotPicker from "../components/TimeSlotPicker";
import { jwtDecode } from "jwt-decode";

const DocCard = ({ docId, docName, docImage, dept, yrsOfExp, fees }) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(0);
  const [responseId, setResponseId] = useState("")
  const [appointmentDate, setAppointmentDate] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(fees);

  const { isAuthenticated } = useContext(AuthContext);

  const token = localStorage.getItem("jwtToken") || "";
  let userId = null;
  if(token) {
  const decodedToken = jwtDecode(token);
  userId= decodedToken.userId;
}
  // Apply discount based on consultation rules
  const applyDiscount = async (amount, yearsOfExp) => {
    try {
      setLoading(true);
      const isFirstConsultation = await checkFirstConsultation(userId, docId);
      if (isFirstConsultation && yearsOfExp < 5) {
        console.log("Applying 30% discount...");
        return amount - amount * 0.3; // Apply 30% discount
      }
      console.log("No discount applied");
      return amount;
    } catch (err) {
      setError("Error applying discount");
      return amount; // Return original amount on error
    } finally {
      setLoading(false);
    }
  };

  // Check if this is the user's first consultation with the doctor
  const checkFirstConsultation = async (userId, doctorId) => {
    try {
      const response = await axios.get(`http://localhost:6005/api/consultation/user/${userId}/doctor/${doctorId}`, {
        // params: { userId, doctorId },
      });
      console.log(response.data.isFirstConsultation); 
      return response.data.isFirstConsultation;
    } catch (error) {
      console.error("Error checking first consultation:", error);
      return false; // Default to no discount if error occurs
    }
  };

  // Get the discounted amount when component mounts or dependencies change
  useEffect(() => {
    const fetchDiscountedAmount = async () => {
      const Amount = await applyDiscount(fees, yrsOfExp);
      setDiscountedAmount(Amount);
    };
    fetchDiscountedAmount();
  }, [discountedAmount, yrsOfExp, userId, docId]);

  // Handle Razorpay payment
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Create Razorpay order
  const createRazorpayOrder = (amount) => {
    const data = JSON.stringify({
      amount: amount * 100,
      currency: "INR",
    });

    axios.post("http://localhost:6005/orders", data, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      handleRazorpayScreen(response.data.amount);
    })
    .catch((error) => console.error("Error creating Razorpay order:", error));
  };

  // Handle Razorpay screen
  const handleRazorpayScreen = async (amount) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Error loading Razorpay.");
      return;
    }

    const options = {
      key: 'rzp_test_DSzFk0Dp7MK46c',
      amount: amount,
      currency: 'INR',
      name: "MediManage",
      description: "Payment to MediManage",
      image: "https://papayacoders.com/demo.png",
      handler: function (response) {
        makeAppointment();
        setResponseId(response.razorpay_payment_id);
      },
      prefill: {
        name: "MediManage",
        email: "shivangisinghpal05@gmail.com",
      },
      theme: { color: "#F4C430" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };





  // Handle appointment booking
  const makeAppointment = async () => {
    if (!selectedDoc || !appointmentDate || !timeSlot) {
      alert("Please select doctor, date, and time slot.");
      return;
    }
     const  doctorId = selectedDoc;
    const appointmentData = { userId, doctorId:selectedDoc , date: appointmentDate, timeSlot };
    
    try {
      const response = await fetch("http://localhost:6005/api/appointments/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });

      // if (response.ok) {
        await axios.post(`http://localhost:6005/api/consultation/user/${userId}/doctor/${doctorId}`);
        toast.success("Appointment booked successfully!");
        resetAppointmentForm();
      // } else {
      //   alert("Failed to book appointment.");
      // }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("An error occurred while booking the appointment.");
    }
  };




  // Reset appointment form
  const resetAppointmentForm = () => {
    setSelectedDoc(null);
    setAppointmentDate("");
    setTimeSlot("");
  };

  // Show appointment modal
  const handleAppointmentClick = (docId) => {
    if (!isAuthenticated) {
      toast.error("Please log in to book an appointment.");
      return;
    }
    setSelectedDoc(docId);
    setShow(true);
  };

  // Close modal
  const handleClose = () => setShow(false);

  // Handle form inputs
  const handleDateChange = (e) => setAppointmentDate(e.target.value);
  const onSelectSlot = (e) => setTimeSlot(e.target.value);


  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full boxShadow">
      <img src={docImage} alt="doctor" className="w-[280px] h-[280px] rounded-xl" />
      <div className="mt-8 flex justify-start gap-2.5">
        <p className="font-montserrat text-xl text-rose font-medium">{dept}</p>
      </div>
      <h3 className="text-limegreen text-xl mt-2 font-semibold">{docName}</h3>
      <p className="text-2xl text-coral-red">{yrsOfExp}+ yrs</p>
      <p className="text-sm text-coral-red">
        {yrsOfExp < 5 && discountedAmount < fees ? (
          <>
            <span className="line-through text-gray-500">₹{fees}</span>
            <span className="text-green-600">₹{discountedAmount}</span> (30% Off)
          </>
        ) : (
          <span>₹{fees}</span>
        )}
      </p>

      <Button className="bg-green text-lg" onClick={() => handleAppointmentClick(docId)}>
        Book Appointment
      </Button>

      {/* Modal for appointment booking */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Date</Form.Label>
              <Form.Control type="date" value={appointmentDate} onChange={handleDateChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select a time slot</Form.Label>
              <TimeSlotPicker onSelectSlot={onSelectSlot} />
            </Form.Group>
            <Form.Control size="sm" type="text" placeholder="Add a Note" />
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Confirm" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => createRazorpayOrder(discountedAmount)}>
            {yrsOfExp < 5 ? "Pay Discounted Fee" : "Pay Now"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DocCard;