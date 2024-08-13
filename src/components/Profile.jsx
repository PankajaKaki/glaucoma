import './profile.css';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { FaRegFileImage } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { GrNext } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import {Activity} from "./Patient_activity";
import { Link } from 'react-router-dom';

function Profile(){
    const stylee ={
        "background-color": "white",
        "borderColor": '1px solid white',
        "margin-top" : "10px",
        "margin-left" : "40px",
        "margin-right" : "40px",
        "padding" : "30px",
        "border-radius" : "1em",
    }
    return(
    <div className="profile" style={stylee}>
            <h1 style={{color:'rgb(25, 69, 140)',paddingLeft:'10px'}}>Patient Profile</h1>
        <div className="pdiv">
            <div className="pdiv1">
                <div className="pdiv11">
                <div className="photo">
                    <img src="/James2.png" alt="" />
                    <h3 style={{paddingLeft:"20px"}}>Mr. James</h3>
                </div>
                <div className="contact">
                    <h5><b>Contact Details : </b></h5>
                    <div id='phno'><IoCall style={{fontSize:'20px',color:'rgb(25, 69, 140)'}}/> &nbsp;8465484451</div>
                    <div id='email'><MdEmail style={{fontSize:'20px',color:'rgb(25, 69, 140)'}}/> &nbsp;demo@gmail.com</div>
                    <div id='address'><IoHomeSharp style={{fontSize:'20px',color:'rgb(25, 69, 140)'}}/> &nbsp;BTM Layout, 2nd Stage, Banglore</div>
                </div>
                </div>
                <div className="pdiv12">
                    <h5><b>Any other Diseases : </b></h5>
                    <li>Diabatics</li>
                    <li>Asthama</li>
                    <li>Cancer</li>
                    <li>Endocrice Disease</li>
                </div>
            </div>
            <div className="pdiv2">
                <div className="pdiv21">
                    <h4>Overview : </h4>
                    <div className="pdiv211">
                        <div className="over">
                            <div className='first'>Gender :</div>
                            <div>Male</div>
                        </div>
                        <div className="over">
                            <div className='first'>Date of Birth :</div>
                            <div>01/01/2001</div>
                        </div>
                        <div className="over">
                            <div className='first'>Marital Status :</div>
                            <div>Unmarried</div>
                        </div>
                    </div>
                    <div className="pdiv212">
                        <div className="over">
                            <div className='first'>Previous Visit :</div>
                            <div>20/07/2024</div>
                        </div>
                        <div className="over">
                            <div className='first'>Next Visit :</div>
                            <div>01/09/2024</div>
                        </div>
                        <div className="over">
                            <div className='first'>Allergies :</div>
                            <div>Some Allergies</div>
                        </div>
                    </div>
                </div>
                <div className="pdiv22">
                    <div className="boxes">
                        <Activity 
                            title="Book Appointments" 
                            icon={<SlCalender style={{fontSize:'25px',color:'rgb(210, 146, 29)'}}/>}
                            link="/book-appointment"
                        />
                        <Activity
                            title="History"
                            icon={<FaHistory style={{ fontSize: '25px', color: 'rgb(210, 146, 29)' }} />}
                            link="/history"
                        />
                        <Activity 
                            title="Medications"
                            icon={<IoNewspaperOutline style={{fontSize:'25px',color:'rgb(210, 146, 29)'}}/>}
                            link="/medications"
                        />
                        <Activity 
                            title="Remainder"
                            icon={<IoIosAlert style={{fontSize:'25px',color:'rgb(210, 146, 29)'}}/>}
                            link="/remainder"
                        />
                    </div>    
                </div>   
        </div>
        </div>
        </div>
    )
}

export default Profile;