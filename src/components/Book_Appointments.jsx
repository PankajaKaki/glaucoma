import React, { useState } from 'react';
import './book_appointments.css';
import Details_left from './Doctor_Details_left';
import Doctors from './Suggestion';

function BookAppointments() {
    const [selectedDoctor, setSelectedDoctor] = useState({
        name: "Dr. Harry Potter",
        experience: "20 years of experience",
        location: "BTM Layout, Bangalore",
        speciality: "Cardiology",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!"
    });

    const doctorsList = [
        {
            name: "Dr. Harry Potter",
            experience: "20 years",
            location: "BTM Layout, Bangalore",
            speciality: "Cardiology",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!",
            gender: "male"
        },
        {
            name: "Dr. Jane Cooper",
            experience: "10 years",
            location: "MG Road, Bangalore",
            speciality: "Ophthalmologist",
            about: "Experienced Ophthalmologist specializing in eye care and surgery.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!",
            gender: "female"
        },
        {
            name: "Dr. Tom Cook",
            experience: "20 years",
            location: "Indiranagar, Bangalore",
            speciality: "Ophthalmologist",
            about: "Expert in Ophthalmology with 20 years of practice.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!",
            gender: "male"
        },
        {
            name: "Dr. Swadhin",
            experience: "16 years",
            location: "Whitefield, Bangalore",
            speciality: "Ophthalmologist",
            about: "Ophthalmologist with extensive experience in eye care.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!",
            gender: "male"
        },
        {
            name: "Dr. Emma Watson",
            experience: "9 years",
            location: "Koramangala, Bangalore",
            speciality: "Ophthalmologist",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!",
            gender: "female"
        },
        {
            name: "Dr. Tom Cook",
            experience: "20 years",
            location: "Indiranagar, Bangalore",
            speciality: "Ophthalmologist",
            about: "Expert in Ophthalmology with 20 years of practice.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!",
            gender: "male"
        },
        {
            name: "Dr. Swadhin",
            experience: "16 years",
            location: "Whitefield, Bangalore",
            speciality: "Ophthalmologist",
            about: "Ophthalmologist with extensive experience in eye care.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!",
            gender: "male"
        },
        {
            name: "Dr. Emma Watson",
            experience: "9 years",
            location: "Koramangala, Bangalore",
            speciality: "Ophthalmologist",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cupiditate laborum mollitia, non inventore ea libero incidunt quisquam id voluptatum a veniam molestiae praesentium vero, corrupti cum aperiam exercitationem minima!",
            gender: "female"
        }

    ];

    return (
        <div className='main_book'>
            <h1 style={{ color: 'rgb(25, 69, 140)', fontFamily: 'Candara' }}><b>Book an <span style={{ color: 'rgb(232, 157, 16)' }}>Appointment</span></b></h1>
            <div className="details">
                <h3 style={{ paddingLeft: '8px' }}><b>Details</b></h3>
                <div className="both">
                    <Details_left
                        name={selectedDoctor.name}
                        experience={selectedDoctor.experience}
                        location={selectedDoctor.location}
                        speciality={selectedDoctor.speciality}
                        about={selectedDoctor.about}
                        gender={selectedDoctor.gender}
                    />
                    <div className="right">
                        <h4 style={{ color: 'rgb(25, 69, 140)', paddingLeft: '10px' }}><b>Popular Doctors</b></h4>
                        {doctorsList.map((doctor, index) => (
                            <Doctors
                                key={index}
                                name={doctor.name}
                                experience={doctor.experience}
                                speciality={doctor.speciality}
                                gender={doctor.gender}
                                onSelect={() => setSelectedDoctor(doctor)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookAppointments;
