import './suggestions.css';

function Doctors(props) {
    const handleClick = () => {
        props.onSelect();
    };

    return (
        <div className="container" onClick={handleClick}>
            <div className="leftContainer">
                {props.gender === "female" ? <img src="./src/images/female_doctor.png" alt="" /> : <img src="./src/images/male_doctor.png" alt="" />}
            </div>
            <div className="rightContainer">
                <p className='special'><b>{props.speciality}</b></p>
                <div><b>{props.name}</b><div style={{ color: 'rgb(25, 69, 140)' }}><b>{props.experience}</b></div></div>
            </div>
        </div>
    );
}

export default Doctors;
