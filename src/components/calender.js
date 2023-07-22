import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './ResponsiveCalendar.css'; // Create this CSS file to style the calendar

const ResponsiveCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <div className="date-picker-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
    </div>
  );
};

export default ResponsiveCalendar;
