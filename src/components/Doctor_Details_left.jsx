import React, { useState } from 'react';
import './book_appointments.css';
import { LuGraduationCap } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import Modal from './Modal';

function Details_left(props) {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (date, time) => {
        console.log(`Date: ${date}, Time: ${time}`);
        // Add your submission logic here
    };

    return (
        <div className="left">
            <div className="leftTop">
                <img className='doctorImage' src={props.gender === 'female' ? './src/images/female_doctor.png' : './src/images/male_doctor.png'} alt="" />
                <div className="imagediv2">
                    <h3 style={{marginBottom:'0'}}><b>{props.name}</b></h3><br />
                    <div><LuGraduationCap /> {props.experience} of experience
                        <p><SlLocationPin /> {props.location}</p>
                        <p className='specialist'><b>{props.speciality}</b></p>
                        <button className='bookbtn' onClick={() => setShowModal(true)}>
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
            <div className="About">
                <h5><b>About Me</b></h5>
                <p>{props.about}</p>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} handleSubmit={handleSubmit} />
        </div>
    );
}

export default Details_left;
