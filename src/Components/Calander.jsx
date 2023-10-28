import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
const Calander = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (delta) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + delta);
    setCurrentDate(newDate);
  };

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(month, year);

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="border  p-2"></div>);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(
      <Link to={`/day/${i}`} key={i}>
          <div className="border-2 border-[#9d846191] p-2 cursor-pointer ">
            {i}
          </div>
      </Link>
       
      );
    }
    return days;
  };

  return (
    <div className="p-4 mx-8 my-20">
      <div className="flex justify-evenly mb-14">
      <button onClick={() => changeMonth(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} className="text-2xl"/>
      </button>

        <h2 className="text-2xl font-display text-black underline">
        <FontAwesomeIcon icon={faCalendar} className="mr-4"/>
          {currentDate.toLocaleString('default', { month: 'long' })}{' '}
          {currentDate.getFullYear()}
        </h2>
        <button onClick={() => changeMonth(1)}>
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl"/>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 font-bold mb-3 text-lg text-black mx-2">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2">{renderCalendar()}</div>
    </div>
  );
};

export default Calander;
