import React, { createRef } from 'react';
import PropTypes from 'prop-types';

// == import externals libraries
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

import { ChevronLeft, ChevronRight } from 'react-feather';

// == Import css
import './visitorCalendar.scss';

// == VisitorCalendar Component
// == props from initial state visitorCalendarReducer
const VisitorCalendar = ({
  view,
  daynames,
  startDayOfWeek,
  myTheme,
  plantsSchedules,
  isReadOnly,
  plantsCalendars,
}) => {
  const calendarRef = createRef();

  // == get current date to display on the top of calendar
  const currentDate = new Date();
  const currentMonthAndYear = currentDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: 'long',
  });

  // == functions to dynamise buttons today prev and next month
  // == and display date on the top of calendar
  const handleClickTodayButton = () => {
    const calendarInstance = calendarRef.current.getInstance();
    calendarInstance.today();
    const getDate = document.querySelector('.visitorCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickPrevButton = () => {
    const calendarInstance = calendarRef.current.getInstance();
    calendarInstance.prev();
    const getDate = document.querySelector('.visitorCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickNextButton = () => {
    const calendarInstance = calendarRef.current.getInstance();
    calendarInstance.next();
    console.log(calendarInstance);
    const getDate = document.querySelector('.visitorCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };
  const handleOptionSelect = () => {
    const calendarInstance = calendarRef.current.getInstance();
    const getOptionValue = document.querySelector('.visitorCalendarSelectRegion').value;
    console.log(calendarInstance);
    switch (getOptionValue) {
      case 0:
        return calendarInstance.getSchedule(0);
      default:
        return calendarInstance;
    }
  };

  return (
    <div className="visitorCalendar">
      <div className="visitorCalendar-buttonsTodayMonth">
        <select className="visitorCalendarSelectRegion" onChange={handleOptionSelect}>
          <option value="">Choisis ta région!</option>
          <option value="0">Auvergne-Rhône-Alpes</option>
          <option value="1">Bretagne</option>
        </select>
        {/* click to access to next or prev month or today */}
        <button type="button" className="visitorCalendar-buttonsTodayMonth-button" onClick={handleClickTodayButton}>Today</button>
        <button type="button" className="visitorCalendar-buttonsTodayMonth-button" onClick={handleClickPrevButton}>
          <ChevronLeft size={12} />
        </button>
        <button type="button" className="visitorCalendar-buttonsTodayMonth-button" onClick={handleClickNextButton}>
          <ChevronRight size={12} />
        </button>
        <p className="visitorCalendar-currentMonth">{currentMonthAndYear}</p>
      </div>
      <Calendar
      // == i have to understand better this calendarRef
        ref={calendarRef}
      // == view monthly
        view={view}
      // == calendar options
        month={{
          daynames: daynames,
          startDayOfWeek: startDayOfWeek,
        }}
        // == layout calendar and schedules
        theme={myTheme}
        // == plants schedules data
        schedules={plantsSchedules}
        // == plants calendars data
        calendars={plantsCalendars}
        // == possible or not to click on calendar or schedules (boolean)
        isReadOnly={isReadOnly}
      />
    </div>
  );
};

VisitorCalendar.propTypes = {
  view: PropTypes.string.isRequired,
  daynames: PropTypes.array.isRequired,
  startDayOfWeek: PropTypes.number.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  // myTheme: PropTypes.arrayOf(
  //   PropTypes.shape({
  //   }).isRequired,
  // ).isRequired,
};

// == Export
export default VisitorCalendar;
