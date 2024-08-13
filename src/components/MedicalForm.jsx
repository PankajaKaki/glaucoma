import React, { useState } from 'react';
import styles from './medicalform.module.css';

const MedicalForm = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [isDiabetic, setIsDiabetic] = useState(null);
  const [hasAllergies, setHasAllergies] = useState(null);
  const [allergies, setAllergies] = useState('');
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState('');

  const handleDiseaseChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDiseases([...selectedDiseases, value]);
    } else {
      setSelectedDiseases(selectedDiseases.filter(disease => disease !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ bloodGroup, isDiabetic, hasAllergies, allergies, selectedDiseases, maritalStatus });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <form className={styles.medicalform} onSubmit={handleSubmit}>
          <h2><b>Medical Information</b></h2>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              placeholder="DOB"
              required
            />

            <label><br/>Marital Status</label>
            <div className={styles.radiogroup}>
              <label>
                <input
                  type="radio"
                  value="married"
                  checked={maritalStatus === 'married'}
                  onChange={() => setMaritalStatus('married')}
                />
                Married
              </label>
              <label>
                <input
                  type="radio"
                  value="unmarried"
                  checked={maritalStatus === 'unmarried'}
                  onChange={() => setMaritalStatus('unmarried')}
                />
                Unmarried
              </label>
            </div>

            <label htmlFor="bloodGroup">Blood Group</label>
            <select
              id="bloodGroup"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className={styles.formgroup}>
            <label>Do you have any allergies?</label>
            <div className={styles.radiogroup}>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={hasAllergies === true}
                  onChange={() => setHasAllergies(true)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={hasAllergies === false}
                  onChange={() => setHasAllergies(false)}
                />
                No
              </label>
            </div>
          </div>

          {hasAllergies && (
            <div className={styles.formgroup}>
              <label htmlFor="allergies">Please list your allergies:</label>
              <textarea
                id="allergies"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                placeholder="Enter your allergies here"
              />
            </div>
          )}

          <div className={styles.formgroup}>
            <label htmlFor="diseases">Any other Diseases</label>
            <div className={styles.checkboxgroup}>
              <label>
                <input
                  type="checkbox"
                  value="Diabetes"
                  checked={selectedDiseases.includes('Diabetes')}
                  onChange={handleDiseaseChange}
                />
                Diabetes
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Cardiovascular Disease and Blood Pressure"
                  checked={selectedDiseases.includes('Cardiovascular Disease and Blood Pressure')}
                  onChange={handleDiseaseChange}
                />
                Cardiovascular Disease and Blood Pressure
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Sleep Apnea"
                  checked={selectedDiseases.includes('Sleep Apnea')}
                  onChange={handleDiseaseChange}
                />
                Sleep Apnea
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Heart Disease"
                  checked={selectedDiseases.includes('Heart Disease')}
                  onChange={handleDiseaseChange}
                />
                Heart Disease
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Hypertension"
                  checked={selectedDiseases.includes('Hypertension')}
                  onChange={handleDiseaseChange}
                />
                Hypertension
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MedicalForm;
