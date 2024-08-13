import React, { useState } from 'react';
import './modal.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Modal({ showModal, setShowModal, handleSubmit }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const timeSlots = [
        "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
        "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
        "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
        "6:00 PM", "6:30 PM"
    ];

    const onSubmit = () => {
        handleSubmit(selectedDate, selectedTime);
        setShowModal(false);
    };

    if (!showModal) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                <h2 style={{color:'rgb(25, 69, 140)'}}>Book <span style={{color: 'rgb(232, 157, 16)'}}>Appointment</span></h2><br/>
                <div className="modal-body">
                    <div className="datepicker-container">
                        <h5>Select Date:</h5>
                        <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            inline
                        />
                    </div>
                    <div className="timeslot-container">
                        <h5>Select Time Slot:</h5>
                        <div className="timeslots">
                            {timeSlots.map(time => (
                                <button
                                    key={time}
                                    className={`timeslot ${selectedTime === time ? 'selected' : ''}`}
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <textarea placeholder="Additional notes" className="notes"></textarea>
                <div className="modal-buttons">
                    <button onClick={() => setShowModal(false)} className="close-btn">Close</button>
                    <button onClick={onSubmit} className="submit-btn">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
