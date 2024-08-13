import React, { useState } from 'react';
import  styles from './signupform.module.css';
import {Link} from 'react-router-dom'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftsection}>
        <div className={styles.imagecontainer}>
          <img src='eye1[1].jpeg.jpg' alt="Sign Up" className={styles.sideimage}/>
        </div>
        <div className={styles.imagetext}>
          <h1>Welcome
          Join our community today!
          </h1>
          <p>Protect your vision with knowledge. Our glaucoma website offers expert information, self-assessment tools, and treatment options. Don't let glaucoma steal your sight. Visit us today for a brighter tomorrow.</p>
        </div>
      </div>
      <div className={styles.rightsection}>
  <form onSubmit={handleSubmit} className={styles.form}>
    <div className={styles.formheader}>
      <div className={styles.logocontainer}>
        <img src='logosignup.jpg' alt="Logo" className={styles.logo} />
      </div>
      <h2 className={styles.formtitle}>Sign Up</h2>
    </div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.inputfield}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.inputfield}
            required
          />
          <div className="form-row">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className={styles.inputfield}
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={styles.inputfield}
              required
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles.inputfield}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputfield}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className={styles.inputfield}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={styles.inputfield}
            required
          />
          <Link to='/medical-form' style={{textDecoration:'none'}}>
          <button  type="submit" className={styles.submitbutton}>Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;