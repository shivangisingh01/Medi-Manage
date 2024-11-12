import React, { useState } from 'react';
import FormSelect from 'react-bootstrap/esm/FormSelect';

const TimeSlotPicker = ({onSelectSlot}) => {
  const startTime = 10; // 10 AM
  const endTime = 18; // 6 PM
  const interval = 30; // 30 minutes

  const generateTimeSlots = () => {
    const slots = [];
    let currentTime = new Date();
    currentTime.setHours(startTime, 0, 0); 
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
      <FormSelect aria-label="Default select example" onChange={onSelectSlot}>
      {timeSlots.map((slot, index) => (
          <option key={index} value={slot}>{slot}</option>
        ))}
    </FormSelect>
    </div>
  );
};

export default TimeSlotPicker;
