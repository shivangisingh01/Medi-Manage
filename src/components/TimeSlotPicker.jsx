import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const TimeSlotPicker = () => {
  const startTime = 10; // 10 AM
  const endTime = 18; // 6 PM
  const interval = 30; // 30 minutes

  const generateTimeSlots = () => {
    const slots = [];
    let currentTime = new Date();
    currentTime.setHours(startTime, 0, 0); // Start time
    const endTimeDate = new Date();
    endTimeDate.setHours(endTime, 30, 0); // End time with 30 minutes slot

    while (currentTime <= endTimeDate) {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
      slots.push(formattedTime);
      currentTime.setMinutes(currentTime.getMinutes() + interval);
    }

    return slots;
  };

  const [timeSlots, setTimeSlots] = useState(generateTimeSlots());

  return (
    <div>
      
      {/* <select>
        {timeSlots.map((slot, index) => (
          <option key={index} value={slot}>{slot}</option>
        ))}
      </select> */}
      <Form.Select aria-label="Default select example">
      <h3>Select a Time Slot</h3>
      {timeSlots.map((slot, index) => (
          <option key={index} value={slot}>{slot}</option>
        ))}
      {/* <option value="2">Two</option>
      <option value="3">Three</option> */}
    </Form.Select>
    </div>
  );
};

export default TimeSlotPicker;
