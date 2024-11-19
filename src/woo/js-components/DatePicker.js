import React, { useState, useRef, useEffect } from 'react';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
    const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
    const [calendarVisible, setCalendarVisible] = useState(false);
    const calendarRef = useRef();

    // Toggle calendar visibility
    const toggleCalendar = () => {
        setCalendarVisible(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        // Close the calendar if clicking outside of it
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setCalendarVisible(false);
        }
    };

    useEffect(() => {
        // Add and remove click outside listener for closing the calendar
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => {
            const newMonth = prevMonth - 1;
            if (newMonth < 0) {
                setCurrentYear((prevYear) => prevYear - 1);
                return 11;  // December
            }
            return newMonth;
        });
    };
    
    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => {
            const newMonth = prevMonth + 1;
            if (newMonth > 11) {
                setCurrentYear((prevYear) => prevYear + 1);
                return 0;  // January
            }
            return newMonth;
        });
    };

    const handleDateClick = (day) => {
        const newSelectedDate = new Date(currentYear, currentMonth, day);
        // Adjust the time to 12:00 to prevent time zone issues
        newSelectedDate.setHours(12, 0, 0, 0);
        setSelectedDate(newSelectedDate);
        setCalendarVisible(false);  // Close the calendar after date selection
    };

    const renderCalendarDays = () => {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();

        const days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                selectedDate.getFullYear() === currentYear &&
                selectedDate.getMonth() === currentMonth &&
                selectedDate.getDate() === day;

            days.push(
                <div
                    key={day}
                    className={`calendar-day ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    // Format the selected date for display in input field (YYYY-MM-DD)
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month as getMonth() is 0-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="date-picker" ref={calendarRef}>
            <i className="fas fa-calendar-alt"></i>
            <input
                type="text"
                className="date-input"
                placeholder="Select date"
                readOnly
                value={formatDate(selectedDate)}  // Use custom format function to ensure correct date display
                onClick={toggleCalendar}
            />
            {calendarVisible && (
                <div className="calendar">
                    <div className="calendar-header">
                        <button id="prev-month" onClick={handlePrevMonth}>
                            &lt;
                        </button>
                        <span id="month-year">
                            {`${new Date(currentYear, currentMonth).toLocaleString('default', {
                                month: 'long',
                            })} ${currentYear}`}
                        </span>
                        <button id="next-month" onClick={handleNextMonth}>
                            &gt;
                        </button>
                    </div>
                    <div className="calendar-days" id="calendar-days">
                        {renderCalendarDays()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatePicker;
